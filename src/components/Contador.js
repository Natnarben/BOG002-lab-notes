import React, {useState, Fragment, useEffect} from 'react';


const Contador = () => {

    const [numero, setNumero] = useState(0); 
    
    useEffect(() => {
    console.log(`la cuenta es ${numero}`)
    })
    
    const aumentar  = () => {
        setNumero(numero +1);
    }

    return (
        <Fragment>
            <h1>Clicks: {numero}</h1>
            <button onClick={aumentar}>AUMENTAR</button>
        </Fragment>

    )
}

export default Contador;

