const websocket = (url, protocel) => {

  let ws;

  if(window.WebSocket){
    // 初始化一个websocket
    ws = new WebSocket(url, protocel);
    return ws;
  } else {
    window.alert('您的浏览器不支持websocket协议')
  }

}

// let ws;
// const url = "ws://172.18.37.197:8081/ws";
// const url1 = "ws://127.0.0.1:8081/ws";
//
// if (window.WebSocket) {
//   ws = new WebSocket(url1);
// } else {
//   window.alert('您的浏览器不支持websocket协议')
// }

export default websocket;
