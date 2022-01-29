import React from "react";
import Image from "next/image";
import styles from "./how_can_we_help_section.module.css";
import profile_picture from "../../../public/personal_image.png";
class How_can_we_help_section extends React.Component{
    helping_topic = [
        "Seeing Things Differently",
        "Freedom to Succeed",
        "For Businesses"
    ];
    render(){
        return(
            <div className={styles.how_can_we_help_section}>
                <h3>How Can We Help?</h3>
                <h5>Experienced Attorneys Professional Approach.</h5>
                {this.helping_topic.map((value)=>{
                    return <div>
                        <div className={styles.rectangle}></div>
                        <div className={styles.points}> 
                            <h4>{value}</h4>
                            <label>We understand the importance of organizational mission and the unique challenges that nonprofit organizations face.</label>
                        </div>
                    </div>
                })}
                <Image src={profile_picture} width="700px" height="700px" />
                <div className={styles.grey_rectangle} ></div>
            </div>
        );
    }
}
export default How_can_we_help_section;