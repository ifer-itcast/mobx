import {
    observable,
    decorate
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
}

decorate(MessageStore, {
    msgs: observable
});



export default new MessageStore();