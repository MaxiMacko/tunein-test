import styles from './Tag.module.css'
import cx from 'classnames'

const Tag = props => {
    const isLarge = props.size === 'large'


    return (
        <div className={cx(styles.root, { [styles.large]: isLarge })}>
            {props.label}
        </div>
    )
}

export default Tag