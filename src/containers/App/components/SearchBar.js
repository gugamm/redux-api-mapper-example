import React                from 'react';
import { Field, reduxForm } from 'redux-form';

const SearchBar = ({handleSubmit, handleSearch, isSearching}) => {
  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <Field component="input" type="text" name="username" placeholder="github username" />
      <button type="submit" disabled={isSearching}>search</button>
    </form>
  );
};

SearchBar.propTypes = {
  handleSearch : React.PropTypes.func.isRequired,
  isSearching  : React.PropTypes.bool.isRequired
};

export default reduxForm({
  form : 'searchForm'
})(SearchBar);
