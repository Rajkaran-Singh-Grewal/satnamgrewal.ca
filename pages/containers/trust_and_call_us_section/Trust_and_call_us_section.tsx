import React from "react";
import styles from "./trust_and_call_us_section.module.css";
import Image from "next/image";
class Trust_and_call_us_section extends React.Component{
    render(){
        return(
            <div className={styles.pallarax}>
                <div>
                    <label>Talk to us! We promise we can help you!</label>
                    <h3>You Can Trust Us To Get You The Justice You Deserve.</h3>
                    <label>Call now (519) 584 0769</label>
                </div>
            </div>
        );
    }
}
export default Trust_and_call_us_section;