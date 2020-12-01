/* eslint-disable @typescript-eslint/no-var-requires */
const { sucesResp } = require('../baseResp');
/* eslint-enable */

module.exports = () => {
    return sucesResp({
        'string|1-10': '★',
        expired: true,
        totalDay: 180,
        day: 111
    });
};
