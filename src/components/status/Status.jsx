import React from "react";
import "./status.scss";

const Status = () => {
    const steps = ['10:00 AM ', '11:00 AM. ', '11:30 AM. ', '01:30 AM. ', '02:30 AM'];
    return (
        <div className="container">
            {steps?.map((step, i) => (
                <div key={i} className="step-item">
                    <div className="step">{i + 1}</div>
                  <p>{step}</p>  
                </div>
                
            ))}
        </div>
    )
}

export default Status