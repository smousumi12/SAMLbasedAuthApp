import { AuthenticationContext} from 'react-adal';

export const adalConfig ={
    tenant : 'personalDemo001.onmicrosoft.com',
    clientId : '166e3814-f475-471a-89f4-09aa0647a2ed',

    redirectUri :'http://localhost:3000/admin',
    endpoints:{
        api :'http://localhost:3000/admin'
    },
    cacheLocation:'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);