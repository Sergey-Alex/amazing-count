import React from 'react';
import classes from "./Button.module.css";

type ButtonPropsType = {
    callBack: () => void
    name: string
    disabled: boolean
}

const Button = ({name, callBack, disabled}: ButtonPropsType) => {

    const ButtonClickHandler = () => {
        callBack()
    }
    return (
        <button className={disabled ? classes.btn_block : classes.btn}
                disabled={disabled}
                onClick={ButtonClickHandler}>{name}
        </button>
    );
};

export default Button;