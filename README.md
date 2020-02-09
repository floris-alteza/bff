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

### Example

```javascript
fetch('http://localhost:3000/accounts')
  .then(response => {
    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
```

## TODO

Where can i start...

- Implement configs
- Tests
- Clean up code
- Use Nestjs how it is intended (this is a first try)
