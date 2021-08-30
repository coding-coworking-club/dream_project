import 'antd/dist/antd.css';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <SearchBar style={{ position: 'relative' }} />
      {/* <SearchResult /> */}
    </>
  );
}

export default App;
