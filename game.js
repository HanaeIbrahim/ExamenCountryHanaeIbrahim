/* import Country from './country.js';

class Game {
    #score;

    #currentIndex = 0;


    constructor(countries) {
        this.countries = countries;
        this.#score = 0;


        this.currentCountry = new Country(this.countries[this.#currentIndex].name, this.countries[this.#currentIndex].capital);
        this.#currentIndex++;
        this.render();


    }

    get score() {
        return this.#score;
    }
} 

*/
//game.js

import Country from './country.js';

class Game {
    #score = 0;
    constructor(countries) {
        this.countries = countries;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.currentCountry.displayFlag();
    }

    get score() {
        return this.#score;
    }

    addPoint() {
        this.#score++;
    }

    isGameOver() {
        return this.countryIndex >= this.countries.length;
    }

    nextCountry() {
        if (this.isGameOver()) {
            return;
        }

        this.countryIndex++;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.currentCountry.displayFlag();
    }
}

export default Game;