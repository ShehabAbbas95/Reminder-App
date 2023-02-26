import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

import '../index.css'
function Date() {
  return (
    <>
    <Container>
      <Row >
        <Col className="d-flex" sm="2">
          <img src='../person2.png' alt='Avatear Image' className='avatar-img'/>
          <div className="mx-2">
            <p className='d-inline'> الاسم </p>
            <p > مروة محمود </p>
            <p className='d-inline'> الميعاد </p>
            <p >6/6/2024 </p>
          </div>
        </Col>
        <Col  sm='8' >
          <div className='desc'>
            <p>الوصف</p>
            <p>السلام عليكم هذه المقابلة من اجل العمل لة من اجل العمل لة من اجل العمل لة من اجل العمل لة من اجل العمل لة من اجل العمل لة من اجل العمل لة من اجل العمل </p>
          </div>
        </Col>
      </Row>
    </Container>
    
    <Button variant='primary'>Mark as done</Button>
    <hr />
    </>
  )
}

export default Date