import React from 'react';

const ReposList = ({repos}) => {
  let reposRows = null;

  if (repos)
    reposRows = repos.map(repo => <li key={repo.id}>{repo.name}</li>);

  return (
    <div>
      <ul>
        {reposRows}
      </ul>
    </div>
  );
};

ReposList.propTypes = {
  repos : React.PropTypes.arrayOf(React.PropTypes.object)
};

export default ReposList;
