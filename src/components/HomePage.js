import React from "react";
import NavBar from "../NavBar";

function Home(){
    return<div>
        <NavBar/>
        </div>

}
export default class HomePage extends React.Component{
    render() {
        return <Home/>;
    }
}