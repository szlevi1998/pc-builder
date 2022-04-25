import React from 'react';
import '../../stylesheets/builderpages/storages.css'
import {useNavigate} from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';

function StorageListPage() {
    return (<div>
            <h1 className='storage-h1'>Válassz tárolót!</h1>
            <div className='storage-filters'>
                <section className='storage-search'>
                    <div>
                        <h5>Keresés</h5>
                        <input type='search' className='form-control' placeholder='Keresés'/>
                    </div>
                </section>
                <section className='storage-price'>
                    <div>
                        <h5>Ár</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>18000 FT alatt</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>18000-26000 FT</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>26000-40000 FT</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>40000 FT fölött</label>
                        </div>
                    </div>
                </section>
                <section className='storage-manufacturer'>
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
                            <label className='form-check-label'>Crucial</label>
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
                            <label className='form-check-label'>Kingston</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Samsung</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Seagate</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Toshiba</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>Western Digital</label>
                        </div>
                    </div>

                </section>
                <section className='storage-storagetype'>
                    <div>
                        <h5>Tárhely típusa</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>HDD</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>SSD</label>
                        </div>
                    </div>

                </section>

                <section className='storage-socket'>
                    <div>
                        <h5>Tárhely foglalat</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>M.2</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>SATA</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>SATA3</label>
                        </div>
                    </div>

                </section>

                <section className='storage-size'>
                    <div>
                        <h5>Kapacivitás</h5>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>240 GB</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>250 GB</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>500 GB</label>
                        </div>

                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>1000 GB</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>2000 GB</label>
                        </div>
                        <div>
                            <input className='form-check-input'
                                   type='checkbox'
                                   id='flexCheckDefault'
                            />
                            <label className='form-check-label'>4000 GB</label>
                        </div>
                    </div>

                </section>
            </div>
            <Table className='table-responsive-md storage-list'>
                <thead>
                <tr>
                    <th>Termék neve</th>
                    <th>Gyártó</th>
                    <th>Min.ár</th>
                    <th>Átlag ár</th>
                    <th>Tárhely típusa</th>
                    <th>Kapacivitás</th>
                    <th>Tárhely foglalat</th>
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
                </tr>

                <tr>
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

export default class Storages extends React.Component {
    render() {
        return <StorageListPage/>
    }
}