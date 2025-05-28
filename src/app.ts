/**
 * MET CS601 - Assignment 4
 * Country Management System
 */

interface ICountry {
    name: string;
    getInfo(element: HTMLElement): HTMLElement;
}

class RainCountry implements ICountry {
    name: string;
    rainLevel: number;

    constructor(name: string, rainLevel: number) {
        this.name = name;
        this.rainLevel = rainLevel;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel.toFixed(2)} inches.`;
        return element;
    }
}

class SnowyCountry implements ICountry {
    name: string;
    snowLevel: number;

    constructor(name: string, snowLevel: number) {
        this.name = name;
        this.snowLevel = snowLevel;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel.toFixed(2)} inches.`;
        return element;
    }
}

class IslandCountry implements ICountry {
    name: string;
    landSize: number;

    constructor(name: string, landSize: number) {
        this.name = name;
        this.landSize = landSize;
    }

    getInfo(element: HTMLElement): HTMLElement {
        element.textContent = `${this.name} has a land size of ${this.landSize.toLocaleString()}.`;
        return element;
    }
}