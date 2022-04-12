import React from "react";

function OpenPreBuilds(){
    return( <div>
        <h1>This is the home page</h1>
    </div>
    )
}
export default class PreBuilds extends React.Component{
    render() {
        return <OpenPreBuilds/>
    }
}