import React from 'react'
import { Table } from 'antd';
import styled from 'styled-components';
const Section = styled.div`
 padding:0 10% !important;
`;

const columns = [
    {
      title: '課程名稱',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '上課教室',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '授課教師',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '上課時間',
      dataIndex: 'time',
      key: 'time',
    }
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      location: 32,
      teacher: 'New York No. 1 Lake Park',
      time: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      location: 42,
      teacher: 'London No. 1 Lake Park',
      time: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      location: 32,
      teacher: 'Sidney No. 1 Lake Park',
      time: ['cool', 'teacher'],
    },
  ];
const SearchResult = () => {
    return (
        <Section>
            <Table columns={columns} dataSource={data} />
        </Section>
    )
}

export default SearchResult;
