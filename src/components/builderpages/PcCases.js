import React from "react";
import {useNavigate} from "react-router-dom";

function PcCasesListPage(){
    return (<div>
            <h1>Válassz gépházat!</h1>
        </div>
    )
}

export default class PcCases extends React.Component{
    render() {
        return <PcCasesListPage/>
    }
}