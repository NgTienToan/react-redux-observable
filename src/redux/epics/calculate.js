import { catchError, debounceTime, filter, map, of, mergeMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { setItemsError, setItemsSuccess } from '../slices/services';

export const incrementEpic = (action$) => action$.pipe(
  ofType('calculate/incrementAction'),
  map(x => {
    
  })
);
