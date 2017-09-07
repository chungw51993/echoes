class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (

		<div onClick={() => { this.props.setSelected(this.props.album); } } className="search-result thumbnail">
			<img src={this.props.album.artworkUrl100} className="img-rounded"/>
			<div className="caption">
					<span className="artist">{this.props.album.artistName}</span>&nbsp;-&nbsp;
					<span className="album">{this.props.album.collectionName}</span>&nbsp;
					<span className="date">{this.props.album.releaseDate.substring(0, 4)}</span>
			</div>
		</div>

    );
  }
}

window.Result = Result;
