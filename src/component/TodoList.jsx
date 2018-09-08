import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../action';

class TodoList extends Component
{
    render()
    {
        console.log('todo list props');
        console.log(this.props.taskList);
        return (
            <div>
                <ul>
                {
                    //populating the todo list
                    this.props.taskList.map( (task) =>
                    {
                        //striking element if completed, and if not, then not
                       if(task.completed)
                       {
                           return(
                               <li>
                                   <strike>{task.text}</strike>
                               </li>
                           );
                       }

                       return(
                           <li>{task.text}</li>
                       );
                    } )
                }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>
{
    console.log("state in todolist:");
    console.log(state);
    return(
        {
            taskList:  state.list.tasks.todo.concat( state.list.tasks.completed )
        }
    );
};

export default connect(mapStateToProps,null)(TodoList);