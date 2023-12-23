import { State, AppDispatch } from '../types/root-state';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;