import {
    observable,
    action,
    computed
} from 'mobx';
import shortid from 'shortid';

class Todo {
    id = shortid.generate();
    @observable todo;
    @observable completed = false;
    constructor(todo) {
        this.todo = todo;
    }
}
class TodoListStore {
    @observable todos = [new Todo('吃饭')];
    @observable todo = "";

    @action handleChange = e => {
        this.todo = e.target.value;
    }
    @action handleKeyUp = e => {
        if (e.keyCode === 13) {
            this.todos.unshift(new Todo(this.todo));
            this.todo = "";
        }
    }
    @action addTodo = todo => {
        this.todos.unshift(new Todo(todo));
    };
    @computed get getUnCompletedCount() {
        return this.todos.filter(item => !item.completed).length;
    }
}
const store = new TodoListStore();
export default store;