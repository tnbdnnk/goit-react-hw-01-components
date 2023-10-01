import PropTypes from 'prop-types';
// import clsx from 'clsx';

export default function FriendList({ friends }) {
    return (
        <ul>
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
        <li>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48"/>
            <p>{name}</p>
        </li>
    )
}

FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}