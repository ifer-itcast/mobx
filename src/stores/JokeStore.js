import {
    observable,
    flow
} from 'mobx';
class JokeStore {
    @observable jokes = [];
    @observable loading = false; // #1
    @observable error = null;

    fetchJokes = flow(function* () {
        this.loading = true; // #2
        this.error = null;
        try {
            const response = yield fetch("https://autumnfish.cn/api/joke/list?num=3")
            const json = yield response.json();
            this.jokes = json.jokes;
        } catch (error) {
            this.error = error.message;
        }
        this.loading = false; // #3
    });
}
export default new JokeStore();