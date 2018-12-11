import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const mockResponse = {"predicates":[{"title":"Last Name","type":"string"},{"title":"Screen Width","type":"integer"},{"title":"# of Visits","type":"integer"},{"title":"First Name","type":"string"},{"title":"User Email","type":"string"},{"title":"Domain","type":"string"},{"title":"Page Path","type":"string"},{"title":"Page Response time (ms)","type":"integer"},{"title":"Screen Height","type":"integer"}],"operators":{"integer":[{"title":"equals","validPattern":"^\\d+$","multiValue":false},{"title":"less than","validPattern":"^\\d+$","multiValue":false},{"title":"in list","validPattern":"^\\d+(?:[ \\t]*,[ \\t]*\\d+)+$","multiValue":false},{"title":"between","validPattern":"^\\d+$","multiValue":true},{"title":"greater than","validPattern":"^\\d+$","multiValue":false}],"string":[{"title":"starts with","validPattern":"^[a-zA-Z]+$","multiValue":false},{"title":"equals","validPattern":"^[a-zA-Z]+$","multiValue":false},{"title":"contains","validPattern":"^[a-zA-Z]+$","multiValue":false},{"title":"in list","validPattern":"^[a-zA-Z]+(?:[ \\t]*,[ \\t]*[a-zA-Z]+)+$","multiValue":false}]}};

const setup = () => {
  let loadPromise;
  let createPromise;
  const loadData = () => {
    loadPromise = Promise.resolve(mockResponse);
    return loadPromise;
  };
  const createQuery = () => {
    createPromise = Promise.resolve({ "query": "query" });
    return createPromise;
  };
  const wrapper = shallow(<App fetchBuilderContent={loadData} createQuery={createQuery} />);
  return loadPromise.then(() => {
    return wrapper;
  });
};

