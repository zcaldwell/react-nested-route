import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

const families = [
  {
    family: 'House Targaryen',
    id: 'targaryen',
    characters: [
      {
        id: 0,
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        fullName: 'Daenerys Targaryen',
        title: 'Mother of Dragons',
        image: 'daenerys.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
      },
      {
        id: 26,
        firstName: 'Viserys',
        lastName: 'Targaryan',
        fullName: 'Viserys Targaryn',
        title: 'King Viserys III',
        family: 'Targaryan',
        image: 'viserys-targaryan.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/viserys-targaryan.jpg',
      },
    ],
  },
  {
    family: 'House Stark',
    id: 'stark',
    characters: [
      {
        id: 3,
        firstName: 'Arya',
        lastName: 'Stark',
        fullName: 'Arya Stark',
        title: 'No One',
        family: 'House Stark',
        image: 'arya-stark.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/arya-stark.jpg',
      },
      {
        id: 4,
        firstName: 'Sansa',
        lastName: 'Stark',
        fullName: 'Sansa Stark',
        title: 'Lady of Winterfell',
        family: 'House Stark',
        image: 'sansa-stark.jpeg',
        imageUrl: 'https://thronesapi.com/assets/images/sansa-stark.jpeg',
      },
      {
        id: 5,
        firstName: 'Brandon',
        lastName: 'Stark',
        fullName: 'Brandon Stark',
        title: 'Lord of Winterfell',
        family: 'House Stark',
        image: 'bran-stark.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/bran-stark.jpg',
      },
    ],
  },
  {
    family: 'House Baratheon',
    id: 'baratheon',
    characters: [
      {
        id: 7,
        firstName: 'Robert',
        lastName: 'Baratheon',
        fullName: 'Robert Baratheon',
        title: 'Lord of the Seven Kingdoms',
        family: 'House Baratheon',
        image: 'robert-baratheon.jpeg',
        imageUrl: 'https://thronesapi.com/assets/images/robert-baratheon.jpeg',
      },
      {
        id: 13,
        firstName: 'Joffrey',
        lastName: 'Baratheon',
        fullName: 'Joffrey Baratheon',
        title: 'Lord of the Seven Kingdoms, Protector of the Realm',
        family: 'House Lanister',
        image: 'joffrey.jpg',
        imageUrl: 'https://thronesapi.com/assets/images/joffrey.jpg',
      },
    ],
  },
];

function Families() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Families</h1>
      <ul>
        {families.map(({ family, id }) => {
          return (
            <li key={id}>
              <Link to={`${url}/${id}`}>{family}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/families">Families</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/families">
          <Families />
        </Route>
      </div>
    </Router>
  );
}
