import StarRatings from 'react-star-ratings';
import styles from './Station.module.css'
import Tag from "../Tag/Tag";
import {useHistory} from "react-router";

const PIC_SIZE = '100px'

const Station = props => {
    const {
        data: {
            imgUrl,
            name,
            popularity,
            tags,
            id,
        },
    } = props

    const history = useHistory();

    const handleStationClick = () => {
        history.push(`/stations/${id}`)
    }

    return (
        <div className={styles.root} onClick={handleStationClick}>
            <div className={styles.name}>{name}</div>
            <div className={styles.pic}>
                <img alt="Station Pic" src={imgUrl} width={PIC_SIZE} height={PIC_SIZE}/>
            </div>
            <div className={styles.rating}>
                <span className={styles.ratingTitle}>Popularity:</span>
                <div className={styles.stars}>
                    <StarRatings
                        rating={popularity}
                        starDimension="15px"
                        starSpacing="4px"
                    />
                </div>
            </div>
            <div className={styles.tags}>
                {
                    tags.map((tag, index) => (
                        <Tag key={index} label={tag}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Station