# Timestamp Microservice

This is my WIP assessment for the Timestamp Microservice project at FreeCodeCamp. 

The project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## Requirements

* A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
* A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
* A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
* Your project can handle dates that can be successfully parsed by new Date(date_string)
* If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
* An empty date parameter should return the current time in a JSON object with a unix key
* An empty date parameter should return the current time in a JSON object with a utc key

## My implementation

- [] I want to use git-cz 
- [] I want to switch from Express to Fastify with Typescript 
- [] I want to use a Docker container for the app, check https://medium.com/@kartikio/setup-node-ts-local-development-environment-with-docker-and-hot-reloading-922db9016119
- [] I want to use Ava for unit testing with a coverage of 100% 
- [] I want to add super test for e2e testing 
- [] I want to add a CI/CD pipeline with GitHub Actions - JS or Docker custom action 
- [] I want to switch to yarn for package management 
- [] I want to use TypeScript for type safety -- check tsup for bundling 
- [] I want to use any date library for date parsing such as date-fns 
- [] I want to use a linter and formatter such as ESLint and Prettier 
- [] I want to use an integration with Shortcut or Linear
- [] I want to use a semantic versioning and a changelog with standard-version 
- [] I want to deploy the Javascript app to AWS Lambda or even EKS
