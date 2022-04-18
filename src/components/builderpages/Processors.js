import React from "react";
import {useNavigate} from "react-router-dom";

function ProcessorListPage(){
    return (<div>
            <h1>Válassz processzort!</h1>
        </div>
    )
}

export default class Processors extends React.Component{
    render() {
        return <ProcessorListPage/>
    }
}