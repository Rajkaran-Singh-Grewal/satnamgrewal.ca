import React from "react";
import styles from "./practice_area_section.module.css";
import {bankrupcy, car_accident, capital_market, family_law, child_welfare, copyright, immigration, criminal_code, public_health, business_contract} from "../../../public/practice_area_icon"
import Image from "next/image";
class Practice_area_section extends React.Component{
    state = {
        containers: [
            {
                type: "Bankrucy",
                icon: bankrupcy,
                value: "242 Case Solve"
            },{
                type: "Car Accident",
                icon: car_accident,
                value: "123 Case Solve"
            },{
                type: "Capital Market",
                icon: capital_market,
                value: "443 Case Solve"
            },{
                type: "Family Law",
                icon: family_law,
                value: "153 Case Solve"
            },{
                type: "Child Welfare",
                icon: child_welfare,
                value: "230 Case Solve"
            },{
                type: "Copyrights",
                icon: copyright,
                value: "547 Case Solve"
            },{
                type: "Immigration",
                icon: immigration,
                value: "313 Case Solve"
            },{
                type: "Criminal Code",
                icon: criminal_code,
                value: "363 Case Solve"
            },{
                type: "Public Health",
                icon: public_health,
                value: "403 Case Solve"
            },{
                type: "Business Contracts",
                icon: business_contract,
                value: "463 Case Solve"
            }
        ]
    }
    render(){
        return(
            <div className={styles.practice_area_icon_containers}>
                {this.state.containers.map((container, index)=>{
                    return <div className={styles.practice_area_icon_container}>
                        <label className={styles.practice_area_icon_type}>{container.type}</label>
                        <Image src={container.icon} alt={container.type} />
                        <label className={styles.practice_area_icon_value}>{container.value}</label>
                    </div>
                })}
            </div>
        );
    }
}
export default Practice_area_section;