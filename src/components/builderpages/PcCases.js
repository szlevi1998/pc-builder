import React from "react";
import "../../stylesheets/builderpages/pcCases.css"
import {useNavigate} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function PcCasesListPage(){
    return (<div>
            <h1 className="pccases-h1">Válassz tárolót!</h1>
            <div className="pccases-filters">
                <section className="pccases-search">
                    <div>
                        <h5>Keresés</h5>
                        <input type="search" className="form-control" placeholder="Keresés"/>
                    </div>
                </section>
                <section className="pccases-price">
                    <div>
                        <h5>Ár</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">25000 FT alatt</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">25000-38000 FT</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">38000 FT fölött</label>
                        </div>

                    </div>
                </section>
                <section className="pccases-manufacturer">
                    <div>
                        <h5>Gyártó</h5>
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
                            <label className="form-check-label">Cooler Master</label>
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
                            <label className="form-check-label">Fractal Design</label>
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
                            <label className="form-check-label">NZXT</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Phanteks</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Thermaltake</label>
                        </div>
                    </div>

                </section>
                <section className="pccases-color">
                    <div>
                        <h5>Szín</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Fehér</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Fekete</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Szürke</label>
                        </div>
                    </div>

                </section>

                <section className="pccases-psu">
                    <div>
                        <h5>Tápegység</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Nincs</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Van</label>
                        </div>
                    </div>

                </section>

                <section className="pccases-weight">
                    <div>
                        <h5>Súly</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">6 Kg alatt</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">6-10 Kg</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">10 Kg felett</label>
                        </div>
                    </div>
                </section>

                <section className="pccases-sizetype">
                    <div>
                        <h5>Méret típus</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">MiniTower</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">MidTower</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Fulltower</label>
                        </div>
                    </div>
                </section>

                <section className="pccases-fans">
                    <div>
                        <h5>Ventik száma</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Nincs</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">1-2</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">3 vagy több</label>
                        </div>
                    </div>
                </section>

            </div>
            <Table className="table-responsive-md videocards-list">
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Szín</th>
                    <th>Tápegység</th>
                    <th>Súly</th>
                    <th>Méret típus</th>
                    <th>Ventik száma</th>
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
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
            <Button className="btn-success" >Választ</Button>
        </div>
    )
}

export default class PcCases extends React.Component{
    render() {
        return <PcCasesListPage/>
    }
}