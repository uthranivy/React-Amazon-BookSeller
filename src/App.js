import Book from './Book'
import {BookList} from './BookList'
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="page-heading display-4 fw-normal text-center p-5">Amazon Best Selling Books</h1>
      <article className="App-header row row-cols-1 row-cols-md-3 g-4 m-2"> 
      {BookList.map((book) => { 
          return <Book key={book.id} {...book}></Book>;
        })}
      </article>
    </div>
  );
}

export default App;
