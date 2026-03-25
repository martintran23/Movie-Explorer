# Movie Explorer

Browse popular films from [The Movie Database (TMDB)](https://www.themoviedb.org/), search by title, sort the current page, and paginate through results.

## Live site

**[https://movie-explorer-alpha-amber.vercel.app](https://movie-explorer-alpha-amber.vercel.app)**

## Features

- Popular movies grid loaded from the TMDB API
- Search with debounced input to limit API calls
- Pagination (TMDB caps total pages at 500 for this app)
- Client-side sorting by release date or rating (ascending/descending)

## Tech stack

- React 18
- Create React App (`react-scripts` 5)

## Project layout

```
src/
  api.js              # TMDB requests and poster base URL
  App.jsx             # State, fetch effects, sorting
  components/         # Movie list, card, search, sort, pagination
  styles.css
```

## License

ISC (see `package.json`).
