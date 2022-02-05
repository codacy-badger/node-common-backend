import errorFactory from 'error-factory';
import { internal_server_error } from 'common-strings/translations/errors';

export default errorFactory('CodedError', { code: 500, message: internal_server_error });
