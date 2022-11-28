import React from "react";
import { Card, Col, Row } from "antd";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchUsers } from "../../redux/action/userAction";

function CardView({ data }) {
  const dispatch: any = useDispatch();
  let allusers: any
  allusers = useSelector(state => state)
  let arr1 = allusers.userReducer[0]

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="hello">
      <div className="">
        <h2>{data} </h2>
      </div>
      <Row gutter={12}  >
        {
          arr1 && arr1.map(item => {
            return <Col key={item} span={8} style={{ padding: "15px"}}>
              <Card style={{ backgroundColor: "#bae0ff"}}>
                <p> {item.username}</p>
                <p>{item.company.name}</p>
                <p>{item.address.city}</p>
              </Card>
            </Col>
          })
        }

      </Row>
    </div>

  );
}

export default CardView;
