import axios from "axios";

const callApi = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r=>r.json()).then(d=>console.log(d));
    // json으로 바꿔준거고 아래는 자동으로 바꿔주는거고!

}

const axiosCall = () => {
    // axios 는 알아서 json 처리(body만 뽑는)를 해준다..
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => console.log(res.data)); // res.data 하면 body 에 있는걸 알아서 해준다.
}

/**
 * 
 * Axios : 요청 처리에 대한 여러 가지 기능을 제공해준다..
 * 따라서 패키지 크기가 상대적으로 더 크고 무겁다..
 * 
 * Fetch : 기본 브라우저 내장 api 이다..
 * 가볍고 빠르다. 하지만 여러 처리를 수동으로 해주어야 한다..
 * 
 */

const AxoisCallComponent = () => {
    return (
        <>

        <button onClick={callApi}>fetch요청</button>
        <button onClick = {axiosCall}>axios 요청</button>

        </>
    )
}

export default AxoisCallComponent;