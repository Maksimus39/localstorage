import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValuesTC, setValuesFromLocalStorageTC} from "./bll/counter-reducer";

function App() {
    const value = useSelector<AppStateType, number>(state => state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(setValuesFromLocalStorageTC())
    }, [dispatch])


    const incHandler = () => {
        // @ts-ignore
        // dispatch(incValuesTC(value+1));
        dispatch(incValuesTC())
    }

    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
