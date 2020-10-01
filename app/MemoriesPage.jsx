const React = require("react");
const ReactDOM = require("react-dom");
const BackButton = require("./BackButton");


const MemoriesPage = function(props) {
  return (
      
    <div className="App">
      <BackButton onClick={() => props.nav("GalleryPage")} />
      <h2>UCDavis Memories</h2>
      
      <div className="memoriesGrid">
        <div className="memoriesRow">
          <div className="memoriesColumn">
            <img id= "gridImg" src="https://alumni.ucdavis.edu/sites/g/files/dgvnsk451/files/styles/sf_landscape_16x9/public/images/event/Homecoming.jpg?h=4997dc06&itok=tleCURFl"/>
            <img id= "gridImg" src="https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/mrak-mall-1200.jpg?itok=dn9-F-v4"/>
            <img id= "gridImg" src="https://engineering.ucdavis.edu/wp-content/uploads/2013/09/PicnicDay053.jpg"/>
            <img id= "gridImg" src="https://www.ucdavis.edu/sites/default/files/images/page/20090418_picnicday_0262.jpg"/>
            <img id= "gridImg" src="https://leadership.ucdavis.edu/sites/g/files/dgvnsk1166/files/styles/sf_landscape_16x9/public/images/article/UC-Davis-bike-egg.jpg?h=17bad5f8&itok=ItrklP3u"/>
            <img id= "gridImg" src="https://theaggie.org/wp-content/uploads/2017/05/bikemonth_ca_Venoos_Moshayedi.jpg"/>
            <img id= "gridImg" src="https://live.staticflickr.com/6128/5934402712_381726b0ac_b.jpg"/>
          </div>
          
          <div className="memoriesColumn">
            <img id= "gridImg" src="https://www.usnews.com/dims4/USNEWS/63abfd4/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F0c%2Fec8a2b1ae32ba1d7937497c0fea02e%2Fcollege-photo_35047.jpg"/>
            <img id= "gridImg" src="https://ces-apps.ucdavis.edu/Public/common/facility-images/quad_circle.jpg"/>
            <img id= "gridImg" src="https://ces-apps.ucdavis.edu/Public/common/facility-images/quad_tree.jpg"/>
            <img id= "gridImg" src="https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/dsc_0556_copy.jpg?itok=izzeMtBu"/>
            <img id= "gridImg" src="https://pbs.twimg.com/media/DH3MiRVW0AIWtm3.jpg"/>
            <img id= "gridImg" src="https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/team-with-big-sky-trophy-925_0.jpg?itok=6tKCsb6z"/>
            
          </div>
          
          
          
        </div>
      </div>


 
    </div>
  );
};

module.exports = MemoriesPage;