import service from "../API";


// get all projects
export const getProjects = () => {
    return service({
        url: `/api/project/${localStorage.getItem("current_workspace")}`,
        method: "get",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });
}