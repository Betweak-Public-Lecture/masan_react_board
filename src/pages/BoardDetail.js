import React from 'react';

// {match, location, history}
export default function BoardDetail({history, match}){
  const boardId = match.params.boardId;

  return (
    <div>
      This is BoardDetail! <br/>
      {boardId}번 게시글 조회
    </div>
  )
}