const React = require("react");
const ReactDOM = require("react-dom");
const BackButton = require("./BackButton");
const MemoriesButton = require("./MemoriesButton");

const GalleryPage = function(props) {
  return (
    <div className="App">
      <BackButton onClick={() => props.nav("MainPage")} />
      <MemoriesButton onClick={() => props.nav("MemoriesPage")} />
      <h2>Congrats Class of 2020!</h2>

      <div className="imageGrid">
        <div className="row">
          <div className="column">
            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=oycl24seas"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Emaan Riaz</div>
                </div>
              </a>
              <img src="https://humble-hill-nannyberry.glitch.me/images/IMG_0055_Original%202.jpg" />
            </div>

            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=vihcll3lhv"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Hermione Granger</div>
                </div>
              </a>
              <img src="https://i.pinimg.com/originals/65/3d/01/653d01c977ea7ce63d9eb06f5a273d7d.jpg" />
            </div>
            
             
            
          </div>

          <div className="column">
            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=qi746yd0yar"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Barack Obama</div>
                </div>
              </a>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" />
            </div>
            
            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=bvbpp3g3w2r"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Ron Weasley</div>
                </div>
              </a>
              <img src="https://media.harrypotterfanzone.com/ron-weasley-order-of-the-phoenix-portrait-8.jpg" />
            </div>
            
          </div>

          <div className="column">
            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=p7d1241acb"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Taylor Swift</div>
                </div>
              </a>
              <img src="https://www.gotceleb.com/wp-content/uploads/photos/taylor-swift/headshot-2017/Taylor-Swift:-Headshot-2017--05.jpg" />
            </div>

            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=0n9nqhrk5fm"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Will Smith</div>
                </div>
              </a>
              <img src="https://d26oc3sg82pgk3.cloudfront.net/files/media/filer_public/2015/11/25/1126_will_smith_matt_doyle.jpeg" />
            </div>
          </div>

          <div className="column">
            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=7eezefq9x7t"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Harry Potter</div>
                </div>
              </a>
              <img src="https://i.pinimg.com/originals/38/b8/96/38b8969a1af868b74a13f5613696fd00.jpg" />
            </div>

            <div className="container">
              <a
                href="https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=qv3d1uet9y"
                target="_blank"
              >
                <div class="overlay">
                  <div class="text">Katniss Everdeen</div>
                </div>
              </a>
              <img src="https://katnissland.weebly.com/uploads/2/3/5/1/23517340/3912302.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = GalleryPage;

//
// need query string. so that we can extract image and name info.
// get request for every querystring.
// first image in gallery is first querystring in database.
