import 'antd/dist/antd.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <SearchBar style={{ position: 'relative' }} />
      <SearchResult />
    </>
  );
}

export default App;
