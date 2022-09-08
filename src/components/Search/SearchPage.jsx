import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../../redux/slices/search';
import Items from './Items';

function SearchPage() {
  const { items, loading, error, search } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  function handleChange(evt) {
    dispatch(changeSearch(evt.target.value));
  }

  return (
    <div className='wrap'>
      <input type='text' id='search' onChange={handleChange} />
      {search === '' ? (
        <div>Type something to search...</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{msg}</div>
      ) : (
        <Items items={items} />
      )}
    </div>
  );
}

export default SearchPage;
