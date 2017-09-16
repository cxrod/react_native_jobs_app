import { AsyncStorage } from 'react-native';

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types.js';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_login');
    if (token) {
        //dispatch action FB is login
    } else {
        // start fb login process
    }
};
