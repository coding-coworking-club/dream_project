import 'antd/dist/antd.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';


function App() {
  return (
    <>
      <SearchBar style={{ position: 'relative' }} />
      <SearchResult />
    </>
  );
}

export default App;
