import axios from "axios";
//import axios from "../../Api/tasks";
import todosActions from "./todosActions";

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';
axios.defaults.headers.common = { 'Authorization': `bearer ${process.env.REACT_APP_TOKEN}` }

const fetchTodos = () => async dispatch => {
    dispatch(todosActions.fetchTodoRequest());
    try {
        const { data } = await axios.get('/tasks');
        dispatch(todosActions.fetchTodoSuccess(data));
    } catch (error) {
        console.log(error.massage);
        dispatch(todosActions.fetchTodoError(error.massage))
    }
};

/*const addTodo = ({ title, time }) => async dispatch => {
    dispatch(todosActions.addTodoRequest());
    try {
        const todo = {title, time};
        const { data } = await axios.post('/tasks', todo);
        dispatch(todosActions.addTodoSuccess(data));
    } catch (error) {
        dispatch(todosActions.addTodoError(error.massage));
    }
};

const deleteTodo = todoId => async dispatch => {
    dispatch(todosActions.deleteTodoRequest());
    try {
       await axios.delete(`/tasks/${todoId}`);
        dispatch(todosActions.deleteTodoSuccess(todoId))
    }  catch (error) {
        dispatch(todosActions.deleteTodoError(error.massage));
    }
};*/

const exp = {
    fetchTodos,
    //addTodo, 
    //deleteTodo
};
export default exp;