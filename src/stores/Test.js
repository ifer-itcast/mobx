import { observable, action } from 'mobx';
class Test {
    @observable num = 0
    @action.bound
    increment() {
        console.log(this.num);
        this.num++;
    }
}
const test = new Test();
setInterval(test.increment, 1000);
export default test;