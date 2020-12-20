import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

export default function BoardWrite() {
  return (
    <Container style={{paddingTop:60}}>
      <Row>
        <Col>
          <h1>글 쓰기</h1>
        </Col>      
      </Row>

      {/* https://react-bootstrap.github.io/components/forms/ */}
      <Row style={{paddingTop:60}}>
        <Col>
          <div>
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" />
          </div>
          <div>
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={7} />
          </div>
        </Col>
      </Row>

      <Row style={{paddingTop:30}}>
        <Col>
          <Button style={{float:'right'}}>글 작성</Button>
        </Col>
      </Row>
    </Container>
  )
}
