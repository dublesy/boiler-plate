import React, { useEffect } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';

function LandingPage(props) {

    //const navigate = useNavigate();

    useEffect(() => { // 인자를 넣지 않고 생략해버리면 dom이 변화할 때마다 무조건적으로 해당 useEffect를 실행한다.
        axios.get('/api/hello')
        .then(response => {console.log(response)})
    }, []); //마지막 부분에 인자를 붙여 넣을 수 있는데 해당 인자를 []로 해두면 한번만 실행하고, 스테이트가 변하더라도 해당 함수를 실행하지 않는다.
    //안에 변수를 넣으면 해당 변수가 변화할 때마다 useEffect를 실행한다.
    // useEffect 의 return 부분에 로직을 넣게되면 컴포넌트가 unMount 될 때 실행되는 로직 
    // componentWillUnmount 가 수행이 된다.
    
    const onClickHandler= () => {
        axios.get('/api/users/logout')
        .then(response =>{
            if(response.data.success){
                props.history.push("/login");
            }else{
                alert("로그아웃 하는데 실패");
            }
            //console.log(response.data);

        });
    }

    return (
        <div sytle={{ 
            display : 'flex', justifyContent: 'center', alignItems:'center',
            width:'100%', height: '100vh'
        }} >
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    ) 
}

export default LandingPage