import React from 'react';
import '../../stylesheets/builderpages/memories.css'
import {useNavigate} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';

function MemoryListPage() {
    return (<div>
            <h1 className='memories-h1'>Válassz memóriát!</h1>
            <div className='memories-filters'>
                <section className='memories-search'>
                    <div>
                        <h5>Keresés</h5>
                        <input type='search' className='form-control' placeholder='Keresés'/>
                    </div>
                </section>
                <section className='memories-price'>
                    <div>
                        <h5>Ár</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>10000 FT alatt</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>10000-18000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>18000-35000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>35000-55000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>55000 FT fölött</label>
                        </div>
                    </div>
                </section>
                <section className='memories-manufacturer'>
                    <div>
                        <h5>Gyártó</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>ADATA</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Corsair</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Crucial</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>G.SKILL</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Kingston</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Patriot</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Team Group</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Thermaltake</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Samsung</label>
                        </div>
                    </div>

                </section>
                <section className='memories-memorytype'>
                    <div>
                        <h5>Memória típusa</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>DDR4</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>DDR5</label>
                        </div>
                    </div>

                </section>
                <section className='memories-size'>
                    <div>
                        <h5>Méret</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>8</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>16</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>32</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>64</label>
                        </div>
                    </div>

                </section>
                <section className='memories-clock'>
                    <div>
                        <h5>Órajel</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>2400-3000</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>3200-3600</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>4000 fölött</label>
                        </div>
                    </div>

                </section>
                <section className='memories-latency'>
                    <div>
                        <h5>Késleltetés</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>40-36</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>19</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>18</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>17</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>16</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>14</label>
                        </div>
                    </div>

                </section>
                <section className='memories-channel'>
                    <div>
                        <h5>Channel</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Single</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Dual</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Quad</label>
                        </div>
                    </div>
                </section>
            </div>
            <Table className='table-responsive-md memories-list'>
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Memória típusa</th>
                    <th>Méret</th>
                    <th>Órajel</th>
                    <th>Késleltetés</th>
                    <th>Channel</th>

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
            <Button className='btn-success'>Választ</Button>
        </div>
    )
}

export default class Memories extends React.Component {
    render() {
        return <MemoryListPage/>
    }
}