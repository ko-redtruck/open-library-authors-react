import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Author from './components/Author';
import AuthorsSearch from './components/AuthorsSearch';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Authors in OpenLibrary</h1>
        <p>Search for authors in the <a href="https://openlibrary.org/">Open Library</a> and show their books</p>
        <AuthorsSearch />

      </Container>
    </div>
  );
}

export default App;
