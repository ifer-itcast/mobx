import { observable, action, computed } from 'mobx';
class FruitStore {
    @observable fruits = ['apple', 'orange'];
    @action addFruit = fruit => {
        this.fruits.unshift(fruit);
    };
    @computed get getFruits() {
        return this.fruits.join(',');
    }
    @computed get getCount() {
        return this.fruits.length;
    }
}
const store = new FruitStore();
export default store;