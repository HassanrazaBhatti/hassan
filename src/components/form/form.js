import React from "react";
import "./form.css";
import Button from '@material-ui/core/Button';

export const Form = () => {
    return (
        <div className="form">
            <div className="first_input">
                Enter IDCS
            <input type="number" className="number1" placeholder="000000" />
            </div>
            <div className="second_input">
                Enterez Numerio the telephone
            <input type="number" className="number2" placeholder="06-4456-000" />
            </div>
            <Button variant="contained" color="primary" style={{ margin: "30px 0px 0px 150px" }}>
                Envoyer OTP
            </Button>
            <div className="third_input">
                Reinsize OTP
             <input type="password" className="number3" placeholder="******" />
            </div>
        </div>

    );
}