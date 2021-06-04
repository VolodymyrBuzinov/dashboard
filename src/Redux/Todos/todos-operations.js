import axios from "axios";
import todosActions from "./todos-actions";

const fetchTodos = () => async dispatch => {
    dispatch(todosActions.fetchTodoRequest());
    
    try {
        const { data } = await axios.get('/tasks');
        dispatch(todosActions.fetchTodoSuccess(data));
    } catch (error) {
        dispatch(todosActions.fetchTodoError(error.massage));
    }
};

const addTodo = ({ name, number }) => async dispatch => {
    dispatch(todosActions.addTodoRequest());

    try {
        const todo = {name, number};
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
};

export default { fetchTodos, addTodo, deleteTodo};