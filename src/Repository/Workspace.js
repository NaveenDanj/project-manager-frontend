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

// update workspace data
export const updateWorkspace = (data , id) => {
    return service({
        url: `/api/workspace/${id}`,
        method: "put",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        data
    });
}

//get workspace data
export const getWorkspace = () => {
    return service({
        url: `/api/workspace/get/${localStorage.getItem("current_workspace")}`,
        method: "get",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });
}