import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("MessageStore")
@observer
class MessageHeader extends Component {
    render() {
        const {
            msg,
            stars,
            handleChange,
            handleSubmit,
        } = this.props.MessageStore;
        return (
            <div className="row  my-msg-top">
                <div className="col-sm-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please leave a message"
                        value={msg}
                        onChange={handleChange}
                        name="msg"
                    />
                </div>
                <div className="col-sm-4">
                    <select
                        className="form-control"
                        value={stars}
                        onChange={handleChange}
                        name="stars"
                    >
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                    </select>
                </div>
                <div className="col-sm-2 text-right">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        leave a msg
                    </button>
                </div>
            </div>
        );
    }
}
export default MessageHeader;
