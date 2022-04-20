import React from 'react';
import '../../stylesheets/motherboards.css';
import {useNavigate} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';

function MotherBoardListPage() {
    const navigate = useNavigate();
    const backToPcBuilder = ()=>{
        navigate("/pcbuilder");
    }


    return (<div>
            <h1 className="motherboards-h1">Válassz alaplapot!</h1>
            <section className='motherboards'>
                <div className="container-motherboards">

                    <section className="form-check filter-section-search">
                        <div>
                            <h5>Keresés</h5>
                                <input type="search" className="form-control" placeholder="Keresés"/>
                        </div>
                        </section>
                    <section className="form-check filter-section-price">
                        <h5>Ár</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">50000 FT alatt</label>

                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">50000-75000 FT</label>
                                <div>
                                    <input className="form-check-input"
                                           type="checkbox"
                                           id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">75000-110000 FT</label>
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
                            </div>
                            </div>
                    </section>


                    <section className="form-check filter-section-manufacturer">
                        <div>
                            <h5>Gyártó</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">AsRock</label>
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
                                <label className="form-check-label">Gigabyte</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">MSI</label>
                            </div>
                        </div>
                    </section>
                    <section className="form-check filter-section-sockets">
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
                    <section className="form-check filter-section-size">
                        <div>
                            <h5>Méret</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">ATX</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">MicroATX</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">Mini-ITX</label>
                            </div>
                        </div>
                    </section>
                    <section className="form-check filter-section-chipset">
                        <div>
                            <h5>Chipset</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">AMD A520</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">AMD B550</label>
                                <div>
                                    <input className="form-check-input"
                                           type="checkbox"
                                           id="flexCheckDefault"
                                    />
                                    <label className="form-check-label">AMD X570</label>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel H510</label>
                                    </div>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel H610</label>
                                    </div>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel B560</label>
                                    </div>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel B660</label>
                                    </div>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel Z590</label>
                                    </div>
                                    <div>
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="flexCheckDefault"
                                        />
                                        <label className="form-check-label">Intel Z690</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="form-check filter-section-memorytype">
                        <div>
                            <h5>Méret</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">DDR4</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">DDR5</label>
                            </div>

                        </div>
                    </section>
                    <section className="form-check filter-section-bluetooth">
                        <div>
                            <h5>Bluetooth</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">Van</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">Nincs</label>
                            </div>

                        </div>
                    </section>
                    <section className="form-check filter-section-wifi">
                        <div>
                            <h5>Wifi</h5>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">Van</label>
                            </div>
                            <div>
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="flexCheckDefault"
                                />
                                <label className="form-check-label">Nincs</label>
                            </div>

                        </div>
                    </section>
                </div>
                <Table className='table-responsive-md motherboards-table'>
                    <thead>
                    <tr>
                        <th>Termék neve</th>
                        <th>Gyártó</th>
                        <th>Méret</th>
                        <th>Foglalat</th>
                        <th>Chipset</th>
                        <th>Memória típus</th>
                        <th>Memória foglalat</th>
                        <th>Bluetooth</th>
                        <th>Wifi</th>
                        <th>Min.Ár</th>
                        <th>Átlag ár</th>
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
                        <td></td>
                        <td></td>

                    </tr>
                    </tbody>
                </Table>
            </section>
            <Button className="btn-success" onClick={backToPcBuilder}>Választ</Button>
        </div>

    )
}

export default class Motherboards extends React.Component {
    render() {
        return <MotherBoardListPage/>
    }
}