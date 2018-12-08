import React, { Component } from 'react';
import Button from './components/Button';
import { FormWrapper, StyledFormWrapper } from './components/FormWrapper';
import AppWrapper from './App.styled';
import { ErrorMessage, ErrorMessageContainer } from './shared/ErrorMessage';
import { NUMBER_FILTER_PATTERN, STRING_FILTER_PATTERN } from './shared/constants';

class App extends Component {
  constructor() {
    super();
    this.predicates = [
      {
        title: 'User Name',
        type: 'string',
      },
      {
        title: 'Email',
        type: 'integer',
      }
    ];
    this.operators = {
      'string': [
        {
          title: 'in list',
          validPattern: '^[a-zA-Z]+(?:[ \\t]*,[ \\t]*[a-zA-Z]+)+$',
        },
        {
          title: 'equals',
          validPattern: '^[a-zA-Z]+$',
        }
      ],
      'integer': [
        {
          title: 'greater',
          validPattern: '^\\d+$',
        },
        {
          title: 'between',
          multiValue: true,
          validPattern: '^\\d+$',
        },
        {
          title: 'in list',
          validPattern: '^\\d+(?:[ \t]*,[ \t]*\\d+)+$',
        }
      ]
    };
    this.state = {
      filters: [],
      errors: [],
      predicates: this.predicates,
      operators: this.operators,
    };
  }

  componentDidMount() {
    this.addFilter();
  }

  addFilter() {
    this.setState({ filters: this.state.filters.concat([ this.getInitialFilter() ]) });
  }

  dismissError(index) {
    this.setState({ errors: this.state.errors.filter((error, errorIndex) => errorIndex !== index) });
  }

  updateFilter(index, key, value) {
    this.setState(prevState => {
      const newFilters = [...prevState.filters];
      newFilters[index] = { ...newFilters[index], [key]: value };
      return { filters: newFilters };
    });
  }

  updateMultiValueFilter(index, key, value, multiValueIndex) {
    const filterKeyVal = [...(this.state.filters[index][key] || [])];
    filterKeyVal[multiValueIndex] = value;
    this.updateFilter(index, key, filterKeyVal);
  }

  getActiveOperators(index) {
    return this.state.operators[this.state.predicates.filter((predicate) => this.state.filters[index].predicate === predicate.title)[0].type];
  }

  getFullOperator(index) {
    return this.getActiveOperators(index).filter((operator) => operator.title === this.state.filters[index].operator)[0] || {};
  }

  getInitialFilter() {
    return {
      predicate: this.state.predicates[0].title,
      operator: this.state.operators[this.state.predicates[0].type][0].title,
    };
  }

  submitForm(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ isLoading: true });
      setTimeout(() => this.setState({ isLoading: false }), 5000);
    }
  }

  validateForm() {
    const errors = this.state.filters.reduce((errors, item, index) => {
      if (!item.value) {
        return errors.concat([`Filter "${item.predicate} -> ${item.operator}" must have a value`]);
      } else if (this.getFullOperator(index).multiValue && !Array.isArray(item.value)) {
        return errors.concat([`Filter "${item.predicate} -> ${item.operator}" must have multiple values`]);
      } else {
        const validPatternRegex = new RegExp(this.getFullOperator(index).validPattern);
        if (Array.isArray(item.value)) {
          const multiValueErrors = item.value.reduce((errors, value, index) => {
            if (!validPatternRegex.test(value)) {
              return errors.concat([`Value ${index + 1} ("${value}") for filter "${item.predicate} -> ${item.operator}" is not valid`]);
            }
            return errors;
          }, []);
          return errors.concat(multiValueErrors);
        } else {
          debugger;
          if (!validPatternRegex.test(item.value)) {
            return errors.concat([`Value "${item.value}" for filter "${item.predicate} -> ${item.operator}" is not valid`]);
          }
        }
      }
      return errors;
    }, []);

    this.setState({
      errors,
    });

    if (errors.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log(this.state);
    return (
      <AppWrapper>
        <form onSubmit={(event) => this.submitForm(event)}>
          { 
            this.state.filters.map((item, index) => {
              return <FormWrapper
                key={`filter-${index}`}
                predicates={this.state.predicates}
                operators={this.getActiveOperators(index)}
                onChange={(key, value) => this.updateFilter(index, key, value)}
                multiValueOnChange={(key, value, multiValueIndex) => this.updateMultiValueFilter(index, key, value, multiValueIndex)}
                predicateValue={item.predicate}
                operatorValue={item.operator}
                multiValue={this.getFullOperator(index).multiValue}
                disabled={this.state.isLoading}
              />
            })
          }
          <StyledFormWrapper>
            <Button
              onClick={() => this.addFilter()}
              disabled={this.state.isLoading}
              isLoading={this.state.isLoading}
            >Add Filter</Button>
            <Button
              disabled={this.state.isLoading}
              isLoading={this.state.isLoading}
              submitType={true}
            >Submit</Button>
          </StyledFormWrapper>
        </form>
        <ErrorMessageContainer>
          { 
            this.state.errors.map((item, index) => {
              return <ErrorMessage
                key={`error-${index}`}
                error={item}
                dismissError={() => this.dismissError(index)}
              />
            })
          }
        </ErrorMessageContainer>
      </AppWrapper>

    );
  }
}

export default App;
