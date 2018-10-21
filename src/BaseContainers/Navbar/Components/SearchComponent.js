import React from 'react';
import { Input ,Icon} from 'antd';

const SearchAntd = Input.Search;
const Search = ({}) => (
      <SearchAntd
      placeholder="input search text"
      enterButton="Search"
      size="large"
    />
);

export default Search
