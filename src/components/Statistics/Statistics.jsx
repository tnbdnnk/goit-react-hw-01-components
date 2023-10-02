import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utilits/getRandomHexColor';
import css from './Statistics.module.css'

export default function Statistics({ title, stats}) {
    return (
        <section className={css.statistics}>
            {!title ? '' : <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(item => (
                    <StatsItem
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}

function StatsItem({label, percentage}) {
    return (
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    )
}

StatsItem.propTypes ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}