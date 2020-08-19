import { observable, autorun, toJS, isObservableObject, isObservableArray } from 'mobx';

class FruitStore {
    @observable fruits = ['apple', 'orange'];
}
const store = window.store = new FruitStore();
export default store;

autorun(() => {
    console.log(store.fruits); // Proxy {0: "apple", 1: "orange", Symbol(mobx administration): ObservableArrayAdministration}
    console.log(toJS(store.fruits)); // ["apple", "orange"]
    console.log(isObservableObject(store)); // 可被观测的对象
    console.log(isObservableArray(store.fruits)); // 可被观测的数组
});