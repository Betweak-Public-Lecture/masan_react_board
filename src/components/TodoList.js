import React, {useState, useEffect} from 'react';

const defaultTodoList = [{
  // 실제 서버에서 받아오는 데이터는 아니지만, 서버에서 받아오는 것처럼 사용할 예정
  // MockData
  title: '씻기',
  status: 'done'
}, {
  title: "밥먹기",
  status: "ready"
}]

function TodoList(props){
  // 서버에서 데이터를 받기전.
  const [todoList, setTodoList] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  useEffect(()=>{
    // 서버 요청 코드(임시의)
    setTodoList(defaultTodoList);
  },[])

  return (
    <div style={{padding:60, fontSize:25}}>
      <h1>TodoList</h1>

      <input type="text" onChange={(e)=>{
          // console.log(e.target.value);
          setInputTodo(e.target.value);
        }} 
        value={inputTodo} 
      />

      <button onClick={()=>{
        // console.log("클릭되었습니다.")
        const newTodoList = todoList.concat({
          status:'ready',
          title: inputTodo
        });
        setTodoList(newTodoList);
        setInputTodo("");
      }}>입력</button>

      <div>
        {/* 문제1. todo 클릭시 status를 ready=>done으로 바꾸세요. */}
        {/* 문제2. status가 ready인 것은 [완료되지 않은 TODO]에, status가 done인 것은 [완료된 TODO]에 넣어주세요.  */}
        <div style={{width:500, float:'left'}}>
          <h3>완료되지 않은 TODO</h3>
          <ul>
            {todoList.map(todo=>{
              if (todo.status === 'ready'){
                return (
                  <li onClick={()=>{
                    const newTodoList = todoList.map(elem=>{
                      if(elem.title === todo.title){
                        return {
                          title: todo.title,
                          status: 'done'
                        }
                      } else{
                        return elem
                      }
                    })
                    setTodoList(newTodoList);
                  }
                  }>
                    {todo.title} - {todo.status}
                  </li>
                )
              }
              else{
                return null
              }
            })}
          </ul>
        </div>

        <div style={{width:500, float:'left'}}>
          <h3>완료된 TODO</h3>
          <ul>
          {todoList.map(todo=>{
              if (todo.status === 'done'){
                return (
                  <li onClick={()=>{
                    const newTodoList = todoList.map(elem=>{
                      if(elem.title === todo.title){
                        return {
                          title: todo.title,
                          status: 'ready'
                        }
                      } else{
                        return elem
                      }
                    })
                    setTodoList(newTodoList);
                  }
                  }>
                    {todo.title} - {todo.status}
                  </li>
                )
              }
              else{
                return null
              }
            })}
          </ul>
        </div>
      </div>      
    </div>
  )

  // const [sample, setSample] = useState("true"); // functional Component에서 State를 사용하는 방법

  // // 컴포넌트가 rendering 후 계속해서 실행 되어줘야 하는 함수. (side Effect)
  // useEffect(()=>{
  //   // Server에서 데이터를 받아오는 일
  //   if (sample === 'true'){
  //     setSample('false')
  //   } else{
  //     setSample("true")
  //   }
  // }, [])

  // return (
  //   <div>
  //     <button onClick={()=>{
  //       if (sample === 'true'){
  //         setSample('false')
  //       } else{
  //         setSample("true")
  //       }
  //     }}>버튼</button>
  //     {sample}
  //   </div>
  // )

  // const [todoList, setTodoList] = useState([]);
  // console.log(todoList)

  // // 컴포넌트가 rendering 후 계속해서 실행 되어줘야 하는 함수. (side Effect)
  // useEffect(()=>{
  //   setTodoList(defaultTodoList);
  // }, [])

  // return (
  //   <div>
  //     <ul>
  //       <h1>TodoList</h1>
  //       {
  //         todoList.map(todo=>{
  //           return (
  //             <li>
  //               <div>
  //                 {todo.title}
  //               </div>
  //             </li>
  //           )
  //         })
  //       }

  //     </ul>
  //   </div>
  // )
}

export default TodoList;

