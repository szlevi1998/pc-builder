import React from "react";
import {useNavigate} from "react-router-dom";

function StorageListPage(){
    return (<div>
            <h1>Válassz tárolót!</h1>
        </div>
    )
}

export default class Storages extends React.Component{
    render() {
        return <StorageListPage/>
    }
}