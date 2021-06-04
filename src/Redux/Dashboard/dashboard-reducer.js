import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dashboardsActions } from "../Dashboard";

const items = createReducer([], {
    [dashboardsActions.fetchDashboardSuccess]: (_, { payload }) => payload,
    [dashboardsActions.addDashboardSuccess]: (state, { payload }) => [payload, ...state],

    [dashboardsActions.deleteDashboardSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [dashboardsActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [dashboardsActions.fetchDashboardRequest]: () => true,
    [dashboardsActions.fetchDashboardSuccess]: () => false,
    [dashboardsActions.fetchDashboardError]: () => false,

    [dashboardsActions.addDashboardRequest]: () => true,
    [dashboardsActions.addDashboardSuccess]: () => false,
    [dashboardsActions.addDashboardError]: () => false,
    
    [dashboardsActions.deleteDashboardRequest]: () => true,
    [dashboardsActions.deleteDashboardSuccess]: () => false,
    [dashboardsActions.deleteDashboardError]: () => false,
});

const error = createReducer('', {
    [dashboardsActions.fetchDashboardError]: () => 'Ошибка доcтупа к данным! Авторизируйся!',
    [dashboardsActions.addDashboardError]: () => 'Ошибка добавления контакта!',
    [dashboardsActions.deleteDashboardError]: () => 'Ошибка удаления контакта!',
    [dashboardsActions.clearDashboardError]: () => '',
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});