
/**
 * String 的endWith函数
 */
String.prototype.endWith=function(str){     
  var reg=new RegExp(str+"$");     
  return reg.test(this);        
}
/**
 * 日期格式化
 * @param {[type]} fmt [description]
 */
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//获取年月的最后一天
function getLastDayOfYearMonth(year, month) {
    var jsMonth = month - 1;
    var nextMonth = jsMonth + 1;
    var nextMonthFirstDay = new Date(year, nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
}
/**/

/**/
// //数据格式化start
function getFormatData(children) {

    var value = new Array();
    // value[0] = [new Date(children[0].date),
    // {value:children[0].value,symbol:'emptyHeart',symbolSize:10},true];
    for (var i = 0; i < children.length; i++) {
        if (children[i].flag == 1) {
            value[i] = [new Date(children[i].date), children[i].value,
                true];
        } else {
            value[i] = [new Date(children[i].date), children[i].value];
        }
    }
    return value;
}