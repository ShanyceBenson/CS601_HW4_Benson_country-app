##### CS601_HW4
# 🌐 Country Management System 

This is a TypeScript-based web application. The project demonstrates object-oriented programming (OOP) principles in TypeScript, DOM manipulation, and type safety using custom types and type guards.

The app manages a list of different types of countries', **Rain level**, **Snow level**, and **Island size**, and displays their environmental data in the browser. Snowy countries are filtered into a separate list, and the app calculates the total annual snow level from that group.

## 🛠️ Built With
- TypeScript
- HTML5 / DOM API

## 📌 Features

- Implements a shared `ICountry` interface.
- Defines 3 custom classes:
  - `RainCountry` – tracks rain level.
  - `SnowyCountry` – tracks snow level.
  - `IslandCountry` – tracks land size.
- Filters the list of `SnowyCountry` objects using a **custom type predicate**.
- Dynamically renders:
  - All country information.
  - Snowy countries and the **total snow accumulation**.
- Demonstrates **class-based inheritance**, **type checking**, and **DOM manipulation** with strict type safety.


## 🗂️ Project Structure
```
country-app/
├── public/
│ ├── index.html 
│ └── app.js 
├── src/
│ └── app.ts 
├── package.json 
├── package-lock.json 
├── tsconfig.json 
└── README.md 
```


## 🧪 Sample Data

The app starts with a predefined list of `ICountry` objects:

```ts
const countries: ICountry[] = [
  new RainCountry("United States", 28),
  new SnowyCountry("Norway", 20),
  new RainCountry("Brazil", 40),
  new IslandCountry("Japan", 145937),
  new SnowyCountry("Sweden", 30),
  new IslandCountry("Australia", 2968464)
]; 
```

## How to Run
1. Extract CS601_HW4_Benson
2.  cd country-app
3. In the terminal run ```npm install```
4. Next run ```npx tsc```
5. Open public/index.html in your preferred browser.

## 🙋🏽‍♀️ Author
Shanyce Benson

## 📝 Notes
Designed for Boston University's CS601 course.




