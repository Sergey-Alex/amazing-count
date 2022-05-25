import React, {useState} from 'react';
import './App.css';
import Tablo from "./componeents/Tablo/Tablo";
import Button from "./componeents/Button/Button";

function App() {

    const [count, setCount] = useState<number>(0)

    const addCount = () => {
        let newCount = count + 1
        setCount(newCount)
    }

    const resCount = () => {
        setCount(0)
    }

    return (
        <div className='App'>
            <Tablo count={count}/>
            <div className='wrapper'>
                <Button callBack={addCount} disabled={count === 5} name='Inc'/>
                <Button callBack={resCount} disabled={count === 0} name='Res'/>
            </div>
        </div>
    );
}

export default App;
