import service from "../API";

// login axios repository function
export const login = (data) => {
    return service({
        url: "/login",
        method: "post",
        data
    });
};

// register axios repository function
export const register = (data) => {
    return service({
        url: "/register",
        method: "post",
        data
    });
};
