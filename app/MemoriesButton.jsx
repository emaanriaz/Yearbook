const React = require('react');

const MemoriesButton = function(props) {
  return(
    <div className="MemoriesButton" onClick={props.onClick}>
      Memories 
    </div>
  );
}

module.exports = MemoriesButton