import * as React from 'react';

// Changes required below this line

interface ToDoItemProps {
    toDoText: string
    placeholder: string
    newChildMethod: () => void;
}

interface ToDoItemState {
    done: boolean
    toDoText: string
}

export default class ToDoItem extends React.Component<ToDoItemProps, ToDoItemState> {
    constructor(props: any) { 
      super(props); 
      this.state = {
          done: false,
          toDoText: props.toDoText || ''
        };
    }   
    render() {
        return (
            <div style={{clear: 'both'}}>
            <label>
                <input type="checkbox" onChange={(ev) => this.setState({done: !this.state.done})} />&nbsp;
                {
                    this.state.done 
                    ? (<s>{this.state.toDoText}</s>)
                    : (
                        <input type="text" 
                              placeholder={this.props.placeholder}
                              value={this.state.toDoText}
                              onChange={(ev) => this.setState({toDoText: ev.target.value})} />
                    )
                }
                <button onClick={this.props.newChildMethod}>+</button>    
            </label>
            </div>
        )
    }
};
