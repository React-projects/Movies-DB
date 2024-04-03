import { configureStore  ,applyMiddleware} from "@reduxjs/toolkit";
import { moviesReducer } from "../reducers/moviesReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";



 export const store = configureStore({ reducer: moviesReducer } ,composeWithDevTools(),applyMiddleware(thunk));
