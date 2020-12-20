import React from 'react';
import {Container, Row, Col, Button, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function BoardList(props){
  console.log(props);
  const {history, match, location} = props;
  return (
    <Container style={{paddingTop: 60}}>
      <Row>
        <Col>
          <h1>게시글 리스트</h1>
        </Col>
      </Row>

      <Row style={{paddingTop: 50, paddingBottom:50}}>
        <Col>
          {/* Button "클릭"시 "/board/write르 이동시키기" */}
          {/* 2가지방법. */}

          {/* 방법1. */}
          {/* <Link to="/board/write">
            <Button style={{float:'right'}} >
                글 쓰기
            </Button>
          </Link> */}

          <Button style={{float:'right'}} 
                  onClick={()=>{
                    history.push('/board/write')
                  }}>
            글 쓰기
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>게시글1</ListGroup.Item>
            <ListGroup.Item>게시글2</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      
    </Container>
  )
}