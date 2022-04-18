import React from "react";
import {useNavigate} from "react-router-dom";

function PowerSuppliesListPage(){
    return (<div>
            <h1>Válassz tápegységet!</h1>
        </div>
    )
}

export default class PowerSupplies extends React.Component{
    render() {
        return <PowerSuppliesListPage/>
    }
}