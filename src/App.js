import React, { Component } from 'react';
import { func } from 'prop-types';
import Button from './components/Button';
import { FormWrapper, StyledFormWrapper } from './components/FormWrapper';
import AppWrapper from './App.styled';
import { ErrorMessage, ErrorMessageContainer } from './shared/ErrorMessage';
import LoadingSpinner from './shared/LoadingSpinner';
import ResultBox from './components/ResultBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      errors: [],
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    // Get content for filter dropdowns
    return this.props.fetchBuilderContent().then((content) => {
      Object.keys(content).forEach((key) => {
        this.setState(() => { return { [key]: content[key] } });
      });
      // Remove loading spinner
      this.setState({ isFetching: false });
      // Add initial filter value
      this.addFilter();
    });
  }

  /**
   * Add a new empty/initial filter
   */
  addFilter() {
    this.setState({ filters: this.state.filters.concat([ this.getInitialFilter() ]) });
  }

  /**
   * Remove error from component state at specified index
   * @param {Integer} index 
   */
  dismissError(index) {
    this.setState({ errors: this.state.errors.filter((error, errorIndex) => errorIndex !== index) });
  }
  
  /**
   * Updates filter key at a specific index in state
   * @param {Integer} index 
   * @param {string} key 
   * @param {string} value 
   */
  updateFilter(index, key, value) {
    this.setState(prevState => {
      const newFilters = [...prevState.filters];
      newFilters[index] = { ...newFilters[index], [key]: value };
      return { filters: newFilters };
    });
  }

  /**
   * Updates filter key at a nested index (e.g. { value: [1,3] }...replace value at one of those indices)
   * @param {Integer} index 
   * @param {string} key 
   * @param {string} value 
   * @param {Integer} multiValueIndex 
   */
  updateMultiValueFilter(index, key, value, multiValueIndex) {
    const filterKeyVal = [...(this.state.filters[index][key] || [])];
    filterKeyVal[multiValueIndex] = value;
    this.updateFilter(index, key, filterKeyVal);
  }

  /**
   * Get the operators we can use for the currently specified predicate
   * @param {Integer} index 
   */
  getActiveOperators(index) {
    return this.state.operators[this.state.predicates.filter((predicate) => this.state.filters[index].predicate === predicate.title)[0].type];
  }

  /**
   * Get all fields for the current title value of the operator that is currently in state at index
   * @param {Integer} index 
   */
  getFullOperator(index) {
    return this.getActiveOperators(index).filter((operator) => operator.title === this.state.filters[index].operator)[0] || {};
  }

  /**
   * Get initial filter to display so we are not just showing two buttons on app load
   */
  getInitialFilter() {
    return {
      predicate: this.state.predicates[0].title,
      operator: this.state.operators[this.state.predicates[0].type][0].title,
    };
  }

  /**
   * Remove filter from component state at specified index
   * @param {Integer} index 
   */
  removeFilter(index) {
    this.setState({ filters: this.state.filters.filter((item, filterIndex) => index !== filterIndex) });
  }

  /**
   * Validate form and submit filters from component state to API, saving query to state afterwards
   * @param {Event} event 
   */
  submitForm(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.validateForm()) {
      this.setState({ isLoading: true });
      return this.props.createQuery(this.state.filters).then((query) => {
        this.setState({ isLoading: false })
        this.setState({ query: query.query });
      });
    }
  }

  /**
   * Validate form with several conditions
   * TODO: Implement rules engine instead
   */
  validateForm() {
    const errors = this.state.filters.reduce((errors, item, index) => {
      // First case: Check for empty value field
      if (!item.value) {
        return errors.concat([`Filter "${item.predicate} -> ${item.operator}" must have a value`]);
      //Second case: Check for empty multi-value fields (between operator)
      } else if (this.getFullOperator(index).multiValue && !Array.isArray(item.value)) {
        return errors.concat([`Filter "${item.predicate} -> ${item.operator}" must have multiple values`]);
      // Third case: Pattern matching for operator. Make sure what we send to create the query is in the
      // correct format
      } else {
        // Get valid pattern from operator in Firestore
        const validPatternRegex = new RegExp(this.getFullOperator(index).validPattern);
        if (Array.isArray(item.value)) {
          const multiValueErrors = item.value.reduce((errors, value, index) => {
            if (!validPatternRegex.test(value)) {
              return errors.concat([`Value ${index + 1} ("${value}") for filter "${item.predicate} -> ${item.operator}" is not valid`]);
            }
            return errors;
          }, []);
          if (item.value.length <= 1) {
            return multiValueErrors.concat([`Filter "${item.predicate} -> ${item.operator}" must have all values filled out`]);
          } else {
            return errors.concat(multiValueErrors);
          }
        } else {
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
    return (
      <AppWrapper>
        {
          this.state.isFetching ?
          <LoadingSpinner /> :
          <>
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
                  removeFilter={() => this.removeFilter(index)}
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
          {
            this.state.query &&
            <ResultBox>
              <pre>
              { this.state.query }
              </pre>
            </ResultBox>
          }
        </>
        }
      </AppWrapper>

    );
  }
}

App.propTypes = {
  /**
   * helper function for retrieving data for builder dropdowns
   */
  fetchBuilderContent: func.isRequired,
  /**
   * helper function for sending filter data off to server to create query
   */
  createQuery: func.isRequired,
};

export default App;
