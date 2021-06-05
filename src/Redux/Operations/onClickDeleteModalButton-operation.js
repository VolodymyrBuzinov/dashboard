const removeTaskCard = cardId => dispatch => {
    dispatch(deleteTaskRequest());

    axios
        .delete(`/tasks/${cardId}`)
        .then(() => dispatch(removeContactSuccess(contactId)))
        .catch(error => dispatch(removeContactError(error.message)))
}