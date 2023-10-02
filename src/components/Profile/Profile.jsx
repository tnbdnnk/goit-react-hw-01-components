import PropTypes from 'prop-types';
import css from './Profile.module.css'

export default function Profile({ avatar, username, tag, location, stats }) {

	return (
		<div className={css.profile}>
		<div className={css.description}>
		<img
			src={avatar}
			alt={username}
			className={css.avatar}
		/>
		<p className={css.name}>{username}</p>
		<p className={css.tag}>@{tag}</p>
		<p className={css.location}>{location}</p>
		</div>

		<ul className={css.stats}>
			<StatListProfile stats={stats}/>
		</ul>
	</div> ) 
}

Profile.prototype = {
		avatar: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		stats: PropTypes.object.isRequired,
}

function StatListProfile({stats}) {
	const itemsStats = [];
	for (const key in stats) {
		itemsStats.push(
			<li key={key}>
				<span className=''>{key}</span>
				<span className=''>{stats[key]}</span>
			</li>
		)
	}
	return itemsStats;
}
StatListProfile.propTypes = {
	stats: PropTypes.objectOf(PropTypes.number).isRequired,
}


// export default function Profile({ user }) {
// 	const { 
// 		avatar, 
// 		username, 
// 		tag, 
// 		location, 
// 		stats: {followers, views, likes},
// 	} = user;
// 	return (
// 		<div class="profile">
// 		<div class="description">
// 		<img
// 			src={avatar}
// 			alt={username}
// 			class="avatar"
// 		/>
// 		<p class="name">{username}</p>
// 		<p class="tag">@{tag}</p>
// 		<p class="location">{location}</p>
// 		</div>

// 		<ul class="stats">
// 		<li>
// 			<span class="label">Followers: </span>
// 			<span class="quantity">{followers}</span>
// 		</li>
// 		<li>
// 			<span class="label">Views: </span>
// 			<span class="quantity">{views}</span>
// 		</li>
// 		<li>
// 			<span class="label">Likes: </span>
// 			<span class="quantity">{likes}</span>
// 		</li>
// 		</ul>
// 	</div> ) 
// }

// Profile.prototype = {
// 	user: PropTypes.shape({
// 		avatar: PropTypes.string.isRequired,
// 		username: PropTypes.string.isRequired,
// 		tag: PropTypes.string.isRequired,
// 		location: PropTypes.string.isRequired,
// 		stats: PropTypes.shape({
// 			followers: PropTypes.number.isRequired,
// 			views: PropTypes.number.isRequired,
// 			likes: PropTypes.number.isRequired,
// 		}).isRequired,
// 	}).isRequired,
// }

// { <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div> }