
export const useFetchFacts = async() => {

    const respuesta = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await respuesta.json();
    //console.log(data.value);


    return data;

}
