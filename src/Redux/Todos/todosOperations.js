import axios from "axios";
//import axios from "../../Api/tasks";
import todosActions from "./todosActions";

axios.defaults.baseURL = 'https://dashboard-go-it.herokuapp.com/';
// axios.defaults.headers.common = { 'Authorization': `Bearer ${response.data.token}` }

const fetchTodos = () => async dispatch => {
    dispatch(todosActions.fetchTodoRequest());
    try {
        const tasks = await axios.get('/tasks')
            .then(tasks => tasks.data.data);
        
        dispatch(todosActions.fetchTodoSuccess(tasks));
    } catch (error) {
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