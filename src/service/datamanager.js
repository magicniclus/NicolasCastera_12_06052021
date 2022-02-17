import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../data";
import axios from 'axios';

const whatId = 12;
const mockedData = true;

function userInformation() {
    if (mockedData) {
        let thisUser = {};
        USER_MAIN_DATA.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user;
            }
        })
        return thisUser.userInfos;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId
        }).then((res) => res.data.data.userInfos).catch((err) => {
            console.log(err);
        })
    }
}

function userObjectif() {
    if (mockedData) {
        let thisUser = {};
        USER_MAIN_DATA.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user;
            }
        })
        return thisUser.todayScore;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId
        }).then((res) => res.data.data.todayScore).catch((err) => {
            console.log(err);
        })
    }
}

function userActivity() {
    if (mockedData) {
        let thisUser = {};
        USER_ACTIVITY.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user
            }
        });
        return thisUser.sessions;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId + '/activity'
        }).then((res) => res.data.data.sessions).catch((err) => {
            console.log(err);
        })
    }
}

function userAverageSession () {
    if (mockedData) {
        let thisUser = {};
        USER_AVERAGE_SESSIONS.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user
            }
        });
        return thisUser.sessions;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId + '/average-sessions'
        }).then((res) => res.data.data.sessions).catch((err) => {
            console.log(err);
        })
    }
}

export {
    userInformation,
    userActivity,
    userAverageSession,
    userObjectif
}