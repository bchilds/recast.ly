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
    
    var initialVideo = {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: 'hello'
      },
      snippet: {
        publishedAt: '',
        channelId: '',
        title: '',
        description: '',
      },
      channelTitle: '',
      liveBroadcastContent: ''
    };

    this.state = {
      currentVideo: initialVideo,
      videos: []
    };

  }

  handleVideoClick (videoObject) {
    this.setState({
      currentVideo: videoObject
    });
  }

  componentDidMount() {
    this.props.searchYouTube({ query: 'SeaNanners Overwatch'}, (videos) => { 

      this.setState({
        currentVideo: videos[0],
        videos: videos,
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handler={this.handleVideoClick} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById('app'));

