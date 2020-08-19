import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class App extends Component {
    fruit = React.createRef();
    handleSubmit = e => {
        e.preventDefault();
        const fruit = this.fruit.current.value;
        this.props.FruitStore.addFruit(fruit);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="fruit" ref={this.fruit} />
                    <button>添加</button>
                </form>
                <div>
                    <p>
                        数据：{this.props.FruitStore.getFruits}
                    </p>
                    <p>
                        长度：{this.props.FruitStore.getCount}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
