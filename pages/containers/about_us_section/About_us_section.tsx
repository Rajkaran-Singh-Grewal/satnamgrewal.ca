import React from "react";
import styles from "./about_us_section.module.css";
import personal_image from "../../../public/personal_image.png";
import Image from 'next/image';
import location_icon from "../../../public/icon/location_icon.png";
import call_us_icon from "../../../public/icon/call_us_icon.png";
import email_us_icon from "../../../public/icon/email_us_icon.png";
class About_us extends React.Component{
    state = {
        icon_section: [{
            type: "Location",
            icon: location_icon,
            value: "42 College Street, Kitchener, ON, Canada"
        },{
            type: "Call Us",
            icon: call_us_icon,
            value: "(519) 584 0769"
        },{
            type: "Email Us",
            icon: email_us_icon,
            value: "satnamgrewal@gmail.com"
        }]
    };
    render(){
        return(
            <div>
                <div className={styles.text_section}>
                    <label>Aiming To Provide High-Quality Legal Consultancy</label>
                    <p>We approach each problem with three essential elements: strategic thinking, creative solutions, proven results</p>
                </div>
                <div className={styles.personal_image}>
                    <Image src={personal_image} alt="personal_image" width="700px" height="673px" />
                </div>
                <div className={styles.icon_selection} >
                    <div>
                        <Image src={this.state.icon_section[0].icon} alt={this.state.icon_section[0].type} />
                        <label>{this.state.icon_section[0].type}</label>
                        <label>{this.state.icon_section[0].value}</label>    
                    </div>
                    <div>
                        <Image src={this.state.icon_section[1].icon} alt={this.state.icon_section[1].type} />
                        <label>{this.state.icon_section[1].type}</label>
                        <label>{this.state.icon_section[1].value}</label>
                    </div>
                    <div>
                        <Image src={this.state.icon_section[2].icon} alt={this.state.icon_section[2].type} />
                        <label>{this.state.icon_section[2].type}</label>
                        <label>{this.state.icon_section[2].value}</label></div>
                </div>
            </div>
        );
    }
}
export default About_us;