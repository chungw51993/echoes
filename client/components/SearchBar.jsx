// Searches iTunes
class SearchBar extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <input type='text' className="search-bar form-control" placeholder="Search for an album..."
             onKeyUp={event => this.props.search(event.target.value)}
          />
    )
  }
}

window.SearchBar = SearchBar;
