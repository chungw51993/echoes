class Watcher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="entry">
        <td className="col-xs-9">
          {this.props.WatcherName}
        </td>
        <td className="col-xs-3">
          <Link to={'/profile/' + this.props.WatcherName} className='btn btn-default'>
            profile
          </Link>
        </td>
      </tr>
    );
  }
}
