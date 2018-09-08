import initState from '../model/initState';
import task from '../model/task';

const todo = (state = initState, action) =>
{
    switch (action.type)
    {
        case "ADD_TODO":

            state.tasks.todo.push(action.payload);

            console.log("ADD_TODO triggered! state :");
            console.log(state);

            return state;

        case "CHANGE_TASK_STATUS":

            //TEST THIS!!!
            //add to appropriate list
            if (action.payload.completed)
            {
                let taskIndex = state.tasks.completed.indexOf(action.payload);
                state.tasks.completed.splice(action.payload,1);
                state.tasks.todo.push(action.payload);
            }
            else
            {
                let taskIndex = state.tasks.todo.indexOf(action.payload);
                state.tasks.todo.splice(action.payload,1);
                state.task.completed.push(action.payload);
            }

            //switch the payload (task) completed status
            action.payload.completed = (action.payload.completed) ? true: false;

            return state;
        default:
            return state;
    }
};

export default todo;