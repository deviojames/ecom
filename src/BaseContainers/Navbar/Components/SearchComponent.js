import React from 'react';
import { Input } from 'antd';

const SearchAntd = Input.Search;

const Search = () => (
    <SearchAntd
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
);

export default Search
