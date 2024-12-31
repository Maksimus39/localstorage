import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incCounterValueAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch();

    const incHandler = () => {
       dispatch(incCounterValueAC())
    }


    // const [value, setValue] = React.useState<number>(0)
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }, []);
    //
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value]);
    //
    //


    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h1>{value}</h1>

            <button onClick={incHandler}>inc</button>

        </div>
    );
}

export default App;
