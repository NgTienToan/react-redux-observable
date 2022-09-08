import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search';
import calculateReducer from './slices/calculate';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic, searchSkillsEpic } from './epics/search';

const epic = combineEpics(
  changeSearchEpic,
  searchSkillsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
    calculate: calculateReducer

  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);

export default store;
