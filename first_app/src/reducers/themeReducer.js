const themeReducer = (state, action) => {

    switch (action.type) {
        case "toggle":
            return state === "light" ? "dark" : "light";
        default:
            throw new Error("Unknown action");
    }
};

export default themeReducer;