import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as action from '../action';

import {addTodo} from "../action";

//this is used to get the text from the input to create a new task
let text = "";

class AddTodo extends Component
{
    render()
    {
        return(
            <div>
                <input type="text"  id="taskText" onChange={ () => { text = document.querySelector("#taskText").value;}   }/>
                <button onClick={this.props.addTodo}>+</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
{
  return (
      {
          addTodo: () =>
          {
              //console.log(`making action with text: ${text}`);
              addTodo.payload = {text:text, completed:false};
              dispatch(addTodo);
          }
      }
  );
};

export default connect(null, mapDispatchToProps)(AddTodo);