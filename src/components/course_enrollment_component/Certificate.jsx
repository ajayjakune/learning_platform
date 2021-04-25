import React from 'react';
import './courseEnroll.css';
import Pdf from 'react-to-pdf';
import { FiDownload } from 'react-icons/fi'
import { Button } from 'react-bootstrap';

const Certificate = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [595, 350]
    };

    return (
        <div className="cert-main">
            <h2 className="text-center mt-3">Completion Certificate</h2>
            <span>
                <Pdf targetRef={ref} filename="gurukul_certificate.pdf" options={options}>
                    {
                        ({ toPdf }) => <Button style={{ width: "130px", height: "50px", float: "right", marginRight: "110px" }} onClick={toPdf}><strong>Download</strong>&nbsp;<FiDownload /></Button>
                    }
                </Pdf>
            </span>
            <div style={{ border: "20px solid gray", width: "80%", margin: "80px 0 0 90px" }} ref={ref}>
                <div className="container-certificate text-center">
                    <div className="logo">
                        <img src="/persistent_logo.png" alt="logo" />
                        <span>Gurukul</span>
                    </div>
                    <div className="marquee">
                        Certificate of Completion
                </div>

                    <div className="assignment">
                        This certificate is presented to
                </div>

                    <div className="person">
                        Joe Nathan
                </div>

                    <div className="reason">
                        For successfully completing XYZ course at Gurukul
                </div>
                </div>
            </div>
        </div>

    )
}
export default Certificate;