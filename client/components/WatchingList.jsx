class WatchingList extends React.Component {
  constructor (props) {
    super (props);
  }

  render() {
    return (
      <tbody className='container-fluid entryList'>
        <tr className='row'>
          <th className='col-md-12'> Following </th>
        </tr>
        {this.props.watching.map(watching =>
          <Watching follow={watching} />
        )
      }
      </tbody>
    );
  }
}