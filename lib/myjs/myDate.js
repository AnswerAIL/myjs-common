/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

/**
  * MyDate 数据类型
  * 
  * @author AnswerALL<answer_ljm@163.com>
  * @description Created At 2019-9-20 11:38:47
  * @extends Date
 */
let { DATE_PROP_TYPE, DATE_ENUM } = require('../constant');

class MyDate extends Date {

    /**
     * 构造函数
    */
    constructor(date = new Date()) {
        super(date);
    }

    /**
     * 获取当前日期时间前后`amount` 年/月/日(默认)/时/分/秒/毫秒
     * 
     * @param amount [int]
     * @param prop [string] -[DATE_PROP_TYPE.XXX]
     * @returns date [MyDate]
    */
    add(amount, prop = DATE_PROP_TYPE.DAY) {
        amount = isNaN(parseInt(amount)) ? 0 : amount;
        prop = (DATE_PROP_TYPE[prop] == undefined) ? DATE_PROP_TYPE.DAY : prop;
        
        switch (prop) {
            case DATE_PROP_TYPE.YEAR:
                this.setFullYear(this.getFullYear() + amount);
                break;
            case DATE_PROP_TYPE.MONTH:
                this.setMonth(this.getMonth() + 1 + amount);
                break;
            case DATE_PROP_TYPE.DAY:
                this.setDate(this.getDate() + amount);
                break;
            case DATE_PROP_TYPE.HOUR:
                this.setHours(this.getHours() + amount);
                break;
            case DATE_PROP_TYPE.MINUTE:
                this.setMinutes(this.getMinutes() + amount);
                break;
            case DATE_PROP_TYPE.SECONDS:
                this.setSeconds(this.getSeconds() + amount);
                break;
            case DATE_PROP_TYPE.MILLISECONDS:
                this.setMilliseconds(this.getMilliseconds() + amount);
                break;
            default:
                return null;
        }
        return this;
    }


    /**
     * 获取当前日期和`date`的时间差值, 默认天数`DATE_ENUM.DAY`
     * 
     * @param date [Date]
     * @param prop [number] -[DATE_ENUM.XXX]
     * @returns diff value[int] | [undefined] | [null]
    */
    diff(date, prop = DATE_ENUM.DAY) {
        // 日期格式错误
        if (isNaN(date.getFullYear())) {
            return undefined;
        }

        let property;
        for (let key in DATE_ENUM) {
            if (DATE_ENUM[key] == prop) {
                property = DATE_ENUM[key];
                break;
            }
        }
        property = (property === undefined) ? DATE_ENUM.DAY : property;

        let rlt = parseInt((this.getTime() - date.getTime()) / property);
        return isNaN(rlt) ? null : rlt;
    }


    /**
     * 判断当前日期是否在指定日期`date`之前
     * 
     * @param date [Date]
     * @returns rlt [boolean] | [undefined]
    */
    prev(date) {
        // 日期格式错误
        if (isNaN(date.getFullYear())) {
            return undefined;
        }

        return this.getTime() - date.getTime() < 0;
    }

    /**
     * 判断当前日期是否在指定日期`date`之后
     * 
     * @param date [Date]
     * @returns rlt [boolean] | [undefined]
    */
    after(date) {
        // 日期格式错误
        if (isNaN(date.getFullYear())) {
            return undefined;
        }

        return this.getTime() - date.getTime() > 0;
    }

 }

 /**
  * 日期格式化
  * 
  * @param pattern [string] -[DATE_FORMATTER.XXX]
  * @returns [string]
 */
 MyDate.prototype.format = function(pattern) {
  // 正则匹配表达式
  let exps = {
      // year(yy | yyyy)
      "(y+)": {							
          key: "year",
          value: this.getFullYear(),
          minLength: 2,
          maxLength: 4
      },
      // month(MM) range: 0-11
      "(M+)": {						
          key: "month",
          value: this.getMonth() + 1,
          minLength: 1,
          maxLength: 2
      },
      // date(dd)
      "(d+)": {						
          key: "date",
          value: this.getDate(),
          minLength: 1,
          maxLength: 2
      },
      // hour(HH)
      "(H+)": {						
          key: "hours",
          value: this.getHours(),
          minLength: 1,
          maxLength: 2
      },
      // minutes(mm)
      "(m+)": {						
          key: "minutes",
          value: this.getMinutes(),
          minLength: 1,
          maxLength: 2
      },
      // seconds(ss)
      "(s+)": {						
          key: "seconds",
          value: this.getSeconds(),
          minLength: 1,
          maxLength: 2
      },
      // milliseconds(S)
      "(S+)": {						
          key: "milliseconds",
          value: this.getMilliseconds(),
          minLength: 1,
          maxLength: 1
      }
  };

  for (let exp in exps) {
      if (new RegExp(exp).test(pattern)) {
          if (RegExp.$1.length < exps[exp].minLength || RegExp.$1.length > exps[exp].maxLength) {
              throw new Error(exps[exp].key + "'s length(" + RegExp.$1 + ") is error, The range is between " + exps[exp].minLength + " and " + exps[exp].maxLength + ".");
          }
          if (exp == "(y+)") {	
              pattern = pattern.replace(RegExp.$1, exps[exp].value.toString().substr(4 - RegExp.$1.length));
          } else {
              pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? exps[exp].value : ("00" + exps[exp].value).substr(exps[exp].value.toString().length));
          }
      }
  }
  return pattern;
};

exports = module.exports = {
	MyDate
};