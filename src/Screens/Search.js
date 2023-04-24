import Search from '../components/search';
import initialDetails from '../pages';

/**
 * Creates a page where users can search through the pages to find what they are interested in.
 * This uses the Search component. 
 * @returns the search page.
 */
const Searchpage = () => {
    return (
      <body className="App-header">
        <h1 style={{ paddingVertical: 5, fontSize: 18 }}>Search</h1>
        <Search details={initialDetails}/>
      </body>
    );
  };
  
  export default Searchpage;