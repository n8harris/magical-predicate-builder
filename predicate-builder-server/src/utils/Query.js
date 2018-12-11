import { BUILDER_CONTENT_TYPES } from '../shared/constants';
import Firebase from './Firebase';

const createQueryFromFilter = (filter) => {
  var replacePattern = new RegExp("(\\" + filter.operator.replace_character + ")", "g");
  var replaceIndex = 0;
  var query = filter.predicate.db_field;
  // Append to current query with sql equivalent from operator injected with values from filter
  query += " " + filter.operator.sql_equivalent.replace(replacePattern, () => {
    const index = replaceIndex;
    replaceIndex++;
    return Array.isArray(filter.value) ? filter.value[index] : filter.value;
  });
  return query;
};

const createQuery = (filters) => {
  const collections = [BUILDER_CONTENT_TYPES.PREDICATES, BUILDER_CONTENT_TYPES.OPERATORS];
  let query = "SELECT * FROM sessions WHERE ";
  return Firebase.getCollections(collections).then(values => {
    filters.forEach((filter, index) => {
      // Access indices of returned promises. Follows same indices as collections array above.
      const predicate = values[0].filter(value => {
        return value.title === filter.predicate;
      })[0];
      const operator = values[1].filter(value => {
        return value.title === filter.operator;
      })[0];
      // We need full filter here to access fields like sql_equivalent, db_field, and replace_character
      const fullFilter = {
        predicate: predicate,
        operator: operator,
        value: filter.value,
      };
      query += index === 0 ? createQueryFromFilter(fullFilter) : ' AND ' + createQueryFromFilter(fullFilter);
    });
    return query;
  });
};

export default createQuery;