import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utilits/getRandomHexColor'

export default function Statistics({ title, stats}) {
    return (
        <section>
            {!title ? '' : <h2>{title}</h2>}
            <ul>
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
        <li style={{backgroundColor: getRandomHexColor()}}>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>
    )
}

StatsItem.propTypes ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}