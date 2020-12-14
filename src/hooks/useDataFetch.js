import {fetchFailedAction, fetchStartAction, fetchSucceededAction} from "../core/reducer";
import {stationsEndpoint} from "../utils/utils";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const useDataFetch = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStartAction())
        fetch(stationsEndpoint)
            .then(response => response.json())
            .then(data => dispatch(fetchSucceededAction(data)))
            .catch(error => dispatch(fetchFailedAction(error)))
    }, [dispatch])
}