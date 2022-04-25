import React from 'react';
import '../../stylesheets/builderpages/videocards.css';
import {useNavigate} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';

function VideoCardListPage() {
    return (<div>
            <h1 className='videocards-h1'>Válassz Videókártyát!</h1>
            <div className='videocards-filters'>
                <section className='videocards-search'>
                    <div>
                        <h5>Keresés</h5>
                        <input type='search' className='form-control' placeholder='Keresés'/>
                    </div>
                </section>
                <section className='videocards-price'>
                    <div>
                        <h5>Ár</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>150000 FT alatt</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>150000-250000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>250000-400000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>400000-650000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>650000 FT fölött</label>
                        </div>
                    </div>
                </section>
                <section className='videocards-manufacturer'>
                    <div>
                        <h5>Gyártó</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Asrock</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Asus</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>EVGA</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Gainward</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Gigabyte</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Inno3D</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Manli</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>MSI</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Noctua</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Palit</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>PowerColor</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Sapphire</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>XFX</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Zotac</label>
                        </div>
                    </div>

                </section>
                <section className='videocards-memorytype'>
                    <div>
                        <h5>Memória típusa</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>GDDR6</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>GDDR6X</label>
                        </div>
                    </div>

                </section>
                <section className='videocards-memorysize'>
                    <div>
                        <h5>Memória méret</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>4</label>
                        </div>

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
                            <label className='form-check-label'>10</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>12</label>
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
                            <label className='form-check-label'>24</label>
                        </div>
                    </div>

                </section>
                <section className='videocards-type'>
                    <div>
                        <h5>Típus</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Nvidia GTX</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Nvidia RTX</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>AMD RX</label>
                        </div>
                    </div>

                </section>
                <section className='videocards-chipset'>
                    <div>
                        <h5>Chipset</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>GTX 1650</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>GTX 1660 Super</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>GTX 1660 ti</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3050</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3060</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3060 Ti</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3070</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3070 Ti</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3080</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3080 Ti</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RTX 3090</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6500XT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6600</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6600XT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6700XT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6800</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6800XT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>RX 6900XT</label>
                        </div>
                    </div>

                </section>
            </div>
            <Table className='table-responsive-md videocards-list'>
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Típus</th>
                    <th>Chipset</th>
                    <th>Memória méret</th>
                    <th>Memória típusa</th>
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
            <Button className='btn-success'>Választ</Button>

        </div>
    )
}

export default class VideoCards extends React.Component {
    render() {
        return <VideoCardListPage/>
    }
}