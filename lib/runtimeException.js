/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */
let { StringUtils } = require('./stringUtils');

/**
 * 自定义异常类
 * 
 * @author AnswerALL<answer_ljm@163.com>
 * @template `throw new RuntimeException(99999, "illegal argument exception");`
 * */
class RuntimeException extends Error {
    /**
     * 构造函数
     * 
     * @param _code [number]
     * @param _desc [string]
    */
    constructor(_code, _desc) {
        let messasge = StringUtils.format("code: {}, desc: {}", [_code, _desc]);
        super(messasge);
        this.name = RuntimeException.name;
    }
}

exports = module.exports = {
	RuntimeException: RuntimeException
};