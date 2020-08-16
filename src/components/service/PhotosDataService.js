import axios from "axios";


const PHOTOS_BASE_URL = "http://localhost:8080";
const PHOTOS_API_URL = `${PHOTOS_BASE_URL}/photos`;

class PhotosDataService {
  retrieveAllPhotos(RESTID, CATEGORY) {
    return axios.get(`${PHOTOS_API_URL}/${RESTID}/${CATEGORY}`);
  }

  retrieveUserDetails(ID) {
    return axios.get(`${PHOTOS_API_URL}/userDetails/${ID}`);
  }

  updateLikesDislikes(ID, BUTTON){
    return axios.get(`${PHOTOS_API_URL}/userLikes/${ID}/${BUTTON}`);
  }

  sendPhoto(DATA, CONFIG) {

    const URL = `${PHOTOS_API_URL}/upload`; 

    return axios.post(
    URL, 
    DATA,
    CONFIG
    );
  }

}

export default new PhotosDataService();
