import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Todo from "./Todo";

@inject("TodoListStore")
@observer
class TodoList extends Component {
    render() {
        const {
            todos,
            getUnCompletedCount,
            todo,
            handleChange,
            handleKeyUp,
        } = this.props.TodoListStore;
        return (
            <div className="container">
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="todo"
                    value={todo}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
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
