import task from '../model/task';

/*export const addTodo = (payload) =>
    {
        return (
            {
                type: "ADD_TODO",
                payload: payload
            }
        );
    };*/
    export const addTodo =
        {

            type: "ADD_TODO",
            payload: {}

        };

export const changeTaskStatus =
    {
        type:"CHANGE_TASK_STATUS",
        payload:
            {
                text: "",
                completed: false
            }
    };

export const showTodo =
    {
        type:"SHOW_TODO"
    };

export const showCompleted =
    {
        type:"SHOW_COMPLETED"
    };

export const showAll =
    {
        type:"SHOW_ALL"
    };