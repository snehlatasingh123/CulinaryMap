import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
            userInfo : {
                name: "DefaultName",
                location: "DefaultLocation"
            }
        }
        console.log(this.props.name, "Child Constructor is called")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/snehlatasingh123");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log(this.props.name, "Child Component did Mount")
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        const {count} = this.state;
        const {name, avatar_url, location} = this.state.userInfo;
        console.log(this.props.name, "Child Render is called")
        return (
            <div>
                <p>This is a Class based component</p>
                {/* <h2>{this.props.name}</h2> */}
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count+1,
                        })
                    }
                }>Count Increment</button>
                <h3>Count2: {this.state.count2}</h3>
            </div>
        )
    }
}
export default UserClass;