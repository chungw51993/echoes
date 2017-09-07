class UserProfileList extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <table className="table-responsive table">
        <thead>
          <tr className="">
            <th className='profile-list-title profile-list-left col-xs-2'>
              Album
            </th>
            <th className="profile-list-title profile-list-left col-xs-5">
              Artist
            </th>
            <th className="profile-list-title profile-list-left col-xs-5">
              Impressions
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.allEntries.map(entry =>
            <UserProfile art_url60={entry.art_url60}
              name={entry.name}
              impression={entry.impression} />
          )}
        </tbody>
      </table>
    );
  }
}

window.UserProfileList = UserProfileList;
