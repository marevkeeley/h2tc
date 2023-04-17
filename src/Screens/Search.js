import Search from '../components/search';
import initialDetails from '../pages';

const Searchpage = () => {
    return (
      <body className="App-header">
        <h1 style={{ paddingVertical: 5, fontSize: 18 }}>Search</h1>
        <Search details={initialDetails}/>
      </body>
    );
  };
  
  export default Searchpage;