/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

 /**
  * MyString 数据类型
  * 
  * @author AnswerALL<answer_ljm@163.com>
  * @description Created At 2019-9-22 19:29:01
  * @extends String
 */
class MyString extends String {

    /**
     * 构造函数
    */
    constructor(str) {
        super(str);
        this._string = str.toString();
    }


    /**
     * 字符串个数不足`length`时左补`padStr`
     * @param padStr [string]
     * @param length [int]
     * @returns rlt [string]
    */
    lpad(padStr, length) {
        let rlt = this._string;
        let _len = length - this.length;
        if (_len <= 0) {
            return rlt;
        }
        for (let i = 0; i < _len; i++) {
            rlt = padStr + rlt;
        }
        return rlt;
    }


    /**
     * 字符串个数不足`length`时右补`padStr`
     * @param padStr [string]
     * @param length [int]
     * @returns rlt [string]
    */
    rpad(padStr, length) {
        let rlt = this._string;
        let _len = length - this.length;
        if (_len <= 0) {
            return rlt;
        }
        for (let i = 0; i < _len; i++) {
            rlt +=padStr;
        }
        return rlt;
    }

    /**
     * 格式化字符串, 对字符串内的所有{}格式化为`args`
     * 
     * @param args (string)[]
     * @returns rlt [string]
    */
    format(args) {
        if (args == undefined) {
            return this._string;
        }
        let text = this._string, i = 0;
        return text.replace(/{ *}/g, function(match, index, src) {
            let val = args[i++];
            val = (val == undefined) ? null : val;
            return val;
        });
    }

    /**
     * 对象值是否包含`searchString`
     * 
     * @param searchString [string]
     * @returns boolean
    */
    contains(searchString) {
        return this.indexOf(searchString) != -1;
    }

    /**
     * 把对象值中的 `substr` 全部替换为 `replacement`
     * 
     * @param substr [string]
     * @param replacement [string]
     * @returns rlt [string]
    */
    replaceAll(substr, replacement) {
        let text = this._string;
        // return text.replace(new RegExp(s, 'g'), r);
        return text.replace(eval("/" + substr + "/g"), replacement);
    }

    /**
     * 对象值是否以`searchString`开头
     * 
     * @param searchString [string]
     * @returns boolean
    */
    startWith(searchString) {
        return searchString == this.charAt(0);
    }

    /**
     * 对象值是否以`searchString`结尾
     * 
     * @param searchString [string]
     * @returns boolean
    */
    endWith(searchString) {
        return searchString == this.charAt(this.length - 1);
    }

    /**
     * 往对象值后追加`str`
     * 
     * @param str [string]
     * @returns new MyString
    */
    append(str) {
        return new MyString(this._string + str);
    }

    /**
     * 往对象值前追加`str`
     * 
     * @param str [string]
     * @returns new MyString
    */
    preppend(str) {
        return new MyString(str + this._string);
    }
}

exports = module.exports = {
	MyString
};