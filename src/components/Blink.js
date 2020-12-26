import React, {Component} from 'react';

function BlinkFunction (props){
  return (
    <div>
      함수형 컴포넌트
      <br/>
      {props.text}
    </div>
  )
}
// export default BlinkFunction

class BlinkClass extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      showText: 'true',
    }

    setInterval(()=>{
      if (this.state.showText === 'true'){
        this.setState({showText: "false"})
      }else{
        this.setState({showText: "true"})
      }
    }, 5000);
  }

  render(){
    // let displayText = null;
    // if (this.state.showText === 'true'){
    //   displayText = this.props.text;
    // } 

    let displayText = this.state.showText === 'true' ? this.props.text : null;

    return (
      <div style={{textAlign:'center', paddingTop:60, fontSize: 30}}>
        {/* 클래스형 컴포넌트
        <br/>
          {this.state.showText}
        <br/> */}
        {displayText}
        {/* {this.props.text} */}
      </div>
    )
  }
}
export default BlinkClass



// // extends: 상속(구글 서칭) 
// export default class Blink extends Component{
//   constructor(props){
//     // 생성자: instance가 만들어질때 반드시 제일 처음 호출되는 함수
//     super(props); // props를 사용할 수 있게 만들어준다. (react class base component에서 반드시 호출되어야 함.) 
    
//     // state: 컴포넌트 자체적으로 관리하는 변수
//     this.state = {
//       showText: true,

//       sampleList: [1]
//     }

//     // setIntarval(<실행시킬 함수>, ms(시간))
//     setInterval(()=>{
//       // this.setState ==> state를 변경시킨다.
//       this.setState({showText: !this.state.showText});
//     }, 2000)

//     this.state.sampleList.map()
//   }

//   // render(){
//   //   let showText = this.state.showText;

//   //   // 3항 연산자.
//   //   let display = showText ? this.props.text : null;

//   //   return (
//   //     <div>
//   //       {display}
//   //       {this.state.sampleList[0]}
//   //       {this.state.sampleList[1]}
//   //     </div>
//   //   )
//   // }
// }
