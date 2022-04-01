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
