export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (! res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url} Received ${res.status}`);
        }

        return await res.json();
    };

    getAllPeople = async () => {
        const response = await this.getResource(`/people`);
        return response.results.map(this._transformPerson).slice(0, 5);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const response = await this.getResource(`/planets`);
        return response.results.map(this._transformPlanet).slice(0, 5);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarShips = async () => {
        const response = await this.getResource(`/starships/`);
        return response.results.map(this._transformStarShip).slice(0, 5);
    };

    getStarShip = async (id) => {
        const starShip = await this.getResource(`/starships/${id}/`);
        return this._transformStarShip(starShip);
    };

    _extractId = (item) => {
        const idRegExp = /\/(\d+)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarShip = (starShip) => {
        return {
            id: this._extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            costInCredits: starShip.costInCredits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };
}
