import AuthContex from './AuthContex';

const AuthProvider = ({children}) => {
    const createUser=()=>{
        return
    }
    userInfo={

    }
    return (
        <div>
            <AuthContex>{children}</AuthContex>
        </div>
    );
};

export default AuthProvider;