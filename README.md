# bank-backend

- [Why](#why)
- [Installation](#installation)
- [Usage](#usage)

## Why

If only we had a frontend...

## Installation

Install and run [Docker](https://docs.docker.com/install/)

Clone this repo `git clone https://github.com/floris-alteza/bff.git`

Start! `docker-compose up`

## Usage

Once the server has started the swagger documentation can be found at [http://localhost:3000/api/](http://localhost:3000/api/)

In the swagger-ui you can find how to connect to the backend.

## Local development

The easiest way to make changes to this project is to run it locally. To run it locally we need to spin up the mongo docker image and set the correct config connection to the docker container. After that we just need to install and run. NestJS uses prettier so it might be handy to install a plugin that fixes styling on save.

- `cp .env.example .env`
- `docker-compose up mongo`
- `npm install`
- `npm run start:dev`

### Example

```javascript
fetch('http://localhost:3000/accounts')
  .then(async response => {
    console.log(await response.json());
  })
  .catch(error => {
    console.error(error);
  });
```

## TODO

Where can i start...

- Add examples
- Tests
- Clean up code
- Use Nestjs how it is intended (this is a first try)
