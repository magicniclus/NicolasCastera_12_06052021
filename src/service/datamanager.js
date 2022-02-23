import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../data";
import axios from 'axios';

const whatId = 12;
const mockedData = true;

function globalData(){
    if(mockedData){
        let thisUser;
        USER_MAIN_DATA.forEach(user =>{
            if(whatId === user.userId){
                thisUser = user.userInfos.firstName;
            }
        })
        return thisUser;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId
        }).then((res) => {
            return res.data.data.userInfos.firstName;
        }).catch((err) => {
            console.log(err);
        })
    }
}

function userObjectif() {
    if (mockedData) {
        let thisUser;
        USER_MAIN_DATA.forEach(user => {
            if(user.userId === whatId){
                thisUser=user.todayScore;
            }
        })
        return thisUser
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId
        }).then((res) => {
            return res.data.data.todayScore
        }).catch((err) => {
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

function radarGlobalData (){
    if (mockedData) {
        let thisUser = {};
        USER_PERFORMANCE.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user.data;
            }
        });
        return thisUser
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId + '/performance'
        }).then((res) => {
            return res.data.data.data
        }).catch((err) => {
            console.log(err);
        })
    }
}


function radarGlobalKind (){
    if (mockedData) {
        let thisUser = {};
        USER_PERFORMANCE.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user.kind;
            }
        });
        // console.log(thisUser);
        return thisUser;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId + '/performance'
        }).then((res) => res.data.data.kind).catch((err) => {
            console.log(err);
        })
    }
}

export {
    globalData,
    userActivity,
    userAverageSession,
    userObjectif, 
    radarGlobalData,
    radarGlobalKind
}