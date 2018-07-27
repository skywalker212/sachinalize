# sachinalize

    Wikipedia says, “Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest cricketer of all time.”. This project proves/disproves this statement.

## Details

I have data of matches and runs scored from past matches from Sachin Tendulkar's career and now I want to analyze if he's the greatest cricketer of all time. I can't do it based on his own performance but I would have to compare him with somebody else, that is exactly what I have done.

Now about the technology stack, I have used Node.js to handle Back-End and React.js for Front-End. The whole data from sachin's career has beed fed to elasticsearch, and the elastic server is hosted remotely using [bonsai.io](bonsai.io). The server queries elastic server on behalf of client and provides it an API end point at `'/aggregations'`, this querying part of elasticsearch could be done by client also but I didn't want the Front-End engineer (in this case I'm both) to go through hell so I simplified and provided an API endpoint to client instead. I have used `c3.js` to plot chart based on data retrieved from elastic server. `c3.js` is a toned-down version `d3.js` which deals with creating low level SVG graphics. I didn't have time to learn `d3.js` completely to use in this project so I have used `c3.js` in my project. `Bootstrap` is also used to beautify the project but I have not made the site responsive, it works fine on PCs. I have used `jQuery` here and there but I have tried to use it as little as possible. `React Router` is used to handle the requests from client-side directly instead of involving the server, this makes the navigation from one page to another a very pleasant experience. Webpack is used to bundle the compiled JavaScript into a `bundle.js` file and css into `style.css`. I have used `scss` preprocessor but I haven't actually fully optimized the use of it and written pure `css` into it. `Babel` is used to convert our `ES6` code into `ES5` code, some of the plugins like `transform-class-properties` is used to fully utilize the use of `class` in JavaScript. I have also included `Jest` to test the Components and functions but that is for the future expansion, I haven't actually written any test cases for testing the components yet.

Now about deployment, I have used Heroku to deploy this application to the world wide web at the domain [sachinalize.herokuapp.com](http://sachinalize.herokuapp.com). For the first time I have tried to optimize my code for production. Still I can include gZip compression and other minifying CSS,JS and stuff but I didn't do it because production and deployment wasn't the main concern.

## Sitemap

There are four(4) pages in the site. The pages are Home, Analytics, Comparison, Conclusion.

1. Home - This is the page where you get to know basic info about Sachin Tendulkar and other statistics. This statistics are taken from Wikipedia page of [Sachin Tendulkar](https://en.wikipedia.org/wiki/Sachin_Tendulkar).

2. Analytics - This page displays all the charts required to analyse Sachin Tendulkar's Career. I have only considered runs scored since I wanted to see if he was the greatest batsman.

3. Comparison - This page is for comparison of Sachin Tendulkar with another cricket god, Sir Donald George Bradman, the comparison is completely based on the stats on wikipedia.

4. Conclusion - This is where the question is answered, whether Sachin is the best batsman of all time or not.

## Directory structure

```md
├── es-helper - helper queries related to elasticsearch and other stuff like mapping info for the document
│   ├── mapping-info
│   └── queries
├── tests - folder containing ui and unit tests
│   ├── ui
│   └── unit
├── src - the core of the project, contains source files for client and server
│   ├── client
│   │   ├── assets - folder containing image files
│   │   ├── components - folder containing various react components
│   │   ├── graphs - Functions to return objects used to generate various charts
│   │   ├── helpers - helper functions
|   │   │   ├── get-query.js - function to query for resource to the server
|   │   │   └── hash-map.js - minimal HashMap implementation
│   │   ├── views - folder containing different views for different pages
│   │   ├── index.jsx - our main component which will be rendered on index.html
│   │   ├── index.scss - main scss file for styling
|   │   └── index.html - vanilla html page, where the js will be injected
│   └── server
|       ├── queries - helper functions to get the query objects related to elasticsearch
|       └── app.js - our main server file
├── .babelrc - config file for babel
├── LICENSE - MIT license
├── sachin.csv - file containing all the data about Sachin Tendulkar
├── setup.enzyme.js - enzyme config file for testing
├── webpack.common.js - webpack configuration file
├── README.md
├── package.json
└── .gitignore
```

## Contribute

- clone this repo using `git clone https://github.com/skywalker212/sachinalize.git`
- chage working directory using `cd sachinalize`
- do `npm install`
- run server locally using `npm start`
- identify bugs, implement improvements, report it in issues, raise a PR

P E A C E