import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Msg = ({ item }) => {
    return (
        <li key={item.id} className="list-group-item">
            {item.msg}
            <StarRatingComponent
                className="float-right"
                name={"msg" + item.id}
                value={item.stars}
                starCount={item.stars}
            />
        </li>
    );
};
export default Msg;
