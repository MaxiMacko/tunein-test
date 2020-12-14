import {useSelector} from "react-redux";
import {getMappedByIdData, getState} from "../../core/selectors";
import {useDataFetch} from "../../hooks/useDataFetch";
import styles from './StationDetails.module.css'
import Tag from "../Tag/Tag";
import StarRatings from "react-star-ratings";

const PIC_SIZE = '150px'

const StationDetails = props => {
    useDataFetch()
    const id = props.match.params.id
    const state = useSelector(getState)
    const mappedData = useSelector(getMappedByIdData)
    if(state.loading) {
        return (
            <div className={styles.root}>Loading...</div>
        )
    }

    if (!mappedData) {
        return null
    }

    const stationData = mappedData[id]
    const {
            description,
            imgUrl,
            name,
            popularity,
            reliability,
            tags,
            streamUrl,
    } = stationData

    return (
        <div className={styles.root}>
            <div className={styles.name}>{name}</div>
            <div className={styles.pic}>
                <img src={imgUrl} width={PIC_SIZE} height={PIC_SIZE}/>
            </div>
            <div>
                <audio autoPlay={true} src={streamUrl} controls={true}/>
            </div>
            <div className={styles.description}>
                {description}
            </div>
            <div className={styles.ratings}>
                <div>
                    <span className={styles.ratingTitle}>Popularity:</span>
                    <div className={styles.stars}>
                        <StarRatings
                            rating={popularity}
                            starDimension="15px"
                            starSpacing="4px"
                        />
                    </div>
                </div>
                <div>
                    <span className={styles.ratingTitle}>Reliability:</span>
                    <div className={styles.stars}>
                        <StarRatings
                            rating={reliability}
                            starDimension="15px"
                            starSpacing="4px"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.tags}>
                {
                    tags.map((tag, index) => (
                        <Tag size="large" label={tag} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default StationDetails