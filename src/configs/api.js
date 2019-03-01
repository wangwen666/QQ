/**
 * Created by ww on 2018/12/8.
 */

const USER_HOST = '';
const CONTACT_HOST = '';
const MESSAGE_HOST = '';
const VIEW_HOST = '';

const API = {
  USER:{
    LOGIN:`${USER_HOST}user/login`,
    REGISTER: `${USER_HOST}user/register`,
    FIND_PASSWORD: `${USER_HOST}user/findPassword`,
    GET_INFO: `${USER_HOST}user/info`
  },
  CONTACT: {
    GET_GROUP:`${CONTACT_HOST}contact/getGroup`,
    GROUP_DETAIL: `${CONTACT_HOST}contact/getGroupDetail`,

    GET_QUN: `${CONTACT_HOST}contact/getQun`,
    QUN_DETAIL: `${CONTACT_HOST}contact/getQunDetail`,

    GET_DEVICE: `${CONTACT_HOST}contact/getDevice`,
    DEVICE_DETAIL: `${CONTACT_HOST}contact/getDeviceDetail`,

    GET_MAIL_LIST: `${CONTACT_HOST}contact/getMailList`,
    MAIL_LIST_DETAIL: `${CONTACT_HOST}contact/getMailListDetail`,

    GET_PUBLIC: `${CONTACT_HOST}contact/getPublic`,
    PUBLIC_DETAIL: `${CONTACT_HOST}contact/publicDetail`

  },
  MESSAGE: {
    GET_MESSAGE: `${MESSAGE_HOST}message/getMessage`,
    SEARCH_PEOPLE: `${MESSAGE_HOST}message/searchPeople`


  },
  VIEW: {
    GET_VIEW: `${VIEW_HOST}view/viewList`
  }
}

export default API;
