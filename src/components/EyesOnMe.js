// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  // look = () => {
  //   console.log("Good!");
  // }
  //
  // away = () => {
  //   console.log("Hey! Eyes on me!");
  // }

  render () {
    return (
      <button onFocus={ () => console.log("Good!") } onBlur={ () => console.log("Hey! Eyes on me!") } >Text</button>
    )
  }
}

export default EyesOnMe;
