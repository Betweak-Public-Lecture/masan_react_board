import React, {useState} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

export default function BoardWrite({history}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBoard = function(title, content){
    // 서버에 POST요청 코드
    fetch('/api/board', {
      method: "POST",
      headers: {
        'CONTENT-TYPE': "application/json",
      },
      body: JSON.stringify({title: title, content: content})
    }).then(resp=>{
      // JSON.parse(resp)
      return resp.json();
    }).then (data =>{
      if(data.status === 'success'){
        history.push('/board');
      } else if (data.status ==='error'){
        alert(data.result);
      }
    })

  }

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
            <Form.Control type="text" onChange={(e)=>{
              // console.log(e.target.value)
              // console.log(e);
              setTitle(e.target.value);
            }} value={title} />
          </div>
          <div>
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={7} onChange={(e)=>{
              setContent(e.target.value)
            }} value={content} />
          </div>
        </Col>
      </Row>

      <Row style={{paddingTop:30}}>
        <Col>
          <Button style={{float:'right'}} onClick={(e)=>{
            submitBoard(title, content)
          }} >글 작성</Button>
        </Col>
      </Row>
    </Container>
  )
}
