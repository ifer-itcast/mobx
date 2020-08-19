import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import Todo from "./Todo";

@inject("TodoListStore")
@observer
class TodoList extends Component {
    @observable todo = "";

    // Modify observation data
    @action
    handleChagne = e => {
        this.todo = e.target.value;
    };

    @action
    handleKeyUp = e => {
        if (e.keyCode === 13) {
            this.props.TodoListStore.addTodo(this.todo);
            this.todo = "";
        }
    };

    render() {
        const { todos, getUnCompletedCount } = this.props.TodoListStore;
        return (
            <div className="container">
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="todo"
                    value={this.todo}
                    onChange={this.handleChagne}
                    onKeyUp={this.handleKeyUp}
                />
                <ul className="list-group mt-3">
                    {todos.map(item => <Todo key={item.id} item={item} />)}
                </ul>
                <div>
                    <span className="badge badge-primary">
                        {getUnCompletedCount}
                    </span>
                </div>
            </div>
        );
    }
}
export default TodoList;
