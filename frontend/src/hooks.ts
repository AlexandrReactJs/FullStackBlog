import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState, AppDispatch} from './Redux/store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;