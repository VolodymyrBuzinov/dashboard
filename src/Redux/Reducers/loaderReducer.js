import { createReducer } from '@reduxjs/toolkit';
import { hideSpinner, showSpinner } from '../Actions/loaderAction';

const loader = createReducer(true, {
  [showSpinner]: () => true,
  [hideSpinner]: () => false,
});

export default loader;
