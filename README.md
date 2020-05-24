# @darksun/apodjs
ApodJS is an api wrapper for Nasa APOD (Astronomy Picture of the Day) using Axios for api calls, allows API_KEY and DATE query params from official docs, HD param not included, it's legacy and didn't work.

## Pull Request are welcome!

I'm new to this type of project, any recommendation is welcome!!
Specially in tests and implementations of what I do in the actual code.

### Installation

```
yarn add @darksun/apodjs
```
or
```
npm install @darksun/apodjs
```

### Usage example
``` JS
import ApodJs from '@darksun/apodjs';

// Allows custom API_KEY i.e. ApodJs('ABCD123')
const apod = ApodJs();

// Returns an object documented on https://github.com/nasa/apod-api
const hdurl = apod()
  .then(data => data.hdurl);
```