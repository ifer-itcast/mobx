import { observable } from 'mobx';

class MessageStore {
    @observable msgs = [];
}

export default new MessageStore();