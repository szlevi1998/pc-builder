import React from "react";
import NavBar from "../NavBar";
import "../stylesheets/prebuilds.css";

function OpenPreBuilds() {
    return (<div>
            <NavBar></NavBar>
            <h1 className="title-h1">Alap konfigok</h1>
            <section className="intel-section">Intel konfigurációk</section>
            <div>
                <div className="row">
                    <div className="col-md-4 left-element">

                        <div className="left-box">
                            Belépő szint
                            <p>(200000 Ft alatt)</p>
                            <p>ASUS PRIME H610M-K D4 </p>
                            <p>Intel Core i3-12100 </p>
                            <p>Cooler Master Hyper TX3 EVO </p>
                            <p>Kingston FURY Beast 16GB (2x8GB) DDR4 </p>
                            <p>Videókártya nélkül</p>
                            <p>Crucial P2 500GB </p>
                            <p>Zalman S2 </p>
                            <p>FSP Hydro PRO 600W </p>

                            <section className="entry-intel">
                                <img src="https://dlcdnwebimgs.asus.com/gain/8c324558-89c8-4b45-a71e-20d5e0dabbbe/"
                                     alt="logo"/>
                                <img src="https://m.media-amazon.com/images/I/51Cbvw+ScJL._AC_SX425_.jpg" alt="logo"/>
                                <img
                                    src="https://media.icdn.hu/product/GalleryMod/2018-12/518208/resp/1153488_zalman_s2_fekete.webp"
                                    alt="logo"/>
                                <h4> Ár: 171 000 FT</h4>
                            </section>
                        </div>

                    </div>

                    <div className="col-md-4 middle-element">
                        <div className="middle-box">
                            Alsóközép szint
                            <p>(250000 Ft alatt)</p>
                            <p></p>
                            <p>GIGABYTE H610M S2H </p>
                            <p>Intel Core i3-12300 </p>
                            <p>ARCTIC Freezer i35 CO </p>
                            <p>Corsair VENGEANCE RGB PRO SL 16GB (2x8GB) DDR4 </p>
                            <p>Videókártya nélkül</p>
                            <p>Samsung 980 500 GB </p>
                            <p>Thermaltake Versa N24 </p>
                            <p>EVGA 700 GD </p>
                            <section>
                                <h4>Ár: 228 000 FT</h4>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 right-element">
                        <div className="right-box">
                            Közép szint
                            <p>(400000 Ft alatt)</p>
                            <p>ASUS PRIME B660-PLUS D4 </p>
                            <p>Intel Core i5-12400F </p>
                            <p>ARCTIC Freezer 34 eSports DUO </p>
                            <p>Crucial Ballistix 16GB (2x8GB) DDR4 </p>
                            <p>Palit GeForce RTX 3050 8GB </p>
                            <p>Samsung 980 1TB M.2 </p>
                            <p>NZXT H510 </p>
                            <p>EVGA PS-700W </p>
                            <section>
                                <h4>Ár: 385 000 FT</h4>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 left-element">
                        <div className="left-box">
                            Felsőközép szint
                            <p>(600000 Ft alatt)</p>
                            <p>ASUS ROG STRIX B660-I GAMING WIFI </p>
                            <p>Intel Core i5-12600KF </p>
                            <p>Scythe Mugen 5 Rev B </p>
                            <p>Corsair VENGEANCE RGB PRO SL 16GB (2x8GB) DDR4 </p>
                            <p>ASUS TUF RTX 3060 OC 12GB </p>
                            <p>Samsung 970 EVO Plus 1TB M.2 </p>
                            <p>Lian Li O11-Dynamic-mini </p>
                            <p>SilentiumPC Supremo FM2 750W Gold </p>
                            <section>
                                <h4>Ár: 598 000 FT</h4>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 middle-element">
                        <div className="middle-box">
                            Erős szint
                            <p>(800000 Ft alatt)</p>
                            <p> GIGABYTE Z690 GAMING X </p>
                            <p>Intel Core i7-12700KF </p>
                            <p>NZXT Kraken X63 280 </p>
                            <p>Kingston FURY Renegade RGB 32GB (4x8GB) DDR4 </p>
                            <p>SAPPHIRE Radeon NITRO+ RX 6700 XT 12GB </p>
                            <p>Kingston NV1 2TB </p>
                            <p>Lian Li LANCOOL II Mesh </p>
                            <p>SilentiumPC Supremo FM2 750W Gold </p>
                            <section>
                                <h4>Ár: 796 000 FT</h4>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-4 right-element">
                        <div className="right-box">
                            Legerősebb szint
                            <p>(1-1.5 millió Ft környéke)</p>
                            <p>ASUS ROG MAXIMUS Z690 HERO </p>
                            <p>Intel Core i9-12900K</p>
                            <p>ARCTIC Liquid Freezer II 360</p>
                            <p>Corsair VENGEANCE RGB PRO 64GB (4x16GB) DDR4</p>
                            <p>EVGA FTW3 Ultra Gaming RTX 3080 Ti 12GB</p>
                            <p>Samsung 980 PRO 2TB M.2</p>
                            <p>Fractal Design Meshify 2 XL</p>
                            <p>Seasonic PRIME TX-750W</p>
                            <section>
                                <h4>Ár: 1 570 000 FT</h4>
                            </section>
                        </div>
                    </div>

                </div>
            </div>

            <section className="amd-section">AMD konfigurációk</section>
            <section>
                <section>
                    <div>
                        <div className="row">
                            <div className="col-md-4 left-element">

                                <div className="left-box">
                                    Belépő szint
                                    <p>(200000 Ft alatt)</p>
                                    <p>GIGABYTE A520M S2H</p>
                                    <p>AMD Ryzen 5 5600G</p>
                                    <p>Gyári hűtő</p>
                                    <p>Crucial Ballistix 16GB (2x8GB) DDR4</p>
                                    <p>Videókártya nélkül</p>
                                    <p>Western Digital Blue 3D NAND 2.5 500 GB SSD</p>
                                    <p>Cooler Master Elite Knight K350</p>
                                    <p>Cooler Master Elite V3 600W</p>
                                    <section>
                                        <h4> Ár: 185 000 FT</h4>
                                    </section>
                                </div>

                            </div>

                            <div className="col-md-4 middle-element">
                                <div className="middle-box">
                                    Alsóközép szint
                                    <p>(250000 Ft alatt)</p>
                                    <p>ASUS TUF GAMING B550M-PLUS</p>
                                    <p>AMD Ryzen 5 5600G</p>
                                    <p>ARCTIC Freezer i35 CO </p>
                                    <p>Corsair VENGEANCE RGB PRO SL 16GB (2x8GB) DDR4 </p>
                                    <p>Videókártya nélkül</p>
                                    <p>Samsung 980 500 GB </p>
                                    <p>Thermaltake Versa N24 </p>
                                    <p>EVGA PS-700W </p>
                                    <section>
                                        <h4>Ár: 238 000 FT</h4>
                                    </section>
                                </div>
                            </div>
                            <div className="col-md-4 right-element">
                                <div className="right-box">
                                    Közép szint
                                    <p>(400000 Ft alatt)</p>
                                    <p>MSI MAG B550 Tomahawk </p>
                                    <p>AMD Ryzen 5 5600G </p>
                                    <p>Alpenföhn Brocken ECO Advanced </p>
                                    <p>Kingston FURY Beast 32GB (2x16GB) DDR4 </p>
                                    <p>Gainward Ghost GTX 1650 OC 4GB </p>
                                    <p>Samsung 980 500 GB </p>
                                    <p>Lian Li LANCOOL II Mesh </p>
                                    <p>EVGA 700 GD </p>
                                    <section>
                                        <h4>Ár: 384 000 FT </h4>
                                    </section>
                                </div>
                            </div>
                            <div className="col-md-4 left-element">
                                <div className="left-box">
                                    Felsőközép szint
                                    <p>(600000 Ft alatt)</p>
                                    <p>MSI MPG X570 Gaming Edge WIFI </p>
                                    <p>AMD Ryzen 5 5800X </p>
                                    <p>ARCTIC Liquid Freezer II 360 </p>
                                    <p>G.SKILL Trident Z 32GB (2x16GB) DDR4 </p>
                                    <p>PowerColor Fighter Radeon RX 6600 XT 8GB </p>
                                    <p>Samsung 970 EVO Plus 1TB M.2" </p>
                                    <p>Lian Li LANCOOL II Mesh </p>
                                    <p>EVGA 700 GD </p>
                                    <section>
                                        <h4>Ár: 595 000 FT</h4>
                                    </section>
                                </div>
                            </div>
                            <div className="col-md-4 middle-element">
                                <div className="middle-box">
                                    Erős szint
                                    <p>(800000 Ft alatt)</p>
                                    <p>ASUS ROG Strix X570-F Gaming </p>
                                    <p>AMD Ryzen 5 5800X </p>
                                    <p>Corsair iCUE H150i ELITE 360 </p>
                                    <p> Kingston FURY Renegade 32GB (2x16GB) DDR4 </p>
                                    <p>GIGABYTE GeForce VISION RTX 3070 Ti 8GB OC </p>
                                    <p>Samsung 980 1TB M.2 </p>
                                    <p>be quiet! Pure Base 500DX </p>
                                    <p>SilentiumPC Supremo FM2 750W Gold </p>
                                    <section>
                                        <h4>Ár: 793 000 FT</h4>
                                    </section>
                                </div>
                            </div>
                            <div className="col-md-4 right-element">
                                <div className="right-box">
                                    Legerősebb szint
                                    <p>(1-1.5 millió Ft környéke)</p>
                                    <p>ASUS ROG Crosshair VIII Hero WIFI </p>
                                    <p>AMD Ryzen 5 5950X </p>
                                    <p>Corsair iCUE H150i ELITE 360 </p>
                                    <p>Corsair VENGEANCE RGB PRO 64GB (4x16GB) DDR4 </p>
                                    <p>ASUS TUF Radeon RX 6900 XT 16GB </p>
                                    <p>Samsung 980 PRO 2TB M.2 </p>
                                    <p>be quiet! SILENT BASE 802 </p>
                                    <p>Corsair HX1200 1200W Platinum </p>
                                    <section>
                                        <h4>Ár: 1 466 000 FT</h4>
                                    </section>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default class PreBuilds extends React.Component {
    render() {
        return <OpenPreBuilds/>
    }
}