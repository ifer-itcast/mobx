import {
    observable,
    action
} from 'mobx';

class JokeStore {
    @observable jokes = [];
    fetchJokes = () => {
        fetch('https://autumnfish.cn/api/joke/list?num=3').then(res => res.json()).then(data => {
            this.saveJokes(data.jokes);
        });
    };

    // Modifying the observed data needs to be decorated with action
    @action
    saveJokes = data => {
        this.jokes = data;
    }
}

export default new JokeStore();