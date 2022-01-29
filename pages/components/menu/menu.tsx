import styles from  "./menu.module.css";
import React from "react";
import { renderToHTML } from "next/dist/server/render";
class Menu extends React.Component{

    visitHome = () => {
        location.href = "/"
    };
    visitCriminalLaw = () => {
        location.href = "/criminal-law"
    };
    visitImmigrationLaw = () => {
        location.href = "/immigration-law";
    };
    visitContactUs = () => {
        location.href = "/contact-us";
    };
    render(){
        return(
            <div className={styles.menu}>
                <ul className={styles.menu_list}>
                    <li onClick={this.visitHome} >
                        <label>Home</label>
                    </li>
                    <li onClick={this.visitCriminalLaw} >
                        <label>Criminal Law</label>
                    </li>
                    <li onClick={this.visitImmigrationLaw} >
                        <label>Immigration Law</label>
                    </li>
                    <li onClick={this.visitContactUs} >
                        <label>Contact Us</label>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Menu;