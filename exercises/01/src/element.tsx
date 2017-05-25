import * as React from 'react';

// Changes required below this line

let colorRed = {color: 'red'};
let colorGreen = {color: 'green'};

const Hello = (props: any) => {
  return (
  <div style={{
    border: '1px black solid',
    padding: '5px'
  }}>
    <p>
      <strong>Hello!</strong> Welcome,&nbsp;
      <u>
        <span style={colorGreen}>{props.firstName}</span>&nbsp;
        <span style={colorRed}>{props.lastName}</span>
      </u>.
    </p>
    {
      (props.showCorrect) ? (
        <p>Not your name? Click <a href="https://stackoverflow.com">here</a> to correct ...</p>
      ) : (
        false
      )      
    }
  </div>
)};

export default (
    <Hello firstName="Florian" lastName="Rappl" showCorrect={true} />
);
