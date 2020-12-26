import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// {match, location, history}
export default function BoardDetail({history, match}){
  const boardId = match.params.boardId;

  const [boardDetail, setBoardDetail] = useState({
    id: '',
    title: '',
    content: ''
  })
  // 실습: board 상세내용을 서버로부터 불러와서 Rendering하시오.
  // fetch 호출. (useEffect)
  useEffect(()=>{
    fetch(`/api/board/${boardId}`, {
      method: 'GET'
    }).then(resp=>{
      return resp.json();
    }).then(data=>{
      console.log(data);

      if(data.status === 'success'){
        setBoardDetail(data.result);
      } else{
        alert(data.result)
      }
    })
  }, [])


  return (
    <Container style={{paddingTop: 60}}>
      <Row>
        <Col>
          <h2>{boardDetail.title}</h2>
        </Col>
      </Row>
      <Row style={{paddingTop:30}}>
        <Col>
          <div style={{border: "1px solid #e9e9e9", padding: 10, minHeight:200}}>
            {boardDetail.content}
          </div>
        </Col>
      </Row>
      
    </Container>
  )
}