import React from "react";
import NavBar from "../NavBar";
import {Table} from "react-bootstrap";
import "../stylesheets/pcbuilder.css";

function PcBuilderPage() {
    return (
        <div>
            <NavBar/>
            <h2 className="builder-h2">Gép Összerakó</h2>
            <section className="table-content">
                <Table responsive="md">
                    <thead>
                    <tr>
                        <th>Komponens</th>
                        <th>Termék neve</th>
                        <th>Legolcsóbb ár</th>
                        <th>Átlag ár</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="column">Alaplap</td>
                        <td><img src="https://mpng.subpng.com/20180329/khq/kisspng-computer-icons-icon-design-clip-art-plus-5abccc211d83e3.0307650615223224651209.jpg"
                                 alt=""
                                 height="32px"
                                 width="32px"
                        />
                            <a type="button"> Hozzáadás</a>
                        </td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Processzor</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Processzor hűtő</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Memória</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Videókártya</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Tároló</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Gépház</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td className="column">Tápegység</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
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