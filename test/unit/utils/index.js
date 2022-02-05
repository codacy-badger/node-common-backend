import { createHmac } from 'crypto';
import { equal } from 'assert/strict';

import { hashPassword, getSalt } from '../../../lib/utils/index.js';
import { afterEachTest, beforeEachTest } from "../../lib/mock.js";

describe('utils', () => {

    beforeEach(async() => {
        await beforeEachTest();
    });

    afterEach(async() => {
        await afterEachTest();
    });

    describe('getSalt', () => {
        it('should create an sha256 hash of our secret using the provided password as a salt', () => {
            const expected = createHmac('sha256', 'password').update('secret').digest('hex');
            const actual = getSalt('password', 'secret');
            equal(actual, expected);
        });
    });

    describe('hashPassword', () => {
        it('should create an sha256 hash of the provided password using the provided salt', () => {
            const expected = createHmac('sha256', 'salt').update('password').digest('hex');
            const actual = hashPassword('password', 'salt');
            equal(actual, expected);
        });
    });
});
