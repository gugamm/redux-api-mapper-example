import React, { PureComponent } from 'react';
import { compose }              from 'redux';
import { connect }              from 'react-redux';
import { apiConnect }           from 'redux-api-mapper';
import { SearchBar, ReposList } from './components';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({username}) {
    this.props.getRepos(username);
  }

  render() {
    const { isFetching, isError } = this.props;
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} isSearching={this.props.isFetching} />
        <ReposList repos={this.props.repos} />
        {
          (isFetching && <div>Loading...</div>) ||
          (isError && <div>Could not load user data</div>)
        }
      </div>
    );
  }
};

App.propTypes = {
  repos      : React.PropTypes.arrayOf(React.PropTypes.object),
  isFetching : React.PropTypes.bool,
  isError    : React.PropTypes.bool,

  getRepos   : React.PropTypes.func
};

const mapStateToProps = (state) => {
  const { isFetching, isError, data } = state.api.Repos.getRepos;

  return { isFetching, isError, repos : data };
};

const mapApiToProps = (api) => {
  const getRepos = api.Repos.getRepos;

  return {
    getRepos : (username) => getRepos({username})
  }
};

const enchance = compose(
  connect(mapStateToProps),
  apiConnect(mapApiToProps)
);

export default enchance(App);
