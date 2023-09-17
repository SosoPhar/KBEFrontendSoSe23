const PrivateRoute = ({ isLogin, login, children }) => {
    if(isLogin) {
        return(
            <>
                {children}
            </>
        )
    }
    login();
    return null;
};

export default PrivateRoute;