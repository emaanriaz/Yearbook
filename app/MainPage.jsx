const React = require("react");
const ReactDOM = require("react-dom");
const Button = require('./Button');

/* the main page for the index route of this app */
const MainPage = function(props) {
  return (
    <div className="App">
      <div className="mainGraphic">
        
      <h2>Welcome</h2>
      <Button text="View gallery" onClick={function() { props.nav("GalleryPage")} }></Button>
      <Button text="Create a profile" onClick={function() {window.location.href = '/auth/google'} }></Button>
      <img id="mainImg" src="https://cdn.glitch.com/0d8f8264-c74b-4a6a-b3df-a9332beef3b5%2Fdavis-landscape-2-2-3.png?v=1600125243674"/>
      
      </div>
    
    </div>
       
  );
};

module.exports = MainPage;

//      <img id="logo" src = "https://communicationsguide.ucdavis.edu/sites/g/files/dgvnsk6246/files/inline-images/expanded_logo_2_gold-blue.gif"/>

     // <img id="mainImg" src="https://cdn.glitch.com/0d8f8264-c74b-4a6a-b3df-a9332beef3b5%2Fdavis-landscape-2-2-2.png?v=1600088636601"/>
     // <img id="mainImg" src="https://studentaffairs.ucdavis.edu/sites/g/files/dgvnsk8726/files/styles/sf_title_banner/public/2020-04/Virtual_UCDavis.png?h=77dfdf51&itok=rO2sGYG1"/>