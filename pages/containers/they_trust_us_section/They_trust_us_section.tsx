import React from "react";
import styles from "./they_trust_us_section.module.css";
import Image from "next/image";
import { cp } from "fs/promises";
class They_trust_us_section extends React.Component{
    comments = [
        {
            message: "Mr.Satnam is a kind and helpful person with everything by explaining things and making it super easy to understand the situation, I honestly would recommand Mr. Satnam for a lawyer to anybody. He makes it easy for you and for your case like how he did for me. The price that he charges you are remarkable and he will treat you like family",
            profile_pic: "",
            profile: "Saleh Kakar"
        },
        {
            message: "I really recommend Mr. Satnam Grewal, he helped me so much with my case and kept me updated throughout the process until everything was taken care of and resolved. Whenever I need him he was always available to help quickly. Thank you very much for everything.",
            profile_pic: "",
            profile: "Amritpal Sohal"
        },
        {
            message: "Definitely the best immigration and criminal lawyer. He got me out of a serious situation and helped me throughout the process like a friend. I would recommend everyone to visit him if you want a good and straightforward advice.",
            profile_pic: "",
            profile: "Sandeep Singh"
        },
        {
            message: "Best immigration service even if you are in another city. Mr.Grewal constatly remains in touch and update you for the steps. Definitely a person to consult for any immigration opinion and will show you the right way.",
            profile_pic: "",
            profile: "Abhinav Bector"
        },
        {
            message: "Very nice, very professional and he actually cares about his clients. He handled my case with care.",
            profile_pic: "",
            profile: "Clad Clad"
        },{
            message: "He is down to earth and explains everything so well. Thanks a lot Satnam Grewal.",
            profile_pic: "",
            profile: "Baburzai Abdulrahimzai"
        }
    ]
    render(){
        return(
            <div>
                {this.comments.map(comment => {
                    if(comment.profile_pic === ""){
                        return(<div className={styles.comment}>
                            <p>{comment.message}</p>
                            <hr />
                            <label>{comment.profile}</label>
                    </div>)}
                    else{
                    return <div className={styles.comment}>
                        <p>{comment.message}</p>
                        <hr></hr>
                        <Image src={comment.profile_pic} />
                        <label>{comment.profile}</label>
                    </div>
                }
                })}
            </div>
        );
    }
}
export default They_trust_us_section;