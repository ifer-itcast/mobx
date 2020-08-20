import React, { Component } from "react";
import MessageHeader from "./MessageHeader";
import MessageContent from "./MessageContent";
import MessageFooter from "./MessageFooter";

class Message extends Component {
    render() {
        return (
            <div className="mt-3 my-msg">
                <MessageHeader />
                <MessageContent />
                <MessageFooter />
            </div>
        );
    }
}

export default Message;
