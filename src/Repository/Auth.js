import service from "../API";

// login axios repository function
export const login = (data) => {
    return service({
        url: "/api/auth/login",
        method: "post",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },

        data
    });
};

// register axios repository function
export const register = (data) => {
    return service({
        url: "/api/auth/register",
        method: "post",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        data
    });
};


//get logged in user
export const getUser = () => {

    console.log('the user is : ' , localStorage.getItem('token'));

    return service({
        url: "/api/auth/me",
        method: "get",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });
}