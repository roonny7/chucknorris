import { useEffect, useState } from "react";
import { buscarFetchInsultos } from "../helpers/buscarFetchInsultos";




export const BuscarInsultos = () => {

    const [fact, setFact] = useState('Chuck norris quiere que aprenda react');
      
    useEffect( () => {
        buscarFetchInsultos().then( data => setFact(data))
    }, [])


    const handleBotonOtro = () => {        
        buscarFetchInsultos().then( data => setFact(data));

    }    //////////////////////////////////////////////////////////////////
    
     
    return (
        
        <> 
         {   fact }
        <br />
        <input type="button" name="chingados" value="Otro fact" onClick={handleBotonOtro } className="btn btn-primary" />
        { /*datos.map(datos => <div>{datos.value}</div>) */}
        </>
    );
}
