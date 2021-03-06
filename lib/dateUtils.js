/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

 /**
  * 日期工具类
  * 
  * @author AnswerALL<answer_ljm@163.com>
  * @description Created At 2019-9-20 10:50:37
 */
let { DATE_ENUM } = require('./constant');

class DateUtils {
	constructor() { }

	/**
	 * 获取指定日期`date`前后`years`年
	 * 
	 * @param date [Date]
	 * @param years [int]
	 * @returns rlt date
	*/
	static addYears(date, years) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(years))) {
            return null;
		}
		years = parseInt(years);

		return new Date(date.setFullYear(date.getFullYear() + years));
	}

	/**
	 * 获取指定日期`date`前后`months`月
	 * 
	 * @param date [Date]
	 * @param months [int]
	 * @returns rlt date
	*/
	static addMonths(date, months) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(months))) {
            return null;
		}
		months = parseInt(months);
		return new Date(date.setMonth(date.getMonth() + 1 + months));
	}

	/**
	 * 获取指定日期`date`前后`days`天
	 * 
	 * @param date [Date]
	 * @param days [int]
	 * @returns rlt date
	*/
	static addDays(date, days) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(days))) {
            return null;
		}
		days = parseInt(days);
		return new Date(date.setDate(date.getDate() + days));
	}

	/**
	 * 获取指定日期`date`前后`hours`时
	 * 
	 * @param date [Date]
	 * @param hours [int]
	 * @returns rlt date
	*/
	static addHours(date, hours) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(hours))) {
            return null;
		}
		hours = parseInt(hours);
		return new Date(date.setHours(date.getHours() + hours));
	}

	/**
	 * 获取指定日期`date`前后`minutes`分
	 * 
	 * @param date [Date]
	 * @param minutes [int]
	 * @returns rlt date
	*/
	static addMinutes(date, minutes) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(minutes))) {
            return null;
		}
		minutes = parseInt(minutes);
		return new Date(date.setMinutes(date.getMinutes() + minutes));
	}

	/**
	 * 获取指定日期`date`前后`seconds`秒
	 * 
	 * @param date [Date]
	 * @param seconds [int]
	 * @returns rlt date
	*/
	static addSeconds(date, seconds) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		if (!(date instanceof Date) || isNaN(parseInt(seconds))) {
            return null;
		}
		seconds = parseInt(seconds);
		return new Date(date.setSeconds(date.getSeconds() + seconds));
	}

	/**
	 * 获取指定日期`date`前后`milliseconds`毫秒
	 * 
	 * @param date [Date]
	 * @param milliseconds [int]
	 * @returns rlt date
	*/
	static addMilliseconds(date, milliseconds) {
		// 日期格式错误
		if (isNaN(date.getFullYear())) {
			return undefined;
		}
		// 参数类型错误
		if (!(date instanceof Date) || isNaN(parseInt(milliseconds))) {
            return null;
		}
		milliseconds = parseInt(milliseconds);
		return new Date(date.setMilliseconds(date.getMilliseconds() + milliseconds));
	}
}	

/**
 * 判断指定日期`dt1`是否在`dt2`之前
 * 
 * @param dt1 [Date]
 * @param dt2 [Date]
 * @returns boolean | undefined
*/
DateUtils.before = (dt1, dt2) => {
	// 日期格式错误
	if (isNaN(dt1.getFullYear()) || isNaN(dt2.getFullYear())) {
		return undefined;
	}
	return (dt1.getTime() - dt2.getTime()) < 0;
}

/**
 * 判断指定日期`dt1`是否在`dt2`之后
 * 
 * @param dt1 [Date]
 * @param dt2 [Date]
 * @returns boolean | undefined
*/
DateUtils.after = (dt1, dt2) => {
	// 日期格式错误
	if (isNaN(dt1.getFullYear()) || isNaN(dt2.getFullYear())) {
		return undefined;
	}
	return (dt1.getTime() - dt2.getTime()) > 0;
}

/**
 * 获取两个日期`dt1 和 dt2`的时间差值, 默认天数`DATE_ENUM.DAY`
 * 
 * @param dt1 [Date]
 * @param dt2 [Date]
 * @param type [DATE_ENUM]
 * @returns diff value[int] | [undefined] | [null]
*/
DateUtils.diff = (dt1, dt2, type = DATE_ENUM.DAY) => {
	// 日期格式错误
	if (isNaN(dt1.getFullYear()) || isNaN(dt2.getFullYear())) {
		return undefined;
	}
	let rlt = parseInt((dt1.getTime() - dt2.getTime()) / type);
	return isNaN(rlt) ? null : rlt;
}


exports = module.exports = {
	DateUtils: DateUtils
};
