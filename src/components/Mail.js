import React from "react";
import { Link } from "react-router-dom";
import{Button} from'react-materialize'
const Mail = ({ mailto, label }) => {
    return (
        <Button id='mail'>
             <Link className='mail'
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </Button>
       
    );
};

export default Mail;