import React from 'react';

function Image(props) {
  console.log('????', props);
  return (
    <img data-src={props.dataSrc} src={props.source}></img>
  )
}

export default Image;
