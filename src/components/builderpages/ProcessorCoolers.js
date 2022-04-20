import React from "react";
import "../../stylesheets/builderpages/processorCoolers.css"
import {useNavigate} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function ProcessorCoolerListPage() {

    const navigate = useNavigate();
    const backToPcBuilder = ()=>{
        navigate("/pcbuilder");
    }

    return (<div>
            <h1 className="coolers-h1">Válassz hűtőt!</h1>
            <div className="coolers-filters">
            <section className="coolers-search">
                <div>
                    <h5>Keresés</h5>
                    <input type="search" className="form-control" placeholder="Keresés"/>
                </div>
            </section>
            <section className="coolers-price">
                <div>
                    <h5>Ár</h5>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">10000 FT alatt</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">10000-18000 FT</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">18000-35000 FT</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">35000-55000 FT</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">55000 FT fölött</label>
                    </div>
                </div>
            </section>
            <section className="coolers-manufacturer">
                <div>
                    <h5>Gyártó</h5>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Alpenföhn</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">ARCTIC</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">ASUS</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">be quiet!</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Corsair</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Deepcool</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Gigabyte</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Lian Li</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Noctua</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">NZXT</label>
                    </div>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Sycthe</label>
                    </div>
                </div>

            </section>
            <section className="coolers-coolingtype">
                <div>
                    <h5>Hűtés típusa</h5>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Léghűtés</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">Vízhűtés</label>
                    </div>
                </div>

            </section>
            <section className="coolers-rpm">
                <div>
                    <h5>Fordulat szám</h5>
                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">1000-1300</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">1300-1600</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">1600-2000</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="checkbox"
                               id="flexCheckDefault"
                        />
                        <label className="form-check-label">2000 fölött</label>
                    </div>
                </div>

            </section>
            </div>
            <Table className="table-responsive-md coolers-list">
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Hűtés típusa</th>
                    <th>Maximális fordulatszám</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
            <Button className="btn-success" onClick={backToPcBuilder}>Választ</Button>
        </div>
    )
}

export default class ProcessorCoolers extends React.Component {
    render() {
        return <ProcessorCoolerListPage/>
    }
}