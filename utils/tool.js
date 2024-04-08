// 提示弹出层
function showToast(title, icon, time) {
  var time = time != "" && time !=undefined ? time : 1500;
  wx.showToast({
    title,
    icon,
    duration: time,
    mask: true
  })
}
/*
  import tool from "../../../utils/tool.js";   //引入
  got_throttle: tool.throttle(function (e) {
    console.log((new Date()).getSeconds())
  }, 1000)

  got_debounce: tool.debounce(function () {
    console.log(111)
  }), 
*/

/*函数节流*/
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 300
  }

  let _lastTime = null
  return function () {
    var that = this;
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.call(that, arguments);
      _lastTime = _nowTime
    }
  }
}

/*函数防抖*/
function debounce(fn, interval) {
  var timer;
  var gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}
/*
使用方法：
onPageScroll: tool.throttle(function(a){
    console.log(a)
  }),
  // 自定义时间
  goUnlock: tool.debounce(function() {
    // ...
  },3000),
*/

module.exports = {
  showToast:showToast,
  throttle,
  debounce 
}