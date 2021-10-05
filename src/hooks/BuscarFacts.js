import { useEffect, useState } from "react";
import { buscarFetchFacts } from "../helpers/buscarFetchFacts";




export const BuscarFacts = () => {

    const [fact, setFact] = useState('Chuck norris quiere que aprenda react');
      
    useEffect( () => {
        buscarFetchFacts().then( data => setFact(data))
    }, [])


    const handleBotonOtro = () => {        
        buscarFetchFacts().then( data => setFact(data));

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
