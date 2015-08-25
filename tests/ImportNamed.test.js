import                       './test-utils/Bootstrap';
import {Authentication} from './test-utils/exports/Named';

describe('Mocktail: Import Named', () => {

    it('Should be able to import the named stub object;', () => {
        expect(Authentication.name).toEqual('AuthenticationMock');
    });

});
