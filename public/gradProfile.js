// This code runs as soon as the page is loaded, when the script tag in the HTML file is executed.

let x = document.URL;
let url = "/getdb?" + x.split("?")[1]; // splits url on ? and gets queryID
let xhr = new XMLHttpRequest();
xhr.open("GET", url);


xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// set up callback function that will run when the HTTP response comes back
xhr.onloadend = function() {
  console.log(xhr.responseText);
  let data = JSON.parse(xhr.responseText);
  let gradimage = document.getElementById("gradImage");
  let college = document.getElementById("college");
  let major = document.getElementById("major");
  let gender = document.getElementById("gender");
  let bio = document.getElementById("bio");
  let nameHeader = document.getElementById("nameHeader");
 
  gradimage.src = data.image;
  gradimage.style.display = 'block';
  college.innerText = data.college;
  major.innerText = data.major;
  //gender.innerText = data.gender;
  bio.innerText = data.bio;
  nameHeader.innerText = data.fullname; 
  
  
};

// send off request
xhr.send();
