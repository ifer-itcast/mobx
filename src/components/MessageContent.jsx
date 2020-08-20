import React, { Component } from "react";

export default class MessageContent extends Component {
    render() {
        return (
            <div className="row mt-3  my-msg-con">
                <div className="col-sm">
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left">
                                <svg
                                    width="64"
                                    height="64"
                                    color="#fff"
                                    viewBox="0 0 16 16"
                                    className="bi bi-chat-dots"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                                    />
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <div className="float-right color-white text-right">
                                <p>2</p>
                                <p>Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left">
                                <svg
                                    width="64"
                                    height="64"
                                    color="#fff"
                                    viewBox="0 0 16 16"
                                    className="bi bi-star-fill"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <div className="float-right color-white text-right">
                                <p>2</p>
                                <p>Average Scores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
