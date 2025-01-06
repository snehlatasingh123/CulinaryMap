import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import { Component } from "react";

class Practice extends Component {
    constructor(){
        super();
        console.log("Parent Constructor is called")
    }
    componentDidMount(){
        console.log("Parent Component did Mount")
    }
    render(){
        console.log("Parent Render is called")
        return (
            <div>
                <h2>This page is to practice class based component and functional component</h2>
                <UserClass name={"Sneh"} />
                {/* <UserClass name={"Lata"} /> */}
                {/* {console.log("just after user class called")} */}
                <UserFunc name={"Sneh"} />
            </div>
        )
    }
}
// const Practice = () => {
//     return (
//         <div>
//             <h2>This page is to pactice class based component and functional component</h2>
//             <UserClass name={"Sneh"} />
//             <UserFunc name={"Sneh"} />
//         </div>
//     )
// }
export default Practice;