describe('App', () => {
  describe('getInitialFilter', () => {
    it('gets filter object with initial values', () => {
      setup().then((wrapper) => {
        expect(wrapper.instance().getInitialFilter()).toEqual({
          "predicate": "Last Name",
          "operator": "starts with"
        });
      });
    });
  });

  describe('addFilter', () => {
    it('adds filter with initial content', () => {
      setup().then((wrapper) => {
        // addFilter has already been called once
        expect(wrapper.state().filters).toEqual(
          [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            }
          ]
        );
      });
    });
  });

  describe('dismissError', () => {
    it('removes error at index', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          errors: [
            "error1",
            "error2"
          ]
        });
        wrapper.instance().dismissError(1);
        expect(wrapper.state().errors).toEqual(
          [
            "error1"
          ]
        );
      });
    });

    it('keeps errors if no index matches', () => {
      const errors = [
        "error1",
        "error2"
      ];
      setup().then((wrapper) => {
        wrapper.setState({
          errors
        });
        wrapper.instance().dismissError(2);
        expect(wrapper.state().errors).toEqual(errors);
      });
    });
  });

  describe('updateFilter', () => {
    it('updates key at index', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            },
            {
              "predicate": "First Name",
              "operator": "equals"
            }
          ]
        });
        wrapper.instance().updateFilter(0, "predicate", "test");
        expect(wrapper.state().filters).toEqual(
          [
            {
            "predicate": "test",
            "operator": "starts with"
            },
            {
              "predicate": "First Name",
              "operator": "equals"
            }
          ]
        );
      });
    });

    it('adds a key at index if key doesn\'t exist', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            }
          ]
        });
        wrapper.instance().updateFilter(0, "test", "test");
        expect(wrapper.state().filters).toEqual(
          [
            {
            "predicate": "Last Name",
            "operator": "starts with",
            "test": "test"
            }
          ]
        );
      });
    });

    it('adds an index if it doesn\'t exist', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            }
          ]
        });
        wrapper.instance().updateFilter(1, "test", "test");
        expect(wrapper.state().filters).toEqual(
          [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            },
            {
              "test": "test"
            }
          ]
        );
      });
    });
  });

  describe('updateMultiValueFilter', () => {
    it('updates value at index', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "between",
            "value": [1,3],
            }
          ]
        });
        wrapper.instance().updateMultiValueFilter(0, "value", 4, 1);
        expect(wrapper.state().filters).toEqual(
          [
            {
              "predicate": "Screen Width",
              "operator": "between",
              "value": [1,4],
            }
          ]
        );
      });
    });

    it('creates new array if none exists', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "between",
            }
          ]
        });
        wrapper.instance().updateMultiValueFilter(0, "value", 4, 0);
        expect(wrapper.state().filters).toEqual(
          [
            {
              "predicate": "Screen Width",
              "operator": "between",
              "value": [4],
            }
          ]
        );
      });
    });
  });

  describe('getActiveOperators', () => {
    it('gets active operators for index', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            }
          ]
        });
        expect(wrapper.instance().getActiveOperators(0)).toEqual(mockResponse.operators.integer);
      });
    });
  });

  describe('removeFilter', () => {
    it('removes filter at index', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            },
            {
              "predicate": "First Name",
              "operator": "equals"
            }
          ]
        });
        wrapper.instance().removeFilter(1);
        expect(wrapper.state().filters).toEqual(
          [
            {
              "predicate": "Last Name",
              "operator": "starts with"
            }
          ]
        );
      });
    });

    it('keeps filters if no index matches', () => {
      const filters = [
        {
        "predicate": "Last Name",
        "operator": "starts with"
        },
        {
          "predicate": "First Name",
          "operator": "equals"
        }
      ];
      setup().then((wrapper) => {
        wrapper.setState({
          filters
        });
        wrapper.instance().removeFilter(2);
        expect(wrapper.state().filters).toEqual(filters);
      });
    });
  });

  describe('submitForm', () => {
    it('sets query state when api call resolves', () => {
      const event = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn()
      }
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with",
            "value": "test"
            }
          ]
        });
        wrapper.instance().submitForm(event).then(() => {
          expect(wrapper.state().query).toEqual("query");
        });
      });
    });
  });

  describe('validateForm', () => {
    it('sets error if item doesn\'t have value', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "starts with"
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(false);
        expect(wrapper.state().errors).toEqual([
          'Filter "Last Name -> starts with" must have a value'
        ]);
      });
    });

    it('sets error if multi-value item doesn\'t have multiple values', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "between",
            "value": 1
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(false);
        expect(wrapper.state().errors).toEqual([
          'Filter "Screen Width -> between" must have multiple values'
        ]);
      });
    });

    it('sets error if multi-value item doesn\'t have valid items', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "between",
            "value": ['a','b>']
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(false);
        expect(wrapper.state().errors).toEqual([
          'Value 1 ("a") for filter "Screen Width -> between" is not valid',
          'Value 2 ("b>") for filter "Screen Width -> between" is not valid'
        ]);
      });
    });

    it('sets error if multi-value item doesn\'t have all fields filled out', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "between",
            "value": [1]
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(false);
        expect(wrapper.state().errors).toEqual([
          'Filter "Screen Width -> between" must have all values filled out'
        ]);
      });
    });

    it('sets error if one-value item doesn\'t have a valid value', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Screen Width",
            "operator": "equals",
            "value": "test"
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(false);
        expect(wrapper.state().errors).toEqual([
          'Value "test" for filter "Screen Width -> equals" is not valid'
        ]);
      });
    });

    it('returns true if filters are valid', () => {
      setup().then((wrapper) => {
        wrapper.setState({
          filters: [
            {
            "predicate": "Last Name",
            "operator": "equals",
            "value": "test"
            },
            {
              "predicate": "Screen Width",
              "operator": "equals",
              "value": 780
            }
          ]
        });
        expect(wrapper.instance().validateForm()).toEqual(true);
      });
    });
  });
});
