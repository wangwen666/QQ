
const status = '1000';

const STATUS = {
  CODE: {
    S200: `${status}200`,
    S404: `${status}404`,
    S500: `${status}500`
  },
  MSG: {
    S200: '请求成功',
    S404: '找不到接口',
    S500: '服务器错误'
  }
}

export default STATUS;
