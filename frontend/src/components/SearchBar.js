import React from 'react'
import { Input} from 'antd';
import styled from 'styled-components';
import {search} from '../apis/index'

const Section = styled.div`
  align-items: center !important;
  padding: 10% !important;
`;
const SearchBar = () => {

    const { Search } = Input;
    return (
        <Section>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={value=>search(value)}
            />
         </Section>
    )
}

export default SearchBar;
