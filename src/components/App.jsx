var App = () => (
  <div>
    <h1>Hello</h1>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      <VideoList videos={window.exampleVideoData} />
    </div>
  </div>

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App />, document.getElementById('app'));

