class Follower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month: '',
      currentUser: this.props.currentUser
    };
  }

  componentWillMount () {
    this.setState ({
      month: this.props.date.slice(5, 7)
    });
  }

  render() {

    let link = null;

    if (this.state.currentUser === this.props.username) {
      link = <a href='/profile'><h3>{this.props.username}</h3></a>;
    } else {
      link = <a href={'/profile/' + this.props.username}><h3>{this.props.username}</h3></a>;
    }

    return (
      <tr className='follower feed'>
        <td className='followerUsername col-xs-2'>
          {link}
        </td>
        <td className='listenDate col-xs-1'>
          <span className='month'><h4>{moment.months(this.state.month - 1)}</h4> </span>
          <span className='day'><h4>{this.props.date.slice(8, 10)}</h4></span>
          <span className='year'>{this.props.date.slice(0, 4)}</span>
        </td>
        <td className='col-xs-2'>
          <div>
            <img className='albumArt' src={this.props.art} />
          </div>
        </td>
        <td className='albumInfo col-xs-3'>
          <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
          </div>
        </td>
        <td className='impression col-xs-3'>
          <div>{this.props.impression}</div>
        </td>
        <td className='rating col-xs-1'><h3>{this.props.rating}</h3></td>
      </tr>
    );
  }
}

window.Follower = Follower;
