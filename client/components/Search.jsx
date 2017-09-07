class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      results: [],
      selectedListenDate: null,
      rating: '',
      impression: '',
    };
  }
  // sets default date for calendar input field
  componentWillMount () {
    this.setState({
      selectedListenDate: this.setDate()
    });
  }
  // gets and formats the current date
  setDate () {
    // generates current date
    var todayDate = new Date();
    // uses moment.js to format date
    var formattedDate = moment(todayDate).format('YYYY-MM-DD');

    // return the date
    return formattedDate;
  }
  // displays only the clicked album
  setSelected (album) {
    // date defaults to current date
    var date = $('input').val() || this.state.selectedListenDate;
    // sets state to display one album and sets state of listen date
    this.setState({
      results: [album],
      selectedListenDate: date
    });
  }
  // sends request to iTunes api
  iTunesSearch (term) {
    this.setState({term});
    // used percent encoding for iTunes API search
    var query = this.state.term.split(' ').join('%20');
    // creates search URL with limit of four results
    var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=4';

    $.ajax({
      url: searchUrl,
      data: {
        format: 'json'
      },
      type: 'GET',
      dataType: 'jsonp',
      success: (data) => {
        // changes state of results, triggering view change
        this.setState({results: data.results});
      },
      error: (error) => {
        console.log(error);
        return;
      }
    });
  }

  // send selected album and listen date to db via post request
  addNewEntry (album, date) {
    // send object with keys album and date
    var newEntry = {
      album: album,
      date: date.slice(0, 10),
      impression: this.state.impression,
      rating: this.state.rating
    };


    // user can only submit one album
    if (this.state.results.length === 1) {
      $.ajax({
        url: '/querydb',
        type: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        data: JSON.stringify(newEntry),
        success: (results) => {
          // assigns current date to state
          // clears previously set state
          var date = this.setDate();
          this.setState({
            term: '',
            results: [],
            selectedListenDate: date,
            impression: '',
            rating: ''
          });
          // gets user entries from db and rerenders entry list
          this.props.getAllImpression();
          // clear the search bar
          $('.search-bar').val('');
        },
        error: function (error) {
          console.log(error);
          return;
        }
      });
    }
  }

  change (rating, impression) {
    if (rating !== '' && impression !== '') {
      this.state.rating = rating;
      this.state.impression = impression;
    }
  }

  render() {

    // only renders the add album button if one album is selected
    if (this.state.results.length === 1) {
      $('#add-album-btn').show();
      $('#add-impression').show();
    } else {
      $('#add-album-btn').hide();
      $('#add-impression').hide();
    }

    return (
      <div>
        <div className='search-container'>
          <h3 className='search-prompt'>Add an album impression:</h3>
          <input type="date" name="date" className="form-control search-bar"></input>
          <div className="results">
          <SearchBar search={_.debounce(this.iTunesSearch.bind(this), 300)}
                     className="search-bar" />
            <div id='add-impression'>
              <ImpressBox change={this.change.bind(this)}/>
            </div>
						<div id='add-album-btn' onClick={() => { this.addNewEntry(this.state.results[0], this.state.selectedListenDate); }}>
              <button type="button" className="btn btn-default">Add this album</button>
            </div>
            <div className="results-container">
              <ResultsList albums={this.state.results}
                addNewEntry={this.props.addNewEntry}
                setSelected={this.setSelected.bind(this)}
                className='results-container' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.Search = Search;
