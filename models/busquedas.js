import axios from "axios";

class Busquedas {
    historial = ['Bogotá', 'Madrid', 'Medellín'];

    constructor() {
        //TODO leer DB si existe
    }


    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoibHVpc2FuZ2VsbiIsImEiOiJjbHZ2aHhkaWwxdjU4MmpxaXQ2OG11b2liIn0.9cnEbeMoq6fumJx7CnJyLw',
            'limit': 5,
            'language': 'es'
        }
    }


    async ciudad( lugar = '' ) {

        //peticion http
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            })
            const resp = await instance.get();
            console.log(resp.data)
            return [];
        } catch (error) {
            return [];
        }

        return [];
    }

}

export default Busquedas;