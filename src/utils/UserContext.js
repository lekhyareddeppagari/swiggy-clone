import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "defualt user",
})

export default UserContext;