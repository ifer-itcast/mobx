import React, { Component } from "react";

export default class MessageHeader extends Component {
    render() {
        return (
            <div className="row  my-msg-top">
                <div className="col-sm-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please leave a message"
                    />
                </div>
                <div className="col-sm-4">
                    <select className="form-control">
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                    </select>
                </div>
                <div className="col-sm-2 text-right">
                    <button type="button" className="btn btn-primary">
                        leave a msg
                    </button>
                </div>
            </div>
        );
    }
}
