import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

const movieCategories = [
  {
    category: 'Anime',
    id: 'anime',
    description: 'anime movies',
    movies: [
      {
        title: 'Demon Slayer: Mugen Train',
        year: '2020',
        id: '1',
        poster:
          'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg',
      },
      {
        title: 'Jujutsu Kaisen 0: The Movie',
        year: '2021',
        id: '2',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Horror',
    id: 'horror',
    description: 'horror movies',
    movies: [
      {
        title: 'Get Out',
        year: '2017',
        id: '3',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
      },
      {
        title: "Child's Play 2",
        year: '1990',
        id: '4',
        poster:
          'https://m.media-amazon.com/images/M/MV5BM2Y0NGNiNGItYzYzOS00NDk0LTkzNWUtMGZjMjc1NWM4MzE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Action',
    id: 'action',
    description: 'action movies',
    movies: [
      {
        title: 'Last Action Hero',
        year: '1993',
        id: '5',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        title: 'Looney Tunes: Back in Action',
        year: '2003',
        id: '6',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTkxNDk5MDQ2MF5BMl5BanBnXkFtZTYwMTA0Nzc2._V1_SX300.jpg',
      },
    ],
  },
];

function Movie() {
  const { categoryId, movieId } = useParams();
  const movie = movieCategories
    .find(({ id }) => id === categoryId)
    .movies.find(({ id }) => id === movieId);

  const { title, poster } = movie;
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} height={300} width={300} />
    </div>
  );
}

function MovieList() {
  const { categoryId } = useParams();
  const { url, path } = useRouteMatch();
  console.log('url in MovieList', url); // 💡 Use url for nested links
  console.log('path in MovieList', path); // 💡 Use path for nested routes

  const category = movieCategories.find(({ id }) => id === categoryId);
  console.log('category', category);
  return (
    <div>
      <h2>{category.category}</h2>
      <p>{category.description}</p>
      <ul>
        {category.movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>

      <hr />

      <Route path={`${path}/:movieId`}>
        <Movie />
      </Route>
    </div>
  );
}

function CategoryList() {
  // Custom Hook we get from react router dom for nested routing
  const { url, path } = useRouteMatch();
  console.log('url in CategoryList', url); // 💡 Use url for nested links
  console.log('path in CategoryList', path); // 💡 Use path for nested routes

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {movieCategories.map(({ category, id }) => {
          return (
            <li key={id}>
              {/* A nested link that's using the `url` from `useRouteMatch()`  */}
              <Link to={`${url}/${id}`}>{category}</Link>
            </li>
          );
        })}
      </ul>

      <hr />

      {/* The URL we want to match: /category/:categoryId */}
      <Route path={`${path}/:categoryId`}>
        <MovieList />
      </Route>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
      </div>
    </Router>
  );
}
