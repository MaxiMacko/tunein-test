import {createAction, createReducer} from "@reduxjs/toolkit";
const PREFIX = 'FETCH_DATA'

export const fetchStartAction = createAction(`${PREFIX}/REQUEST`)
export const fetchFailedAction = createAction(`${PREFIX}/FAILURE`)
export const fetchSucceededAction = createAction(`${PREFIX}/SUCCESS`)


const initialState = {
    loading: true,
    error: null,
}

export const reducer = createReducer(initialState, {
    [fetchStartAction]: state => {
        return {
            ...state,
            loading: true
        }
    },
    [fetchSucceededAction]: (state, action) => {
        return {
            ...state,
            ...action.payload,
            loading: false
        }
    },
    [fetchFailedAction]: (state, action) => {
        return {
            ...state,
            ...action.payload,
            loading: false
        }
    },
})