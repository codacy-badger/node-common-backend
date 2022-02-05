import getSaltUtil from '../../../../utils/get-salt.js';

export default function getSalt(password) {
    const secret = this.config.get('secrets:salt');
    return getSaltUtil(password, secret);
}
