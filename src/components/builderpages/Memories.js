import React from "react";
import {useNavigate} from "react-router-dom";

function MemoryListPage (){
    return(<div>
            <h1>Válassz memóriát!</h1>
        </div>

    )
}

export default class Memories extends React.Component{
    render() {
        return <MemoryListPage/>
    }
}