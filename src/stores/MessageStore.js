import {
    observable,
    decorate,
    action,
    computed
} from 'mobx';

class Msg {
    id = Math.random();
    @observable msg;
    @observable stars;
    constructor(msg, stars) {
        this.msg = msg;
        this.stars = stars;
    }
}
/* class MessageStore {
    @observable msgs = [];
} */

class MessageStore {
    msgs = [new Msg('hello world', 3)];
    msg = ""
    stars = 5
    handleChange = e => {
        this[e.target.name] = e.target.name === "stars" ? parseInt(e.target.value) : e.target.value;
    }
    handleSubmit = () => {
        this.msgs.unshift(new Msg(this.msg, this.stars));
        this.msg = "";
        this.stars = 5;
    }
    get getCount() {
        return this.msgs.length;
    }
    get getAverage() {
        return (this.msgs.reduce((acc, cur) => {
            return acc + cur.stars
        }, 0) / this.msgs.length).toFixed(2);
    }
}

decorate(MessageStore, {
    msgs: observable,
    msg: observable,
    stars: observable,
    handleChange: action,
    handleSubmit: action,
    getCount: computed,
    getAverage: computed
});
export default new MessageStore();