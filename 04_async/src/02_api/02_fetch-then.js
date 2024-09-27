

const ApiConponent = () => {

    const callApi = () => {
        fetch(" https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response); // 우리가 받은거 고대로 ㅊ출력하는거. 근데 이거는 별별 내용 다나오는거임.
            return response.json(); // json 은 body 에 들어있는 값만(우리가 필요한) 뽑아준다.==> 우리가 필요한 데이터만 꺼내는 구문
        })
        .then(data => {
            console.log(data);
        })
        .catch(error=>{
            console.log("API 호출 중 오류 발생 ~!~!",error);
        })
    }


    return(
        <>
        <button onClick={callApi}>api 호출 !</button>
        </>

    )

    
}
export default ApiConponent;