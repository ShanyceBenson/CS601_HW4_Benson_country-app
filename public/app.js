"use strict";
/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
class RainCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
const snowyCountriesList = [];
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a land size of ${this.landSize.toLocaleString()} square miles.`;
        return element;
    }
}
const countries = [
    new RainCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464),
];
function isSnowyCountry(country) {
    return country.snowLevel !== undefined;
}
countries.forEach((country) => {
    if (isSnowyCountry(country)) {
        snowyCountriesList.push(country);
    }
});
function displayAllCountries() {
    const container = document.getElementById("all-countries");
    countries.forEach((country) => {
        const p = document.createElement("p");
        country.getInfo(p);
        container.appendChild(p);
    });
}
function displaySnowyCountries() {
    const container = document.getElementById("snowy-countries");
    const totalDisplay = document.getElementById("total-snow-level");
    let totalSnow = 0;
    snowyCountriesList.forEach((country) => {
        const p = document.createElement("p");
        country.getInfo(p);
        container.appendChild(p);
        totalSnow += country.snowLevel;
    });
    totalDisplay.textContent = `Total snow level: ${totalSnow} inches.`;
}
displayAllCountries();
displaySnowyCountries();
