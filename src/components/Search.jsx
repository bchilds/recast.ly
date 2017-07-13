// var Search = () => (


//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onKeyPress={searchYoutube({query: }, callback)}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = _.debounce(this.handleKeyPress.bind(this), 500);    
  }

  handleKeyPress (event) {
    searchYouTube({query: event.target.value}, (videos) => {
      this.props.handler(videos);
    });
  }

  catchEvent (event) {
    event.persist();
    this.handleKeyPress(event);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.catchEvent.bind(this)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

//onKeyPress={searchYoutube({query: undefined}, callback)}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//calback will fill out video list with videos