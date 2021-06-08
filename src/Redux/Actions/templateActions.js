import { createAction } from '@reduxjs/toolkit';

const createTemplateRequest = createAction('template/createTemplateRequest');
const createTemplateSuccess = createAction('template/createTemplateSuccess');
const createTemplateError = createAction('template/createTemplateError');

const updateTemplateRequest = createAction('template/updateTemplateRequest');
const updateTemplateSuccess = createAction('template/updateTemplateSuccess');
const updateTemplateError = createAction('template/updateTemplateError');

const updateStatusDoneTemplateRequest = createAction(
  'template/updateStatusDoneTemplateRequest',
);
const updateStatusDoneTemplateSuccess = createAction(
  'template/updateStatusDoneTemplateSuccess',
);
const updateStatusDoneTemplateError = createAction(
  'template/updateStatusDoneTemplateError',
);

const clearTemplateError = createAction('template/clearError');

const templateActions = {
  createTemplateRequest,
  createTemplateSuccess,
  createTemplateError,
  updateTemplateRequest,
  updateTemplateSuccess,
  updateTemplateError,
  updateStatusDoneTemplateRequest,
  updateStatusDoneTemplateSuccess,
  updateStatusDoneTemplateError,
  clearTemplateError,
};

export default templateActions;
