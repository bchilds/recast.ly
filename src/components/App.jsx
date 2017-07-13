// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData} />
//     </div>
//   </div>

// );

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleVideoClick = this.handleVideoClick.bind(this);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };

  }

  handleVideoClick (videoObject) {
    debugger;
    this.setState({
      currentVideo: videoObject
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList state={this.state} handler={this.handleVideoClick} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App />, document.getElementById('app'));

