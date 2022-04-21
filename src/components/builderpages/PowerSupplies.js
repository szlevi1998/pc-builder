import React from "react";
import "../../stylesheets/builderpages/powersupplies.css";
import {useNavigate} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

function PowerSuppliesListPage() {
    return (<div>
            <h1 className="psu-h1">Válassz tápegységet!</h1>
            <div className="psu-filters">
                <section className="psu-search">
                    <div>
                        <h5>Keresés</h5>
                        <input type="search" className="form-control" placeholder="Keresés"/>
                    </div>
                </section>
                <section className="psu-price">
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
                <section className="psu-manufacturer">
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
                            <label className="form-check-label">CHIEFTEC</label>
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
                            <label className="form-check-label">EVGA</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">FSP</label>
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
                            <label className="form-check-label">Lenovo</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Seasonic</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">SilentiumPC</label>
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
                <section className="psu-type">
                    <div>
                        <h5>Típus</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Fix</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Félmoduláris</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Moduláris</label>
                        </div>
                    </div>

                </section>

                <section className="psu-performance">
                    <div>
                        <h5>Tápegység</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">500-650</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">650 fölött</label>
                        </div>
                    </div>

                </section>

                <section className="psu-efficiency">
                    <div>
                        <h5>Hatékonyság</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">80 Plus Bronze</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">80 Plus Gold</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">80 Plus Platinum</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">80 Plus Titanium</label>
                        </div>
                    </div>
                </section>

            </div>
            <Table className="table-responsive-md psu-list">
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Hatékonyság</th>
                    <th>Teljesítmény</th>

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
            <Button className="btn-success">Választ</Button>
        </div>
    )
}

export default class PowerSupplies extends React.Component {
    render() {
        return <PowerSuppliesListPage/>
    }
}