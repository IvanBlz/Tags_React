import React, { Component } from "react";
import  "./sidebar.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <div>
                <h2>Side-Bar</h2>
                <hr />
                <ul className="list-group contenedor">
                    <li
                        className="list-group-item"
                    >
                        Tasks
                    </li>
                    <li
                        className="list-group-item"
                    >
                        Posts
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;