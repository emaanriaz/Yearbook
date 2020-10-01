const React = require('react');

function Button(props) {
  return (
      <div className="button" onClick={props.onClick}>
        {props.text}
      </div>

  );
}

module.exports = Button;

