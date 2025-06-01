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
    element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
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
    element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
    return element;
  }
}

const snowyCountriesList: SnowyCountry[] = [];

class IslandCountry implements ICountry {
  name: string;
  landSize: number;

  constructor(name: string, landSize: number) {
    this.name = name;
    this.landSize = landSize;
  }

  getInfo(element: HTMLElement): HTMLElement {
    element.textContent = `${this.name} has a land size of ${this.landSize.toLocaleString()} square miles.`;
    return element;
  }
}

const countries: ICountry[] = [
  new RainCountry("United States", 28),
  new SnowyCountry("Norway", 20),
  new RainCountry("Brazil", 40),
  new IslandCountry("Japan", 145937),
  new SnowyCountry("Sweden", 30),
  new IslandCountry("Australia", 2968464),
];

function isSnowyCountry(country: ICountry): country is SnowyCountry {
  return (country as SnowyCountry).snowLevel !== undefined;
}

countries.forEach((country) => {
  if (isSnowyCountry(country)) {
    snowyCountriesList.push(country);
  }
});

function displayAllCountries(): void {
  const container = document.getElementById("all-countries") as HTMLElement;

  countries.forEach((country) => {
    const p = document.createElement("p");
    country.getInfo(p);
    container.appendChild(p);
  });
}

function displaySnowyCountries(): void {
  const container = document.getElementById("snowy-countries") as HTMLElement;
  const totalDisplay = document.getElementById("total-snow-level") as HTMLElement;

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
