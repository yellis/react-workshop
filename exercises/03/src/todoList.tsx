import * as React from 'react';
import TodoListItem from './todoListItem';

// Changes required below this line

interface ToDoListProps {

}

interface TodoItem {
  id: number;
  done: boolean;
  description?: string;
  placeholder?: string;
}

interface ToDoListState {
  items: Array<TodoItem>;
}

export default class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
    constructor(props: any) { 
      super(props);
      this.state = {
          items: [{id: 1, done: false, placeholder: "enter your todo here!"}]
      };
    }
    addChild() : void {
        var newId = this.state.items.length + 1;
        const items = this.state.items.concat([{
            id: newId,
            done: false,
            placeholder: `Todo item ${newId}`,
            description: ""
        }]);
        this.setState({
            items
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.items.map((item) => (
                        <TodoListItem key={item.id} placeholder={item.placeholder} toDoText={item.description} newChildMethod={() => this.addChild()} /> 
                    ))
                }
            </div>
        )
    }

};
