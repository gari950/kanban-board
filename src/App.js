import React, {useEffect, useState} from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Dropdown from "./components/Dropdown/Dropdown";
import Editable from "./components/Editable/Editable";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import {BiSolidUserCircle} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";


function App(){

    const[replydata,setreplyData] = useState();
    const [drop,setDrop] = useState(false);
    const[ordering,setordering] = useState({
        grouping: "status",
        ordering: "priority",
    });
    const getreplyData = async ()=> {
        const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await res.json();
        console.log(data);
        setreplyData(data)
    }
    useEffect(()=>{
        getreplyData();
    },[]);
    console.log(replydata?.users);
    return (

        <div className="app">
            <Navbar drop={drop} setDrop={setDrop} ordering={ordering} setordering={setordering}/>
            {/*<div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>*/}
            {/*{*/}

            {/*    replydata?.tickets?.map((item,index)=>(*/}
            {/*        <div key={index} >*/}
            {/*            <Card data={item}/>*/}

            {/*    </div>))*/}

            {/*}*/}
            {/*</div>*/}
            <div className="Status">
                {
                    ordering.grouping==="status" && (
                        <div>
                            {
                                replydata?.tickets?.map((item,index)=>{
                                    if(item?.status==="Todo"){
                                        return (
                                            <div>
                                                <Card data={item}/>
                                            </div>
                                        );
                                    }return null;
                                })
                            }
                    </div>)
                }
            </div>
            <div className="Priority">
                {
                    ordering.grouping==="priority" && (
                        <div>
                            <div>
                                <h1>No priority</h1>
                            </div>
                            {
                                replydata?.tickets?.map((item,index)=>{
                                    if(item?.priority===0){
                                        return (
                                            <div>
                                                <Card data={item}/>
                                            </div>
                                        );
                                    }return null;
                                })
                            }
                            <div>
                                <div>
                                    <h1>High priority</h1>
                                </div>
                                {
                                    replydata?.tickets?.map((item,index)=>{
                                        if(item?.priority===3){
                                            return (
                                                <div>
                                                    <Card data={item}/>
                                                </div>
                                            );
                                        }return null;
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="Users">
                {
                    ordering.grouping==="user" && (
                        <div>
                            {
                                replydata?.users?.map((user, index) => {

                                return (

                                    <div key={index} className="userName">
                                        <div className="headerUser">
                                            <p
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                }}
                                            >
                                                <BiSolidUserCircle
                                                    style={{
                                                        fontSize: "18px",
                                                    }}
                                                />
                                                {user?.name}
                                            </p>
                                            <div className="rightStatusHeading icons">
                                                <AiOutlinePlus />
                                                <BsThreeDots />
                                            </div>
                                        </div>
                                        {replydata?.tickets?.map((item, index) => {
                                            if (user?.id === item.userId) {
                                                return (
                                                    <div key={index} className="items">
                                                        <Card data={item} />
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    )
                }
            </div>
        {/*    if (filterData.ordering === "priority") {*/}
        {/*    const newData = replydata?.tickets*/}
        {/*    ?.slice()*/}
        {/*    .sort((a, b) => b.priority - a.priority);*/}
        {/*    setData(newData);*/}
        {/*} else {*/}
        {/*    const newData = apiData?.tickets*/}
        {/*    ?.slice()*/}
        {/*    .sort((a, b) =>*/}
        {/*    a.title.toLowerCase().localeCompare(b.title.toLowerCase())*/}
        {/*    );*/}
        {/*    setData(newData);*/}
        {/*}*/}
        </div>
    );

    {/*        <div className="app_navbar">*/}
    {/*            <Dropdown/>*/}
    {/*        </div>*/}
    {/*        <div className="app_outer">*/}
    {/*    <div className="app_boards">*/}
    {/*    <Board />*/}
    {/*    <Board />*/}
    {/*        <div className="app_boards_board">*/}
    {/*            <Editable*/}
    {/*                displayClass="app_boards_board_add"*/}
    {/*                text="Add Board" placeholder="Enter board title"/>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}

}
export default App;