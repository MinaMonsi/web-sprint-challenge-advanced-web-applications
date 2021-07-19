import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
    .get('/colorlist') //happy path
    .then(res => res) //return response
    .catch(err => err); //sad path
}

export default fetchColorService;