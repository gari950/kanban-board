import React from "react";

import './Card.css';
import {CheckSquare, Clock, MoreHorizontal} from "react-feather";
import Chip from "../Chip/Chip";
import {GoDotFill} from "react-icons/go";

function Card({data}){
    return (
        // <div className="card">
        //     <div className="card_top">
        //         <div className="card_top_labels">
        //             <div className="card_title">description</div>
        //
        //         </div>
        //         <MoreHorizontal/>
        //     </div>
        //     <Chip text="Feature Request" color="green"/>
        //     <div className="card_footer">
        //         <p>
        //             <Clock />
        //             04 Nov
        //         </p>
        //         <p>
        //             <CheckSquare />
        //             1/4
        //         </p>
        //     </div>
        // </div>
        <div className="card">
            <div className="wrapper">
                <div className="content">
                    <div className="id">
                        <p>{data?.id}</p>
                    </div>
                    <div className="title">
                        <span>{data?.title}</span>
                    </div>
                    <div className="footer">
                        <div className="prior">
                            <p>{data?.priority}</p>
                        </div>
                        <div className="feature">
                            <GoDotFill />
                            <p>{data?.tag[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card;