class UserProfile extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <tr className="entry">
        <td className="col-xs-2">
          <img src={this.props.art_url60}></img>
        </td>
        <td className="col-xs-5">
          <p>{this.props.name}</p>
        </td>
        <td className="col-xs-5">
          <div>{this.props.impression}</div>
        </td>
      </tr>
    );
  }
}

window.UserProfile = UserProfile;
