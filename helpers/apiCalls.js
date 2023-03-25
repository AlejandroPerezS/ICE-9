exports.getSWAPI = (url) => {
	// var url = baseUrl + "/" + route;
	// const url = 'https://swapi.dev/api/planets/?page=1';
	// const url = 'https://swapi.dev/api/planets/1/';

	return fetch(url, {
		headers: {
			'content-type': 'application/json'
		}
	})
		.then((res) => {
			// console.log(res);
			return res.json();
		})
		.then((data) => {
			// console.log('in second then');
			// console.log(data);
			return data;
		})
		.catch((error) => {
			console.log('Fetch error');
			console.log(error);
		});
};

exports.getAvatarAPI = (aName, profile) => {
	let avatarId = aName;
	fetch('https://api.multiavatar.com/' + JSON.stringify(avatarId))
		.then((res) => res.text())
		.then((svg) => {
			let parser = new DOMParser();
			let doc = parser.parseFromString(svg, 'text/html');
			return doc.body;
		});
};
