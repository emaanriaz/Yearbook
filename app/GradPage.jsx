const React = require("react");
const GalleryPage = require("./GalleryPage");
const ReactDOM = require("react-dom");
const BackButton = require("./BackButton");

//require("react-images-upload");
var createReactClass = require("create-react-class");

var GradPage = createReactClass({
  getInitialState: function() {
    return { selectedFile: this.null };
  },

  handlePhotoChange(event) {
    this.setState(
      {
        selectedFile: event.target.files[0]
      },
      () => {
        const selectedFile = document.querySelector("#fileChooser").files[0];

        // store it in a FormData object
        const formData = new FormData();
        // name of field, the file itself, and its name
        formData.append(
          "newImage",
          this.state.selectedFile,
          this.state.selectedFile.name
        );

        // build a browser-style HTTP request data structure
        const xhr = new XMLHttpRequest();
        // it will be a POST request, the URL will this page's URL+"/upload"
        xhr.open("POST", "/upload", true);

        // callback function executed when the HTTP response comes back
        xhr.onloadend = function(e) {
          // Get the server's response body
          console.log(xhr.responseText);
          // now that the image is on the server, we can display it!
          let newImage = document.querySelector("#gradImage");
          newImage.src =
            "https://humble-hill-nannyberry.glitch.me/images/" +
            selectedFile.name;
          newImage.style.display = "block";
          document.querySelector(".image").classList.remove("upload");

          console.log(newImage);
        };

        // actually send the request
        xhr.send(formData);
      }
    );
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleCollegeChange(event) {
    this.setState({ college: event.target.value });
  },

  handleMajorChange(event) {
    this.setState({ major: event.target.value });
  },

  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  },
  handleBioChange(event) {
    this.setState({ bio: event.target.value });
  },

  handleSubmit(event) {
    //console.log(this.state.college + this.state.major + this.state.gender + this.state.bio);
    let img = document.querySelector("#gradImage");
    let data = {
      image: img.src,
      name: this.state.name,
      college: this.state.college,
      major: this.state.major,
      gender: this.state.gender,
      bio: this.state.bio
    };
    console.log(data);
    // new HttpRequest
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/saveData", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // setup callback function
    xmlhttp.onloadend = function(e) {
      console.log(xmlhttp.responseText);
      let responseStr = xmlhttp.responseText;
      let gradProfileLink =
        "https://humble-hill-nannyberry.glitch.me/gradProfile.html?id=" +
        responseStr;
      window.open(gradProfileLink);
      window.location.href = "https://humble-hill-nannyberry.glitch.me";
    };

    // Send off the HTTP request
    xmlhttp.send(JSON.stringify(data));

    event.preventDefault();
  },

  render: function(props) {
    return (
      <div className="App">
        <h1>Graduate Info</h1>
        <div className="gradLayout">
          <div className="profileInfo">
            <div className="displayImage">
              <div className="image upload">
                <img id="gradImage" />
                <form method="post" encType="multipart/form-data">
                  <button className="btn">Choose Image</button>
                  <input
                    id="fileChooser"
                    type="file"
                    name="selectedFile"
                    value={this.state.photo}
                    onChange={this.handlePhotoChange}
                    accept="image/*"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="optionMenu">
            <form onSubmit={this.handleSubmit} id="form">
              <label>
                <input
                  type="text"
                  id="nameInfo"
                  name="name"
                  placeholder="Full Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  id="collegeInfo"
                  name="college"
                  placeholder="College"
                  value={this.state.college}
                  onChange={this.handleCollegeChange}
                />
              </label>

              <label>
                <input
                  type="text"
                  id="majorInfo"
                  name="major"
                  placeholder="Major"
                  value={this.state.major}
                  onChange={this.handleMajorChange}
                />
              </label>

              <label>
                <input
                  type="text"
                  name="gender"
                  id="genderInfo"
                  placeholder="Gender"
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                />
              </label>

              <label>
                <textarea
                  name="bio"
                  id="bioInfo"
                  placeholder="Tell us about you! Write a 150 word bio."
                  value={this.state.bio}
                  onChange={this.handleBioChange}
                ></textarea>
              </label>
              <input type="submit" value="Submit" id="submitProfile" />
            </form>
          </div>
        </div>
      </div>
    );
  }
});



module.exports = GradPage;
