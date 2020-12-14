import Station from "../Station/Station";
import styles from './StationsWrapper.module.css'
import {useSelector} from "react-redux";
import {getState} from "../../core/selectors";
import {useDataFetch} from "../../hooks/useDataFetch";

const StationWrapper = props => {
    useDataFetch()
    const state = useSelector(getState)

    return (
        <div className={styles.root}>
            {
                state.loading && (
                    <div>Loading...</div>
                )
            }
            {
                state.error && (
                    <div>Oops. Something went wrong. The reason is {state.data.error}</div>
                )
            }
            {
                state.data && state.data.map(dataItem => (
                    <Station data={dataItem} key={dataItem.id}/>
                ))
            }
        </div>
    )
}

export default StationWrapper