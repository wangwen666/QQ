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
  },
  MESSAGE: {
    GET_MESSAGE: `${MESSAGE_HOST}message/getMessage`,
  },
  VIEW: {
    GET_VIEW: `${VIEW_HOST}view/viewList`
  }
}

export default API;
