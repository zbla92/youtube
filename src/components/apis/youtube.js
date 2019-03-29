import axios from 'axios';

const KEY = 'AIzaSyAgjmrbq1AbxgikPKrzSP4dBFkpFdecbqc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})