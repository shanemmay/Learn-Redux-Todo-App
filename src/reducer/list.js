import initState from '../model/initState';

const list = (state = initState, action) =>
{
    switch(action.type)
    {
        case "SHOW_TODO":
            //set visibility to TODO
            state.visibility = "TODO";
            return state;
        case "SHOW_COMPLETED":
            //set visibility to COMPLETED
            state.visibility = "COMPLETED";
            return state;
        case "SHOW_ALL":
            //set visibility to ALL
            state.visibility = "ALL";
            return state;
        default:
            return state;
    }
};

export default list;