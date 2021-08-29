import 'antd/dist/antd.css';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import SearchResult from './components/SearchResult';
const Section = styled.div`
  align-items: center !important;
  padding: 10% !important;
`;

function App() {
  return (
    // <Section>
    <>
      <SearchBar style={{ position: 'relative'}} />
<SearchResult/>
    </>
    // </Section>
  );
}

export default App;
