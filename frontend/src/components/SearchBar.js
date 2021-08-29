import React from 'react'
import { Input, Space } from 'antd';
import styled from 'styled-components';
const Section = styled.div`
  align-items: center !important;
  padding: 10% !important;
`;
const SearchBar = () => {

    const { Search } = Input;
    const onSearch = value => console.log(value);

    return (
        <Section>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
         </Section>
    )
}

export default SearchBar;
