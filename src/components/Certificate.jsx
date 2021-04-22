import React from 'react';
import './certificate.css'

const Certificate = () => {
    return (
    <div className="cert-main">
        <h2 className="text-center mt-3">Completion Certificate</h2>
        <div style={{ border: "20px solid gray", width:"80%", padding:"0", marginLeft:"90px"}}>
            <div className="container-certificate text-center">
                <div className="logo">
                    <img src="/persistent_logo.png" alt="logo"/>
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