const React = require("react");
const ReactDOM = require("react-dom");
const MainPage = require("./MainPage");
const GradPage = require("./GradPage");
const GalleryPage = require("./GalleryPage");
const BackButton = require("./BackButton");
const MemoriesPage = require("./MemoriesPage");



// constructor initializes local state by assigning an object to this.state
// also binds event handler method to instance
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.state = { page: "MainPage" };
  }

  handleNavigate(destination) {
    console.log("Navigating to", destination, "from", this.state.page);
    this.setState({ page: destination });
  }

  render() {
    let pageToRender;

    switch (this.state.page) {
      case "GalleryPage":
        pageToRender = <GalleryPage nav={this.handleNavigate} />;
        break;

      case "CreateProfile":
        pageToRender = <GradPage nav={this.handleNavigate} />;
        break;
        
      case "MemoriesPage":
        pageToRender = <MemoriesPage nav={this.handleNavigate}/>;
        break;

      default:
        if (this.state.page != "MainPage") {
          // Send debug message to console if default executes but state is not "Splash"
          // This could be triggered by:
          // (1) value of this.state.page is not recognized because of typo, etc.
          // (2) one of the case statements above does not end with `break;`
          console.log(
            'NOTE: Showing splash page by default, but current state is not "Splash"! \
          Current value of of this.state.page:',
            this.state.page
          );
        }

        pageToRender = <MainPage nav={this.handleNavigate} />;
    }

    return pageToRender;
  }
}

if (
  window.location.href ==
  "https://humble-hill-nannyberry.glitch.me/user/GradPage.html"
) {
  ReactDOM.render(<GradPage />, document.getElementById("main"));
}else {
  ReactDOM.render(<App />, document.getElementById("main"));
}


/*

ReactDOM.render(<MainPage />, document.getElementById("main"));



document.querySelector("#viewBtn").addEventListener("click", () => {
 ReactDOM.render(<GalleryPage />, document.getElementById("main"));
});
*/
