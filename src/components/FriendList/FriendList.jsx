import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(item => (
                <FriendItem
                    key={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

function FriendItem({ name, avatar, isOnline}) {
    return (
        <li className={css.item}>
            <span className={clsx(css.status, isOnline ? css.isOnline : css.isOfline)}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}