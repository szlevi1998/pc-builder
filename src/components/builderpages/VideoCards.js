import React from "react";
import {useNavigate} from "react-router-dom";

function VideoCardListPage(){
    return (<div>
            <h1>Válassz hűtőt!</h1>
        </div>
    )
}

export default class VideoCards extends React.Component{
    render() {
        return <VideoCardListPage/>
    }
}