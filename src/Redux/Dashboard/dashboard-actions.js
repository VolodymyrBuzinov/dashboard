import { createAction } from '@reduxjs/toolkit'

const fetchDashboardRequest = createAction('dashboards/fetchDashboardRequest');
const fetchDashboardSuccess = createAction('dashboards/fetchDashboardSuccess');
const fetchDashboardError = createAction('dashboards/fetchDashboardError');

const addDashboardRequest = createAction('dashboards/addDashboardRequest');
const addDashboardSuccess = createAction('dashboards/addDashboardSuccess');
const addDashboardError = createAction('dashboards/addDashboardError');

const deleteDashboardRequest = createAction('dashboards/deleteDashboardRequest');
const deleteDashboardSuccess = createAction('dashboards/deleteDashboardSuccess');
const deleteDashboardError = createAction('dashboards/deleteDashboardError');

const changeFilter = createAction('dashboards/changeFilter')

const clearDashboardError = createAction('dashboards/clearError');

export default {
    fetchDashboardRequest,
    fetchDashboardSuccess,
    fetchDashboardError,
    addDashboardRequest,
    addDashboardSuccess,
    addDashboardError,
    deleteDashboardRequest,
    deleteDashboardSuccess,
    deleteDashboardError,
    changeFilter,
    clearDashboardError,
};