import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../data";
import axios from 'axios';

const whatId = parseInt(window.location.href.split("/")[4]);

/**
 * validate if we recover the data by axios or in the internal data
 *
 * @var {boolean}
 */
const mockedData = false;

/**
 * global recovery of user firstName data
 *
 * @return  {Object} 
 */
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

/**
 * return the id of the user and add it to the url data
 *
 * @return  {Object} 
 */
function globalKeyData(){
    if(mockedData){
        let thisUser;
        USER_MAIN_DATA.forEach(user =>{
            if(whatId === user.userId){
                thisUser = user.keyData;
            }
        })
        return thisUser;
    } else {
        return axios({
            method: 'get',
            url: 'http://localhost:3000/user/' + whatId
        }).then((res) => {
            return res.data.data.keyData;
        }).catch((err) => {
            console.log(err);
        })
    }
}


/**
 * retourn the users objectif data
 *
 * @return  {Object}
 */
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

/**
 * return the userActivity data
 *
 * @return  {Object}
 */
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

/**
 * return the user average session data
 *
 * @return  {Object}  
 */
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

/**
 * return user performence data
 *
 * @return  {Object}  [return description]
 */
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

/**
 * return user performence data
 *
 * @return  {Object} 
 */
function radarGlobalKind (){
    if (mockedData) {
        let thisUser = {};
        USER_PERFORMANCE.forEach(user => {
            if (user.userId === whatId) {
                thisUser = user.kind;
            }
        });
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
    globalKeyData,
    userActivity,
    userAverageSession,
    userObjectif, 
    radarGlobalData,
    radarGlobalKind
}