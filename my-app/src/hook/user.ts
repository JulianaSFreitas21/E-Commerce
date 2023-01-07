import { useContext } from 'react';
import {UserContext} from '../context/UserProvider';

export function useUser(){
    const context = useContext(UserContext);
    return context;
}