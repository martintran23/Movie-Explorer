const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = (process.env.REACT_APP_TMDB_KEY || "").trim();

function ensureEnvApiKey() {
  if (!API_KEY) {
    throw new Error(
      "Missing REACT_APP_TMDB_KEY. Set it in .env at the project root and restart npm start."
    );
  }
}

// Build a TMDB URL with the API key and query params.
function buildUrl(path, params = {}) {
  ensureEnvApiKey();
  const query = new URLSearchParams({
    api_key: API_KEY,
    ...params,
  });

  return `${API_BASE_URL}${path}?${query.toString()}`;
}

async function parseTmdbError(response, fallbackMessage) {
  try {
    const body = await response.json();
    if (body?.status_message) {
      return body.status_message;
    }
  } catch {
    // ignore non-JSON error bodies
  }
  return fallbackMessage;
}

// Fetches popular movies from TMDB (20 per page by default).
export async function fetchPopularMovies(page = 1) {
  const url = buildUrl("/movie/popular", { page });
  const response = await fetch(url);

  if (!response.ok) {
    const message = await parseTmdbError(response, "Failed to fetch popular movies.");
    throw new Error(message);
  }

  return response.json();
}

// Fetches movies that match a search query.
export async function searchMovies(query, page = 1) {
  const url = buildUrl("/search/movie", {
    query,
    page,
    include_adult: false,
  });
  const response = await fetch(url);

  if (!response.ok) {
    const message = await parseTmdbError(response, "Failed to search movies.");
    throw new Error(message);
  }

  return response.json();
}

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
