class Profile extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      viewingEntry: '',
      allEntries: [],
      currentUser: '',
      watched: []
  }
}

  componentWillMount() {
    this.getUserEntries();
  }

  getUserEntries () {
    $.ajax({
      url: '/querydb',
      type: 'GET',
      success: (response) => {
        // sets state of all entries
        // sets current user name
        if (response.length) {
          this.setState({
            allEntries: response,
            currentUser: response[0].user,
          })
        }
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    });
  }

  // greetUser () {
  //   // if current user is identified
  //   if (this.state.currentUser) {
  //     // greet them by name
  //     return `Hello, ${this.state.currentUser}!`
  //   } else {
  //     // new users are greetedwith Hello
  //     return `Hello!`
  //   }
  // }


  render () {
    return (
    <div className="profile">
      <h1> {this.state.currentUser} Profile</h1>
      <div className="container">
        <div className='col-xs-8'>
          <h2>Impressions:</h2>
        </div>
        <div className='col-xs-4'>
          <h2>Following:</h2>
        </div>
      </div>
    </div>

    )
  }
}

window.Profile = Profile;


