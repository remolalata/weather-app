import axios from 'axios';

export const getDate = url => {
    return new Promise((res, rej) => {
        axios.get(url)
            .then(result => {
                res(result);
            })
            .catch(error => {
                rej(error);
            })
    })
}

export const validateObj = obj => {
    if (obj && Object.keys(obj).length) {
        return true;
    }

    return false;
}

export const getFirstElementInArray = array => {
    return array.length ? array[0] : [];
}

export const timeConverter = UNIX_timestamp => {
    let a = new Date(UNIX_timestamp * 1000);
    let year = a.getFullYear();
    let month = a.getMonth().toString.length === 1 ? '0' + a.getMonth() : a.getMonth();
    let date = a.getDate();
    let time = month + '/' + date + '/' + year;
    return time;
  }