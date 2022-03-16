
import {createStore} from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = " ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const addToDo = (text) =>{
  return{
    type:  ADD_TODO ,
    text
  }
};
const deleteToDo = id => {
  return {
    type : DELETE_TODO,
    id

  }
}

const reducer = (state=[],action) =>{
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id : Date.now()},...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);

    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(()=> console.log(store.getState()));


const paintToDos = () =>{
  const toDos = store.getState();
  ul.innerHTML="";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click",dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);

  });
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) =>{
  store.dispatch(addToDo(text));
};
const dispatchDeleteTodo = e =>{
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));

};

const onSubmit =(e)=> {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit",onSubmit);


/* COUNTER
import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";
const countModifier = (count = 0,action) =>{
 switch(action.type){
   case ADD:
     return count +1;
    case MINUS :
      return count -1;
    default:
      return count;
 }
};

const countStore = createStore(countModifier);
const onChange = () =>{
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);


const handleAdd = () =>{
  countStore.dispatch({type: ADD });
}
const handleMinus = () =>{
  countStore.dispatch({type: MINUS });
}
add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);
*/