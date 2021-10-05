import React from 'react';
import { BuscarFacts} from './hooks/BuscarFacts';
import { BuscarInsultos} from './hooks/BuscarInsultos';

export const AppChuckNorris = () => {
    return (
        <>
            <img src="chuck-norris.jpg" alt="Chuck is watching" width="400px"/><br/> <br />
            HAz clic en el botón para obtener otro fact jaja

            <h3><BuscarFacts /></h3>

            <h3><BuscarInsultos /></h3>
        </>
    )
}
