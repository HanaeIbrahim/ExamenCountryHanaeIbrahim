/*class Country {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;

    }
    // Une propriété contenant toutes les réponses possibles pour un pays (ce tableau sera construit dans une méthode décrite plus loin). 
    // Une propriété générée par un getter retournant uniquement le drapeau du pays. 
    // Cette propriété sera utilisée pour vérifier si la réponse de l'utilisateur est correcte.

    get flag() {
        return `https://restcountries.com/data/${this.name.toLowerCase()}.svg`;
    }


    render() {
        const container = document.createElement("div");
        container.classList.add("country");
        container.innerHTML = `
        <img src="${this.flag}" alt="${this.name}" />
        <h2>${this.name}</h2>
        <p>Capital: ${this.capital}</p>
        `;
        return container;
    }
}

export default Country; 

// country.js
class Country {
    flag;
    name;
    #element;


    constructor(flag, name, countryData) {
        this.flag = flag;
        this.name = name;
        this.countryData = countryData;
        this.Responses = this.Responses();
        this.#element = this.#generateElement();
    }

    #generateElement() {

        // div country
        const element = document.createElement('div');
        element.classList.add('country');

        const contenu = `
        <img src="${this.flag}" alt="${this.name}" />
        <h2>${this.name}</h2>
        `;

        element.insertAdjacentHTML("afterbegin", contenu);
        return element;
    }

    render() {
        document.body.appendChild(this.#element);
        flagElement = document.querySelector('#flag');
        flagElement.innerHTML = `<h1>${this.flag}</h1>`;
    }

    Responses() {
        let names = Object.values(this.countryData.translations).map(translation => translation.common.toLowerCase());
        return new Set(names);
    }constructor(flag, name, countryData) {
    this.flag = flag;
    this.name = name;
    this.countryData = countryData;
    this.Responses = this.Responses();
    this.#element = this.#generateElement();
}

#generateElement() {

    // div country
    const element = document.createElement('div');
    element.classList.add('country');

    const contenu = `
    <img src="${this.flag}" alt="${this.name}" />
    <h2>${this.name}</h2>
    `;

    element.insertAdjacentHTML("afterbegin", contenu);
    return element;
}

render() {
    document.body.appendChild(this.#element);
    flagElement = document.querySelector('#flag');
    flagElement.innerHTML = `<h1>${this.flag}</h1>`;
}

Responses() {
    let names = Object.values(this.countryData.translations).map(translation => translation.common.toLowerCase());
    return new Set(names);
}

checkResponse(response) {
    return this.validResponses.has(response.toLowerCase());
}

get flag() {
    return this.countryData.flags[0];

}
*/

class Country {
    #element;
    #validResponses;

    constructor(countryData) {
        this.name = countryData.name.common;
        this.capital = countryData.capital[0];
        this.flag = countryData.flags[0];
        this.#validResponses = this.#generateResponses(countryData);
        this.#element = this.#generateElement();
    }

    #generateElement() {
        const element = document.createElement('div');
        element.classList.add('country');

        const content = `
        <img src="${this.flag}" alt="${this.name}" />
        <h2>${this.name}</h2>
        <p>Capital: ${this.capital}</p>
        `;

        element.insertAdjacentHTML("afterbegin", content);
        return element;
    }

    render() {
        document.querySelector("main").appendChild(this.#element);
    }

    #generateResponses(countryData) {
        const names = Object.values(countryData.translations).map(translation => translation.common.toLowerCase());
        return new Set(names);
    }

    get flag() {
        return `https://restcountries.com/data/${this.name.toLowerCase()}.svg`;
    }

    checkResponse(response) {
        return this.#validResponses.has(response.toLowerCase());
    }
}

export default Country;


/*
render() {
    const container = document.createElement("div");
    container.classList.add("country");
    container.innerHTML = `
    <img src="${this.flag}" alt="${this.name}" />
    <h2>${this.name}</h2>
    <p>Capital: ${this.capital}</p>
    `;
    return container;
}

*/
