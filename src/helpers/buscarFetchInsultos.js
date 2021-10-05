import axios from 'axios';

export const buscarFetchInsultos = async() => {
    
       /*const respuesta = await axios('https://api.yomomma.info/', { mode: "no-cors"})
       const data = await respuesta.json();
       console.log(data);
       return data.value;
*/
    axios.get(`https://api.yomomma.info/`)
    .then(res => {
    const personas = res.data;
    console.log(personas)
    })
       
    

}
