import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("JokeStore")
@observer
class Joke extends Component {
    renderJokes = () => {
        return this.props.JokeStore.jokes.map((item, index) =>
            <li key={index}>
                {item}
            </li>
        );
    };
    render() {
        return (
            <div>
                <button onClick={() => this.props.JokeStore.fetchJokes()}>Get a joke</button>
                <ul>
                    {this.renderJokes()}
                </ul>
            </div>
        );
    }
}

export default Joke;
