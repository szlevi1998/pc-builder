import React from "react";
import {useNavigate} from "react-router-dom";

function ProcessorCoolerListPage(){
    return (<div>
            <h1>Válassz hűtőt!</h1>
        </div>
    )
}

export default class ProcessorCoolers extends React.Component{
    render() {
        return <ProcessorCoolerListPage/>
    }
}