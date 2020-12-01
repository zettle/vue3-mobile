/* eslint-disable @typescript-eslint/no-var-requires */
const { sucesResp } = require('../baseResp');
/* eslint-enable */

module.exports = () => {
    return sucesResp([
        { code: '001', name: 'A系统' },
        { code: '002', name: 'B系统' },
        { code: '003', name: 'C系统' }
    ]);
};
