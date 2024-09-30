

import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';


export const useStoreHook = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  return { state, dispatch };
};
