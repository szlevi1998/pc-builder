import React from "react";
import NavBar from "../NavBar";
import {Table} from "react-bootstrap";
import "../stylesheets/pcbuilder.css";
import {useNavigate} from "react-router-dom";

function PcBuilderPage() {

    const navigation = useNavigate();


    const navigateToMotherboards = ()=>{
        navigation("/pcbuilder/motherboards");
    }

    const navigateToProcessors = ()=>{
        navigation("/pcbuilder/processors");
    }

    const navigateToProcessorCoolers = ()=>{
        navigation("/pcbuilder/processorcoolers");
    }

    const navigateToMemories = ()=>{
        navigation("/pcbuilder/memories");
    }

    const navigateToVideoCards = ()=>{
        navigation("/pcbuilder/videocards");
    }

    const navigateToStorages = ()=>{
        navigation("/pcbuilder/storages");
    }

    const navigateToCases = ()=>{
        navigation("/pcbuilder/cases");
    }
    const navigateToPSUs = ()=>{
        navigation("/pcbuilder/powersupplies");
    }

    return (
        <div>
            <NavBar/>
            <h2 className="builder-h2">Gép Összerakó</h2>
            <section className="table-content">
                <Table responsive="md">
                    <thead>
                    <tr>
                        <th className="component">Komponens</th>
                        <th>Termék neve</th>
                        <th>Legolcsóbb ár</th>
                        <th>Átlag ár</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="column">Alaplap</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToMotherboards}>+ Hozzáadás</a>
                        </div>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Processzor</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToProcessors}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Processzor hűtő</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToProcessorCoolers}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Memória</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToMemories}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Videókártya</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToVideoCards}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Tároló</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToStorages}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Gépház</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToCases}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Tápegység</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToPSUs}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="column">Monitor</td>
                        <td><div>
                            <a className="btn btn-primary add-button" onClick={navigateToPSUs}>+ Hozzáadás</a>
                        </div></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
                <p className="price">Összesített ár: </p>
                <button className="btn-outline-success save">Mentés</button>
            </section>

        </div>
    )
}

export default class PcBuilder extends React.Component {
    render() {
        return <PcBuilderPage/>
    }
}