import React from "react";
import "./Board.css";
import {MoreHorizontal, Plus} from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
function Board(){
    return (
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">
                    To Do <span>2</span>
                </p>
                <Editable
                    displayClass="boards_cards_add"
                    placeholder ="Enter Card  Title"
                />
                <MoreHorizontal/>
            </div>
            <div className="board_cards custom-scroll">
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    );
}

export default Board;