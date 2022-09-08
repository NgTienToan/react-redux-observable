import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../../redux/slices/calculate';

function Calculate() {
  const dispatch = useDispatch();

  const { count } = useSelector(
    (state) => state.calculate
  );

  const handleIncrementAction = () => {
    dispatch(incrementCount())
  }

  const handleDecrementAction = () => {
    dispatch(decrementCount())
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrementAction}>increment</button>
      <button onClick={handleDecrementAction}>decrement</button>
    </div>
  )
}

export default Calculate;