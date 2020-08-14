import axios from 'axios'

const API_BASE_URL = "http://localhost:8080"

class BookmarkService {
    // signUp(userDetails)
    // {
    //    return axios.post(`${API_BASE_URL}/user/signup`,userDetails)
    // }

    // logIn(userCredentials)
    // {
    //    return axios.post(`${API_BASE_URL}/user/login`,userCredentials)
    // }

    // logOut(userId)
    // {
    //    return axios.put(`${API_BASE_URL}/user/${userId}/logout`);
    // }

    find(userID, restroId)
    {
        return axios.get(`${API_BASE_URL}/user/bookmark/${userID}/${restroId}`)
    }

    add(userID, restroId)
    {
        return axios.put(`${API_BASE_URL}/user/bookmark/${userID}/${restroId}`)
    }

    delete(userID, restroId)
    {
        return axios.delete(`${API_BASE_URL}/user/bookmark/${userID}/${restroId}`)
    }

    // getUserDetails()
    // {

    // }

}

export default new BookmarkService()