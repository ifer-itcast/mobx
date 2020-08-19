import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("JokeStore")
@observer
class Joke extends Component {
    renderJokes = () => {
        const jokes = this.props.JokeStore.jokes;
        if (!jokes.length) return null;
        return (
            <ul>
                {jokes.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        );
    };
    render() {
        const JokeStore = this.props.JokeStore;

        let data = null;
        if (JokeStore.error) {
            data = (<div>{JokeStore.error}</div>);
        } else if (JokeStore.loading) {
            data = <div>loading...</div>;
        } else {
            data = this.renderJokes();
        }
        return (
            <div>
                <button onClick={() => JokeStore.fetchJokes()}>
                    Get a joke
                </button>
                {data}
            </div>
        );
    }
}

export default Joke;
