import { error_creating_user } from 'common-strings/translations/errors';

import { CodedError } from '../../utils/index.js';

export default async function register({ email, password }) {
    const userExists = await this.models.user.checkExistence(email);
    if (userExists) {
        throw CodedError(400, error_creating_user);
    }

    return this.models.user.create({ email, password });
}
