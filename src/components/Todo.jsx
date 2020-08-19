import React from "react";
import { action } from "mobx";
import { observer } from "mobx-react";

const Todo = observer(({ item }) => {
    return (
        <li className="list-group-item">
            {item.todo}
            <input
                className="float-right mt-2"
                type="checkbox"
                checked={item.completed}
                onChange={action(() => (item.completed = !item.completed))}
            />
        </li>
    );
});

export default Todo;
