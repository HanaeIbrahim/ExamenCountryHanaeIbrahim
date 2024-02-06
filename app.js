
import Country from "./country.js";
import Game from "./Game.js";
//import shuffle from "./node_modules/lodash-es/shuffle.js";
//import { shuffle } from "lodash";

const tableauCountry = [];



const getCountry = () => {

    const countries = fetch("https://restcountries.com/v3.1/all").then((resutlat) => resutlat.json());
    countries.then((data) => {
        const { results } = data;
        results.forEach((element) => {
            tableauCountry.push(
                new Country
                    (element.name.countries,
                        element.flags[0]

                    )

            );
        });

        console.log(tableauCountry);

        const game = new Game(countries);

        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
            const userResponse = document.querySelector('input').value;
            if (game.currentCountry.checkResponse(userResponse)) {
                game.addPoint();
                document.querySelector('#score').textContent = `Score: ${game.score}`;
            }
            game.nextCountry();

            // Affichage de chaque country dans le document HTML
            tableauCountry.forEach((element) => {
                element.render();
            });
            document.querySelector("main").innerHTML = "";
            tableauUser.forEach((element) => {
                element.render();
            });

        });


        getCountry();
    });

};



