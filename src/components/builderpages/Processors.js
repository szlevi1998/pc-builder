import React from "react";
import {useNavigate} from "react-router-dom";
import "../../stylesheets/builderpages/processors.css"
import {Button, Table} from "react-bootstrap";

function ProcessorListPage() {

    const navigate = useNavigate();
    const backToPcBuilder = () => {
        navigate("/pcbuilder");
    }

    return (<div>
            <h1 className="processor-h1">Válassz processzort!</h1>

            <div className="processor-filters">

                <section className="processor-search">
                    <div>
                        <h5>Keresés</h5>
                        <input type="search" className="form-control" placeholder="Keresés"/>
                    </div>
                </section>

                <section className="processor-price">
                    <div>
                        <h5>Ár</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">50000 FT alatt</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">50000-75000 FT</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">75000-110000 FT</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">110000-150000 FT</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">150000 FT fölött</label>
                        </div>
                    </div>
                </section>

                <section className="processor-brand">
                    <div>
                        <h5>Márka</h5>
                        <input className="form-check-input"
                               type="radio"
                               name="filter-section"
                               id="FlexRadioDefault-all"
                        />
                        <label className="form-check-label">Bármelyik</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="radio"
                               name="filter-section"
                               id="FlexRadioDefault-amd"
                        />
                        <label className="form-check-label">AMD</label>
                    </div>

                    <div>
                        <input className="form-check-input"
                               type="radio"
                               name="filter-section"
                               id="FlexRadioDefault-intel"
                        />
                        <label className="form-check-label">Intel</label>
                    </div>
                </section>

                <section className="processor-cores">
                    <div>
                        <h5>Magok száma</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">4</label>
                        </div>

                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">6</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">8</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">10</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">12</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">16</label>
                        </div>
                    </div>
                </section>

                <section className="processor-series">
                    <div>
                        <h5>Széria</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">AMD Ryzen 5</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">AMD Ryzen 7</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">AMD Ryzen 9</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Intel Core i3</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Intel Core i5</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Intel Core i7</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Intel Core i9</label>
                        </div>
                    </div>
                </section>

                <section className="processor-socket">
                    <div>
                        <h5>Foglalat</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">AMD Socket AM4</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">LGA 1200</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">LGA 1700</label>
                        </div>
                    </div>
                </section>

                <section className="processor-igp">
                    <div>
                        <h5>Integrált videókártya</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Igen</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">Nem</label>
                        </div>
                    </div>
                </section>

                <section className="processor-maxclock">
                    <div>
                        <h5>Maximális Órajel</h5>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">4200-4400</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">4500-4700</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">4800-5000</label>
                        </div>
                        <div>
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexCheckDefault"
                            />
                            <label className="form-check-label">5000-</label>
                        </div>
                    </div>
                </section>
            </div>
            <Table className="table-responsive-md processor-list">
                <thead>
                <tr>
                    <th>Név</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Foglalat</th>
                    <th>Igp</th>
                    <th>Magok</th>
                    <th>Szálak</th>
                    <th>Órajel</th>
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
                    <td></td>

                </tr>
                </tbody>
            </Table>
            <Button className="btn-success select" onClick={backToPcBuilder}>Választ</Button>

        </div>
    )
}

export default class Processors extends React.Component {
    render() {
        return <ProcessorListPage/>
    }
}