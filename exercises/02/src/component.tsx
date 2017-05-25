import * as React from 'react';

let colorRed = {color: 'red'};
let colorGreen = {color: 'green'};

interface HelloProps {
    firstName : string,
    lastName: string,
    showCorrect?: boolean
}

interface HelloState {
    clicks: number
}

export default class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: any) { 
      super(props); 
      this.state = {clicks: 0};
    }
  render() { 
    return (
    <div style={{ border: '1px black solid', padding: '5px' }}
         onClick={(ev) => this.setState({clicks: this.state.clicks + 1})}
    >
        <p>
        <strong>Hello!</strong> Welcome,&nbsp;
        <u>
            <span style={colorGreen}>{this.props.firstName}</span>&nbsp;
            <span style={colorRed}>{this.props.lastName}</span>
        </u>.
        </p>
        {
        (this.props.showCorrect) ? (
            <p>Not your name? Click <a href="https://stackoverflow.com">here</a> to correct ...</p>
        ) : (
            false
        )      
        }
        <p>
            Has been clicked {this.state.clicks} this.state.clicks === 1 ? "time" : "times"
        </p>
    </div>); 
    } // only requirement
};
