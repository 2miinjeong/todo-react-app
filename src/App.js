// import logo from './logo.svg';
import './App.css';
import React from "react"
import ToDo from "./ToDo"
import AddToDo from './AddToDo';

import {Paper, List, Container} from "@material-ui/core"




class App extends React.Component {
  constructor(props){
    super(props)
    //this.state.item =  
    //this.state.item = {item:{id:0, "title":"Hello React", "done":true}}
    //ToDo에게 item이라는 이름으로 데이터를 전달
    this.state = {item:[{id:0, title:"Hello React", done:true},
    {id:1, title:"vue", done:false}, {id:2, title:"angular", done:false}]}
  }
  //데이터를 추가하는 함수
  add = (item) => {
    //react는 prosp는 수정할 수 없고
    //state는 수정이 가능하지만 원본을 직접 수정하는 것은 안되고
    //setState 메서드를 이용해서만 수정이 가능

    //배열에 데이터를 추가하기 위해서 state의 배열을 복사 
    const thisItems = this.state.item;

    //item의 id와 done값을 설정
    item.id = "ID_" + thisItems.length;
    item.done = false;

    //복사한 데이터에 데이터를 추가
    thisItems.push(item)
    //복사한 데이터를 다시 state에 적용
    this.setState({items:thisItems});
  }

  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스 
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야 함. 
    //key를 설정하지 않으면, 출력에는 문제가 없지만 콘솔에 에러가 출력됨.
    let display = this.state.item.length >0 && (
      <Paper style = {{margin:16}}>
        <List>
          {this.state.item.map((item, idx) =>(
            <ToDo item={item} id={idx}/>

          ))}
        </List>
      </Paper>
    )
    return(
      <div>
        <Container maxWidth="md">
          <AddToDo add ={this.add}/>
          {display}
        </Container>
      </div>
    )
  }
}

export default App;