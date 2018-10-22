import React from 'react';
import { Input } from 'antd';

const SearchAntd = Input.Search;

const Search = () => (
    <SearchAntd
      placeholder="Search in Shopping"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
);

export default Search
