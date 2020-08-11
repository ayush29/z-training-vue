import axios from 'axios'

const API_BASE_URL = "http://localhost:8080"

class AuthService {
    signUp(userDetails)
    {
       return axios.post(`${API_BASE_URL}/user/signup`,userDetails)
    }

    logIn(userCredentials)
    {
       return axios.post(`${API_BASE_URL}/user/login`,userCredentials)
    }

    logOut(userId)
    {
       return axios.put(`${API_BASE_URL}/user/${userId}/logout`);
    }

    // getUserDetails()
    // {

    // }

}

export default new AuthService()