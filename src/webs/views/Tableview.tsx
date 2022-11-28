import React, { useEffect } from "react";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import { fetchUsers, userDelete } from "../../redux/action/userAction";


interface DataType {
  key: string;
  name: string;
  email: number;
  phone: string;
  company: string;
  city: string;
  pincode: string;
  delete: any
  }

function Tableview({ data }) {
  const dispatch: any = useDispatch()
  let allusers: any
  allusers = useSelector(state => state)
  let arr1 = allusers.userReducer[0]
  const dataSource: DataType[] = []

  
  allusers && arr1.map(item => {
    dataSource.push({
      key: item.id,
      name: item.username,
      email: item.email,
      phone: item.phone,
      company: item.company.name,
      city: item.address.city,
      pincode: item.address.zipcode,
      delete: <a onClick={()=>dispatch(userDelete(item.id))}> <DeleteFilled /></a>  
      })
  })
 
   const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Company Name',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
    {
      title: 'delete',
      dataIndex: 'delete',
      key: 'delete',
    },
  ];

  return (
    <div className=" hello">
      <h2>{data} </h2>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default Tableview;

