import { useCallback, useEffect, useState, useRef } from 'react';
import Keycloak from "keycloak-js";

const client = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT
});
export const useAuth = () => {
    const isRun = useRef(false);
    const [user, setUser] = useState({});
    const [isLogin, setLogin] = useState(false);


    useEffect(() => {
        if (!isLogin) {
            return;
        }

        const fetchUserInfo = async () => {
            try {
                const userProfile = await client.loadUserProfile();
                setUser({ ...userProfile, fullName: `${userProfile.firstName} ${userProfile.lastName}` });
            } catch (err) {
                console.log({ isVisible: true, message: err.message });
            }
        };

        if (client.authenticated) {
            fetchUserInfo();
        }
    }, [isLogin]);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        client
            .init({
                pkceMethod: 'S256',
                redirectUri: process.env.REACT_APP_KEYCLOAK_RIDIRECT_URL,
                checkLoginIframe: false
            })
            .then((res) => {
                setLogin(res);
            });
    }, []);

    return {
        isAuthenticated: !!client.authenticated,
        meta: {
            client,
        },
        token: client.token,
        isLogin,
        client,
        user,
        roles: client.realmAccess,
        logout: useCallback(() => { client.logout(); }, [client]),
        login: useCallback(() => { client.login(); }, [client]),
        register: useCallback(() => { client.register(); }, [client]),
    };
};

export default {useAuth};
