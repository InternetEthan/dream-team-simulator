import React from "react";


class NavBar extends React.Component{
    render(){
        return (
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Play</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;