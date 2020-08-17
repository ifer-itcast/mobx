import { observable, autorun } from 'mobx';

class BirdStore {
    @observable birds = [];
}
const store = window.store = new BirdStore;

export default store;

autorun(() => {
    console.log(store.birds);
});