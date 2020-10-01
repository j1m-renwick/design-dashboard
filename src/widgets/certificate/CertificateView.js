import React, {useRef, useState} from 'react';
import {transform} from "framer-motion";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {motion} from "framer-motion";

export default function CertificateView({state}) {

    const [showViewport, setShowViewport] = useState(false);
    const [magnifierTopOffset, setMagnifierTopOffset] = useState(0);

    const certificateHeightPixelRange = [0, 420 - 70] // 420 is the height, 70 is a magic number i think
    const viewportCertificatePixelRange = [0, 3200]


    const ref = useRef();

    const moveViewport = evt => {
        let boundingBox = evt.currentTarget.getBBox()
        let viewportYCenter = Math.min(Math.max(0, evt.clientY - boundingBox.y), boundingBox.height - 100)
        setMagnifierTopOffset(viewportYCenter);
        if (ref.current) {
            ref.current.scrollTop = transform(viewportYCenter, certificateHeightPixelRange, viewportCertificatePixelRange)
        }
    }

    const startViewport = evt => {
        setShowViewport(true)
        moveViewport(evt);
    }

    const classes = makeStyles(theme => ({
        magnifier: {
            position: "absolute",
            left: `0px`,
            top: `${magnifierTopOffset}px`,
            width: "264px",
            height: "100px",
            pointerEvents: "none",
            backgroundColor: "rgb(12,12,12,0.5)"
        },
        viewport: {
            position: "absolute",
            top: "100px",
            left: "300px",
            width: "700px",
            height: "300px",
            backgroundColor: "white",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            borderRadius: "10px",
            textAlign: "left",
            overflowY: "scroll",
            padding: "10px"
        }
    }))();


    return (
        <motion.div animate={state} style={{opacity: 0, position: "absolute", left: "450px"}}>
            {/*<motion.div*/}
            {/*    // initial={false} animate={state}*/}
            {/*>*/}
            <svg onMouseEnter={e => startViewport(e)} onMouseMove={e => moveViewport(e)}
                 onMouseLeave={() => setShowViewport(false)} width="264" height="420" viewBox="58 65 265 421"
                 xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect stroke="#000" rx="25" height="419.99999" width="263.99999" y="65.45313" x="58.50001"
                          strokeWidth="1.5" fill="#fff"/>
                    <rect rx="7" height="22" width="210" y="96.45313" x="84.5" strokeWidth="0" stroke="#ff0000"
                          fill="#f44336"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="137.45313" x="115.5"
                          strokeWidth="0" fill="#29b6f6"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="179.45313" x="115.5"
                          strokeWidth="0" fill="#66bb6a"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="219.45313" x="115.5"
                          strokeWidth="0" fill="#98ee99"/>
                    <rect rx="7" height="22" width="210" y="260.45313" x="84.5" strokeWidth="0" stroke="#ff0000"
                          fill="#f44336"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="301.45313" x="115.5"
                          strokeWidth="0" fill="#ff77a9"/>
                    <rect stroke="#ff0000" rx="7" height="22" width="179" y="417.45313" x="115.5"
                          strokeWidth="0" fill="#ff77a9"/>
                    <rect stroke="#ff0000" height="119" width="179" y="311.45313" x="115.5" strokeWidth="0"
                          fill="#ff77a9"/>
                    <text fontWeight="bold" textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="14"
                          y="112.45313" x="90.5" strokeWidth="0" stroke="#ff0000" fill="#ffffff">DATA
                    </text>
                    <text fontWeight="bold" textAnchor="start" fontFamily="Arvo, sans-serif" fontSize="14"
                          y="276.45313" x="90.5" strokeWidth="0" stroke="#ff0000" fill="#ffffff">SIGNATURE
                    </text>
                </g>
            </svg>
            {showViewport ?
                <>
                    <div className={classes.magnifier}/>
                    <div ref={ref} className={classes.viewport}>
                        <svg width="700" height="3200" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <rect fill="#fff" id="canvas_background" height="3202" width="702" y="-1" x="-1"/>
                            </g>
                            <g>
                                <text y="25" x="2.5">Certificate:</text>
                                <text y="57" x="28.5">Data:</text>
                                <text y="90" x="54.5">Version: 3 (0x2)</text>
                                <text y="123" x="80.5">Serial Number:</text>
                                <text y="156" x="106.5">31:79:87:25:0f:c0:be:e8:08:00:00:00:00:56:05:ed</text>
                                <text y="189" x="80.5">Signature Algorithm: sha256WithRSAEncryption</text>
                                <text y="222" x="80.5">Issuer: C = US, O = Google Trust Services, CN = GTS CA 1O1</text>
                                <text y="255" x="80.5">Validity</text>
                                <text y="288" x="106.5">Not Before: Aug 26 08:08:49 2020 GMT</text>
                                <text y="321" x="106.5">Not After : Nov 18 08:08:49 2020 GMT</text>
                                <text y="354" x="80.5">Subject: C = US, ST = California, L = Mountain View, O = Google
                                    LLC, CN = *.google.com
                                </text>
                                <text y="387" x="80.5">Subject Public Key Info:</text>
                                <text y="420" x="106.5">Public Key Algorithm: id-ecPublicKey</text>
                                <text y="453" x="132.5">Public-Key: (256 bit)</text>
                                <text y="486" x="132.5">pub:</text>
                                <text y="519" x="156.5">04:8e:14:e9:f8:bb:ae:1f:c4:64:53:b7:d6:7a:76:</text>
                                <text y="552" x="156.5">50:8b:ab:05:c6:2e:71:32:e0:3e:db:ef:1e:5a:34:</text>
                                <text y="585" x="156.5">43:a4:74:6a:2b:52:38:75:03:f0:2d:fa:e6:da:82:</text>
                                <text y="618" x="156.5">10:92:53:9b:a0:0e:28:ea:61:68:2b:0c:6d:df:22:</text>
                                <text y="651" x="156.5">da:5f:14:1b:90</text>
                                <text y="684" x="132.5">ASN1 OID: prime256v1</text>
                                <text y="717" x="132.5">NIST CURVE: P-256</text>
                                <text y="750" x="80.5">X509v3 extensions:</text>
                                <text y="783" x="106.5">X509v3 Key Usage: critical</text>
                                <text y="816" x="132.5">Digital Signature</text>
                                <text y="849" x="106.5">X509v3 Extended Key Usage:</text>
                                <text y="882" x="132.5">TLS Web Server Authentication</text>
                                <text y="915" x="106.5">X509v3 Basic Constraints: critical</text>
                                <text y="948" x="132.5">CA:FALSE</text>
                                <text y="981" x="106.5">X509v3 Subject Key Identifier:</text>
                                <text y="1014" x="132.5">96:65:7B:C2:08:15:03:E1:C3:F8:50:DD:8F:B6:73:65:43:DF:8C:80
                                </text>
                                <text y="1047" x="106.5">X509v3 Authority Key Identifier:</text>
                                <text y="1080"
                                      x="132.5">keyid:98:D1:F8:6E:10:EB:CF:9B:EC:60:9F:18:90:1B:A0:EB:7D:09:FD:2B
                                </text>
                                <text y="1113" x="106.5">Authority Information Access:</text>
                                <text y="1146" x="132.5">OCSP - URI:http://ocsp.pki.goog/gts1o1core</text>
                                <text y="1179" x="132.5">CA Issuers - URI:
                                    <tspan fill="#66bb6a" stroke="#66bb6a" fontWeight="bold">
                                        http://pki.goog/gsr2/GTS1O1.crt</tspan>
                                </text>
                                <text y="1212" x="106.5">X509v3 Subject Alternative Name:</text>
                                <text y="1245" x="132.5">DNS:*.google.com, DNS:*.android.com,
                                    DNS:*.appengine.google.com, ...
                                </text>
                                <text y="1278" x="132.5">DNS:*.datacompute.google.com, DNS:*.g.co, DNS:*.gcp.gvt2.com,
                                    ...
                                </text>
                                <text y="1311" x="132.5">DNS:*.google.ca, DNS:*.google.cl, DNS:*.google.co.in, ...
                                </text>
                                <text y="1344" x="132.5">DNS:*.google.com.co, DNS:*.google.com.mx, DNS:*.google.com.tr,
                                    ...
                                </text>
                                <text y="1377" x="132.5">DNS:*.google.it, DNS:*.google.nl, DNS:*.google.pl, ...</text>
                                <text y="1410" x="132.5">DNS:*.googlecommerce.com, DNS:*.googlevideo.com, ...</text>
                                <text y="1443" x="132.5">DNS:*.metric.gstatic.com, DNS:*.urchin.com, ...</text>
                                <text y="1476" x="132.5">DNS:*.youtubeeducation.com, DNS:*.youtubekids.com, DNS:*.yt.be,
                                    ...
                                </text>
                                <text y="1509" x="132.5">DNS:developer.android.google.cn, ...</text>
                                <text y="1542" x="132.5">DNS:google.com, DNS:googlecnapps.cn, DNS:googlecommerce.com,
                                    ...
                                </text>
                                <text y="1575" x="132.5">DNS:youtubeeducation.com, DNS:youtubekids.com, DNS:yt.be</text>
                                <text y="1608" x="106.5">X509v3 Certificate Policies:</text>
                                <text y="1641" x="132.5">Policy: 2.23.140.1.2.2</text>
                                <text y="1674" x="132.5">Policy: 1.3.6.1.4.1.11129.2.5.3</text>
                                <text y="1707" x="106.5">X509v3 CRL Distribution Points:</text>
                                <text y="1740" x="132.5">Full Name:</text>
                                <text y="1773" x="158.5">URI:http://crl.pki.goog/GTS1O1core.crl</text>
                                <text y="1806" x="106.5">URI:http://crl.pki.goog/GTS1O1core.crl</text>
                                <text y="1839" x="106.5">CT Precertificate SCTs:</text>
                                <text y="1872" x="132.5">Signed Certificate Timestamp:</text>
                                <text y="1905" x="158.5" xmlSpace="preserve">Version : v1 (0x0)</text>
                                <text y="1938" x="158.5" xmlSpace="preserve">Log ID :
                                    B2:1E:05:CC:8B:A2:CD:8A:20:4E:87:66:F9:2B:B9:8A:
                                </text>
                                <text y="1971" x="295.5"
                                      xmlSpace="preserve">25:20:67:6B:DA:FA:70:E7:B2:49:53:2D:EF:8B:90:5E
                                </text>
                                <text y="2004" x="158.5" xmlSpace="preserve">Timestamp : Aug 26 09:08:54.333 2020 GMT
                                </text>
                                <text y="2037" x="158.5" xmlSpace="preserve">Extensions : none</text>
                                <text y="2070" x="158.5" xmlSpace="preserve">Signature : ecdsa-with-SHA256</text>
                                <text y="2103" x="295.5">30:45:02:20:5B:B2:62:C1:73:70:1D:C2:F4:D1:82:C3:</text>
                                <text y="2136" x="295.5">47:60:FA:69:38:75:B4:09:B6:50:DA:2D:BE:96:6D:80:</text>
                                <text y="2169" x="295.5">CB:6E:E9:C8:02:21:00:CF:D5:2D:39:64:41:58:ED:44:</text>
                                <text y="2202" x="295.5">F2:3A:BE:9B:47:46:30:4D:8C:AB:6A:2D:75:DA:92:F0:</text>
                                <text y="2235" x="295.5">18:7E:66:88:48:5A:0D</text>
                                <text y="2268" x="132.5">Signed Certificate Timestamp:</text>
                                <text y="2301" x="158.5" xmlSpace="preserve">Version : v1 (0x0)</text>
                                <text y="2334" x="158.5" xmlSpace="preserve">Log ID :
                                    E7:12:F2:B0:37:7E:1A:62:FB:8E:C9:0C:61:84:F1:EA:
                                </text>
                                <text y="2367" x="295.5"
                                      xmlSpace="preserve">7B:37:CB:56:1D:11:26:5B:F3:E0:F3:4B:F2:41:54:6E
                                </text>
                                <text y="2400" x="158.5" xmlSpace="preserve">Timestamp : Aug 26 09:08:54.354 2020 GMT
                                </text>
                                <text y="2433" x="158.5" xmlSpace="preserve">Extensions : none</text>
                                <text y="2466" x="158.5" xmlSpace="preserve">Signature : ecdsa-with-SHA256</text>
                                <text y="2499" x="295.5">30:45:02:20:0B:69:DB:8E:97:56:FB:69:89:55:FA:04:</text>
                                <text y="2532" x="295.5">BF:84:67:C8:0E:7D:22:C2:F3:64:CD:36:DA:CD:D7:2F:</text>
                                <text y="2565" x="295.5">52:D1:56:2B:02:21:00:92:58:82:AA:23:14:AA:B3:00:</text>
                                <text y="2598" x="295.5">9F:53:A4:7D:93:CE:37:7F:CB:2F:CA:6C:1E:56:3D:47:</text>
                                <text y="2631" x="295.5">16:AC:EB:F2:64:E0:87</text>
                                <text y="2664" x="28.5">Signature Algorithm: sha256WithRSAEncryption</text>
                                <text y="2697" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">2f:de:47:43:cd:2d:0a:ed:6f:6d:3c:4b:39:0e:e6:05:17:74:</text>
                                <text y="2730" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">58:a7:33:f0:a1:10:0a:52:94:55:80:52:8a:5c:a0:88:73:35:</text>
                                <text y="2763" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">55:cd:d9:51:72:de:c2:96:5c:52:83:f2:ca:05:a1:72:60:06:</text>
                                <text y="2796" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">28e:da:4d:80:05:6a:60:fe:60:ab:cc:dc:02:67:84:41:47:cd:</text>
                                <text y="2829" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">eb:af:80:6b:ec:d5:0d:6e:56:5a:bd:00:47:d8:62:2f:4c:01:</text>
                                <text y="2862" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">93:76:10:bb:16:15:ca:d4:d9:b2:92:0e:5d:96:56:06:95:c3:</text>
                                <text y="2895" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">a6:d6:77:fb:97:b6:2f:66:06:7c:0c:21:91:ac:8c:84:16:61:</text>
                                <text y="2928" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">40:02:a9:f1:ca:62:e3:e0:72:da:7b:ab:3f:64:27:bb:d0:ff:</text>
                                <text y="2961" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">de:a0:c4:6d:a3:72:1d:bc:0e:1d:a7:6a:07:15:69:70:aa:63:</text>
                                <text y="2994" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">d2:68:ed:50:d2:44:c4:21:ca:b4:ec:73:0b:0c:b2:86:17:fa:</text>
                                <text y="3027" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">cd:4a:ca:57:2c:56:9d:17:10:0e:68:ce:6d:e1:00:d4:65:f1:</text>
                                <text y="3060" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">11:63:9f:e4:07:d9:fb:eb:36:7e:77:bc:94:a3:c5:04:8c:ca:</text>
                                <text y="3093" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">fa:ec:7a:a3:33:fb:b1:65:82:d0:2b:e7:02:29:f9:c4:91:da:</text>
                                <text y="3126" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">3e:62:3e:8a:da:29:c2:91:bb:60:cf:d6:d2:f4:5b:a5:19:37:</text>
                                <text y="3159" x="54.5" fill="hotpink" stroke="hotpink" fontWeight="bold">b1:ae:b8:7e</text>
                            </g>
                        </svg>
                    </div>
                </>
                : <></>}
        </motion.div>
    );
}
