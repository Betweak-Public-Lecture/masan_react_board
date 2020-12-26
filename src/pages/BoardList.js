import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function BoardList(props){
  console.log(props);
  const {history, match, location} = props;


  const [boardList, setBoardList] = useState([]);
  
  useEffect(()=>{
    // 1. 서버와 통신 (GET요청)

    // 비동기로 요청을 보낸다.

    // fetch('http://localhost:3000/api/board', {
    // TODO: CORS 에러 발생 (설명 필요.)

    fetch('/api/board', {
      method: 'GET'
    }).then(resp=>{
      return resp.json();
    }).then(data=>{
      console.log(data);
      if (data.status === 'error'){
        alert("Server Error");
        alert(data.result);
      } else{
        setBoardList(data.result);
      }
    })

    // 2. 서버에서 데이터를 받아온 후 boardList라는 State에 저장!
  }, [])


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
            {/* TODO: 숙제: 각 리스트를 클릭하면 해당 경로에 맞는 boardDetail로 이동시키기. */}
            {boardList.map(post=>{
              return (
                // // 1번째 방법. Link Component 사용
                // <Link to={`/board/${post.id}`} key={post.id}>
                //   <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
                // </Link>
                
                // 2번째 방법.  history(props).push를 사용.
                <ListGroup.Item key={post.id} onClick={()=>{
                  history.push(`/board/${post.id}`)
                }}>
                  {post.title}
                </ListGroup.Item>
              )
            })}
            
          </ListGroup>
        </Col>
      </Row>
      
    </Container>
  )
}