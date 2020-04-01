# US COVID-19 Reports

React components for tracking COVID-19 virus in the US using data that has been provided by [The New York Times](https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html).

## Disclaimer

The New York Times has provided an excellent data set in CSV format, but have been constrained in some cases on how accurate or specific the data is. I have aggregated and normalized this data to get the latest and map to the format required by the components I'm using. I have also split up some of the data in specific instances. For example, New York City and Kansas City are reporting as cities, and not by boroughs or counties respectively. For the county view in those cases, I have opted to split the data between respective boroughs and counties so they show up better on the map. Given this, there is a margin of error as I am rouding to the nearest decimal. In several cases other cases there are unknown FIPS (Federal Information Processing Standards) codes which mean that not all cases are represented on the map. In these cases, I have added additional notes on the map.

## Requirements

- [Node.js](https://nodejs.org/)
- [git](https://git-scm.com/)

## Install

This installs dependencies, pulls latest NYTimes data, and parses the data.

`npm i`
`npm run get-data`
`npm run parse-data`

## Run

`npm start`

## Build

`npm run build`

## Tech Stack

- [React](https://reactjs.org/)
- [Highcharts](https://www.highcharts.com/)

---

## About

I am recently unemployed and thought I would put some of my skills to work after seeing that The New York Times was publishing it's extensive statistics for COVID-19 AKA Coronavirus. My primary goal was to quickly build something that was fast, responsive, and focused on the numbers with little to no commentary. I built some algorithms for aggregating and normalizing The New York Time's data, then experimented with a few different mapping and charting frameworks. The result is a few days work, but something I will continue updating and tweaking.

For more in-depth information or help, I have compiled a list of helpful links below. Above and beyond all, please keep yourself and your families safe and let's fight this thing together.

- [CDC - Center for Disease Control and Prevention](https://www.cdc.gov/coronavirus)
- [American Red Cross](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety.html)
- [The New York Times](https://www.nytimes.com/news-event/coronavirus)
- [The Washington Post](https://www.washingtonpost.com/topics/coronavirus/)
- [BBC](https://www.bbc.com/news/coronavirus/)
- [United Nations](https://www.un.org/en/coronavirus)

## Resources

- GitHub - [nytimes/covid-19-data](https://github.com/nytimes/covid-19-data)

---

## Contact

As am recently unemployed, but actively seeking full-time or contract employment. I have a proven record for
building highly performant, accessible, secure, responsive, and maintainable front-end systems that integrate
seamlessly with the backend. I will help lead and build up your team, handle your front-end architecture, or
be a highly productive individual contributor. I consider myself a full-stack engineer with a focus on
technologies such as React, Node, Azure, Git. For more information, please check out my resume.

- [Resume](https://docs.google.com/document/d/1XtegNZsCSssBPXJVmd4tmx7c_yUUzXN_vv8GXWLOKAM/edit?usp=sharing)
- [Email]('mailto:jmlivingston@gmail.com)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
