import React from 'react';
import classes from './Tablo.module.css'


type TabloPropsType = {
    count: number
}

const Tablo = ({count}: TabloPropsType) => {
    return (
        <div className={count == 5 ? classes.tab_error : classes.numClass}>
            <span>{count}</span>
        </div>
    );
};

export default Tablo;