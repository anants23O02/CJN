'use client';

import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  lastName: string;
  firstName: string;
  middleName: string | null;
  suffix: string | null;
  dob: string;
  age: number;
  address: string;
  city: string;
  state: string;
}

const data: DataType[] = [
  {
    key: '1',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'James',
    suffix: null,
    dob: '12/13/1989',
    age: 35,
    address: '1234 August Ave',
    city: 'St. Paul',
    state: 'MN',
  },
  {
    key: '2',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: null,
    suffix: null,
    dob: '12/13/1989',
    age: 35,
    address: '1234 August Ave',
    city: 'St. Paul',
    state: 'MN',
  },
  {
    key: '3',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'Drew',
    suffix: null,
    dob: '10/05/1987',
    age: 37,
    address: '1234 First Street',
    city: 'St. Paul',
    state: 'MN',
  },
  {
    key: '4',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'Drew',
    suffix: null,
    dob: '10/05/1987',
    age: 37,
    address: '1234 First Street',
    city: 'St. Paul',
    state: 'MN',
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Last Name / Business',
    dataIndex: 'lastName',
    key: 'lastName',
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: 'Middle Name',
    dataIndex: 'middleName',
    key: 'middleName',
    render: (middleName) => (middleName ? middleName : '---'),
  },
  {
    title: 'Suffix',
    dataIndex: 'suffix',
    key: 'suffix',
    render: (suffix) => (suffix ? suffix : '---'),
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
    sorter: (a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime(),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
];

const CustomTable: React.FC = () => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 4 }}
      bordered
    />
  );
};

export default CustomTable;
