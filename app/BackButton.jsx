const React = require('react');

const BackButton = function(props) {
  return(
    <div className="BackButton" onClick={props.onClick}>
      Back
    </div>
  );
}

module.exports = BackButton