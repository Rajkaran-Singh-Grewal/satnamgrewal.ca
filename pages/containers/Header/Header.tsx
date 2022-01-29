import { Menu } from "../../components";
import styles from "./header.module.css";
import React from 'react';
class Header extends React.Component {
    render(){
        return(
            <div >
                <Menu />
            </div>
        );
    }
}

export default Header;