import service from "../API";

// add new workspace axios repository function
export const addWorkspace = (data) => {
    return service({
        url: "/api/workspace",
        method: "post",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        data
    });
}
