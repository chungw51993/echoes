class FollowerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allImpression: [],
      currentUser: ''
    };
  }

  componentWillMount() {
    this.getAllImpression();
  }

  getAllImpression() {
    var getFollowerImpression = function() {
      return $.ajax({
        url: '/api/follower/',
        type: 'GET'
      });
    };

    var getUserImpression = function() {
      return $.ajax({
        url: '/querydb',
        type: 'GET',
      });
    };

    $.when(getFollowerImpression(), getUserImpression()).done((follower, user) => {
      var merged = [].concat.apply([], follower[0]);

      merged = user[0].concat(merged);

      var sorted = merged.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      this.setState({
        allImpression: sorted,
        currentUser: user[0].username
      });
    });
  }

  render() {
    return (
      <div className='container feed'>
        <h1 className='followerTitle'>Your Feed</h1>
        <div className="row">
          <div className="col-md-3">
            <Search getAllImpression={this.getAllImpression.bind(this)}/>
          </div>
          <div className="col-md-9">
            <table className='table table-responsive'>
              <thead>

                <tr className=''>
                  <th className="col-xs-2">Username</th>
                  <th className="col-xs-1">
                    <span className='glyphicon glyphicon-calendar'></span>
                  </th>
                  <th className="col-xs-2"><h5>Album</h5></th>
                  <th className="col-xs-3"></th>
                  <th className='col-xs-3'><h5>Impression</h5></th>
                  <th className='col-xs-1'><h5>Rating</h5></th>
                </tr>

              </thead>
              <tbody>

                {this.state.allImpression.map((impression) => {
                  return (
                    <Follower impression={impression.impression}
                      art={impression.art_url60}
                      name={impression.name}
                      title={impression.title}
                      date={impression.date}
                      username={impression.username}
                      genre={impression.genre}
                      year={impression.year}
                      rating={impression.rating}
                      key={impression.id}
                      currentUser={this.state.currentUser}/>
                  );
                })}
                </tbody>
              </table>
          </div>
          </div>
        </div>
    );
  }
}

window.FollowerList = FollowerList;
