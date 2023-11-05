import React, {useState} from "react";
import {Sliders } from "react-feather";
import './Navbar.css';
function Navbar({drop,setDrop,ordering,setordering}){
    const handleChange = (e) => {
        const obj = {
            [e.target.name]: e.target.value,
        };

        setordering({ ...ordering, ...obj });
    };
    return(
        <div className="navbar">
            <div className="navbar_button">
                <button className="display_button" onClick={()=>setDrop(!drop)}>
                    <Sliders/>
                    <span> display </span>

                </button>
            </div>
            {drop && (<div>

                <div className="groupSection">
                    <div className="grouping">
                        <label htmlFor="group" className="label">
                            Grouping
                        </label>
                        <select
                            name="grouping"
                            id="group"
                            value={ordering.grouping}
                            onChange={handleChange}
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="ordering">
                        <label htmlFor="group" className="label">
                            Ordering
                        </label>
                        <select
                            name="ordering"
                            id="group"
                            value={ordering.ordering}
                            onChange={handleChange}
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            </div>)}
        </div>
    );
}
export default Navbar;