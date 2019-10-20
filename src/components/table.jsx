import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'FN',
    dataIndex: 'firstname',
    key: 'firstname'
  },
  {
    title: 'LN',
    dataIndex: 'lastname',
    key: 'lastname'
  },
  {
    title: 'DOB',
    dataIndex: 'datepicker',
    key: 'datepicker'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Hobby',
    dataIndex: 'hobby',
    key: 'hobby'
  }
];

const data = [];

export default function table({ formData }) {
  if (formData !== '') {
    const len = data.length;
    const newData = {
      ...formData,
      key: len + 1
    };
    data.push(newData);
  }
  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
