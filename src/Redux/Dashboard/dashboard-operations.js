import axios from "axios";
import dashboardsActions from "./phoneBook-actions";

const fetchDashboards = () => async dispatch => {
    dispatch(dashboardsActions.fetchDashboardRequest());
    
    try {
        const { data } = await axios.get('/dashboards');
        dispatch(dashboardsActions.fetchDashboardSuccess(data));
    } catch (error) {
        dispatch(dashboardsActions.fetchDashboardError(error.massage));
    }
};

const addDashboard = ({ name, number }) => async dispatch => {
    dispatch(dashboardsActions.addContactRequest());

    try {
        const dashboard = {name, number};
        const { data } = await axios.post('/dashboards', dashboard);
        dispatch(dashboardsActions.addContactSuccess(data));
    } catch (error) {
        dispatch(dashboardsActions.addContactError(error.massage));
    }
};

const deleteContact = dashboardId => async dispatch => {
    dispatch(dashboardsActions.deleteContactRequest());

    try {
       await axios.delete(`/dashboards/${dashboardId}`);
        dispatch(dashboardsActions.deleteContactSuccess(dashboardId))
    }  catch (error) {
        dispatch(dashboardsActions.deleteContactError(error.massage));
    }
};

export default { fetchContacts, addContact, deleteContact};