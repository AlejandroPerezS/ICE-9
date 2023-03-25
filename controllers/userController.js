// for home
const multiavatar = require('@multiavatar/multiavatar');
const { getSWAPI, getAvatarAPI } = require('../helpers/apiCalls');

const homeView = (req, res) => {
	const pageTitle = 'Home';
	res.render('home', {
		pageTitle: pageTitle,
		homeContent: homeContent
	});
};

const peopleView = async (req, res) => {
	const people_url = 'https://swapi.dev/api/people/';
	let full_people_data = await getSWAPI(people_url);
	let people_data = full_people_data['results'];
	// console.log(people_data);
	for (person in people_data) {
		let profile = people_data[person];
		let svgCode = multiavatar(profile['name']);
		// console.log(svgCode);
		profile['avatar'] = svgCode;
	}
	res.render('people', {
		people_data: people_data
	});
};

const planetsView = async (req, res) => {
	//make the API call
	const planets_url = 'https://swapi.dev/api/planets/';
	let full_planets_data = await getSWAPI(planets_url);
	// console.log(full_planet_data['results']);
	planets_data = full_planets_data['results'];
	// for (planet in planets_data) {
	// }
	// const {
	// 	name,
	// 	rotation_period,
	// 	orbital_period,
	// 	diameter,
	// 	climate,
	// 	gravity,
	// 	terrain,
	// 	surface_water,
	// 	population,
	// 	residents,
	// 	films,
	// 	created,
	// 	edited,
	// 	url
	// } = planet_data;
	// console.log(url);
	// for (link in url) {
	// 	// console.log(link);
	// }
	res.render('planets', {
		planets_data: planets_data
		// name: name,
		// rotation_period: rotation_period,
		// orbital_period: orbital_period,
		// diameter: diameter,
		// climate: climate,
		// gravity: gravity,
		// terrain: terrain,
		// surface_water: surface_water,
		// population: population,
		// residents: residents,
		// films: films,
		// created: created,
		// edited: edited,
		// url: url
	});
};

module.exports = {
	homeView,
	planetsView,
	peopleView
};
