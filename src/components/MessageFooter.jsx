import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import Msg from './Msg';

@inject('MessageStore')
@observer
class MessageFooter extends Component {
    render() {
        return (
            <div className="card mt-3 my-msg-bot">
                <div className="card-header">
                    <svg
                        width="16"
                        height="16"
                        color="#212529"
                        viewBox="0 0 16 16"
                        className="bi bi-chat-dots"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginTop: -3, marginRight: 5 }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                        />
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>Reviews
                </div>
                <ul className="list-group">
                    {
                        this.props.MessageStore.msgs.map(item => <Msg key={item.id} item={item}/>)
                    }
                </ul>
            </div>
        );
    }
}

export default MessageFooter;
