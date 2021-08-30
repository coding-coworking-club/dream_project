import React from 'react'
import { Input } from 'antd';
import styled from 'styled-components';
import { search } from '../apis/index'
import { useState } from 'react';
import SearchResult from './SearchResult';
const Section = styled.div`
  align-items: center !important;
  padding: 10% !important;
`;
const SearchBar = () => {
    const [info, setInfo] = useState({})
    const onSearch = (value)=>{
        const result = search(value);
        console.log(result);
        setInfo(result);
    }
    const { Search } = Input;
    return (
        <Section>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={value => onSearch(value)}
            />
            <SearchResult props={info}/>
        </Section>
    )
}

export default SearchBar;
