/**
 * Created by ww on 2018/12/8.
 */

const USER_HOST = '';
const CONTACT_HOST = '';

const API = {
  USER: {
    LOGIN: `${USER_HOST}user/login`
  },
  CONTACT: {
    GET_GROUP:`${CONTACT_HOST}contact/group/get`,
    GROUP_DETAIL: '',
  }
}

export default API;
