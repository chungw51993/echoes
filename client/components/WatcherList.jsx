class WatcherList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className='table table-responsive'>
        <thead>
          <tr className=''>
            <th className='profile-list-title col-xs-9'>Username</th>
            <th className="col-xs-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody className=''>
          {this.props.allWatcher.map(watcher =>
            <Watcher WatcherName={watcher.username}
              key={watcher.id} />
          )}
        </tbody>
      </table>
    );
  }
}

window.WatcherList = WatcherList;
