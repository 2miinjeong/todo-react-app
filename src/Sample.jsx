import React from "react"

//react에서 컴포넌트 클래스를 만들기 위해 component로 부터 상속을 받기 
class Sample extends React.Component{
    //화면에 출력할 내용을 리턴하는 메서드
    render(){
        return(
        <div className="Sample">
            <p>안녕하시오</p>
        </div>
        )
    }
}

export default Sample;