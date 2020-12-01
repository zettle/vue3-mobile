class Resp {
    constructor (code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}

class ErrResp extends Resp {
    constructor (msg, code = -1) {
        super(code, msg);
    }
}

class SucesResp extends Resp {
    constructor (data, code = 0, msg = '') {
        super(code, msg, data);
    }
}

module.exports = {
    errResp (...args) {
        return new ErrResp(...args);
    },
    sucesResp (...args) {
        return new SucesResp(...args);
    }
};
