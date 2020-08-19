import { observable, flow } from 'mobx';
class JokeStore {
    @observable jokes = [];
    fetchJokes = flow(function* () {
        const response = yield fetch("https://autumnfish.cn/api/joke/list?num=3")
        const json = yield response.json();
        this.jokes = json.jokes;
    });
}
export default new JokeStore();