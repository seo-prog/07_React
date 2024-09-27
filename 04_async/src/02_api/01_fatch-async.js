
/**
 *  자바스크립트를 사용하면 피료할 떄 서버에 네트워크 요청을 보내고 새로운 정보를 받아올 수 있다..
 * 과거에 ajax 를 이용해 페이지 새로고핌 없이 (비동기) 서버에 데이터를 가져올 수 있었다..
 * fetch 는 ajax 의 단점을 개선하고 좀 더 현대적인 방식으로 네트워크 요청을 처리할 수 있게 해준다ㅣ..
 * 따라서 최신 웹 어플리케이션은 fetch 를 사용하는 것을 권장한다..
 * 
 * 기본 사용 방법
 * let promise = fetch(url,[option])
 *  fetch 의 반환값은 promise 객체이다..
 * 
 * 
 * url: 접근하고자 하는 url(주소)
 * option : http method 나 headers,body 내용을 객체로 지정할 수 있다..
 * 아무것도 넣지 않으면 기본 get 요청으로 전송한다..
 * 
 * -- 샘플 api
 *  https://jsonplaceholder.typicode.com
 * 
 */

async function callApi(){

    const promise = fetch("https://jsonplaceholder.typicode.com/users");

    const response = await promise; // await 로 해야 이 값이 나오겠지? await 를 안쓰면 그냥 promise 값이 나온디ㅏ..
    console.log(response);

    console.log(`응답상태 : ${response.status}`); // response 를 찍어보면 프로퍼티로 되어있어서 .으로 꺼낼 수 있다.. 안에 프로퍼티의 키값들을 !
    // 200 이 나오면 정상적으로 응답이 되었다는 의미이다.

    console.log(`응답 헤더 `)
    for(let [key,value] of response.headers){ // key, value 로 분류해서 내보내준거임.
        // headers 는 사용자와 서버가 소통할 때 도움이 되는 정보들을 담고있다고 보면 된다.
        console.log(`${key} : ${value}`);
    }


    const json = await response.json(); // 우리가 사용 할 데이터를 
    // json 형식
    console.log(json);

    json.forEach(element => {
        console.log(element); // 회원정보에 대한 객체배열로 하나씩 빼서 쓸 수 있다..
        
    });

    /**
     *  json(javascript object notation) 은 데이터를 구조화하여 교환하기 위한 경량 데이터 형식이다..
     * 사람과 기계 모두 읽고 쓰기 쉽게 설계되어 있므며 주롷 웹 어플리케션에서 서버와 클라이언트 사이의 데이터 전송에 사용된다..
     * 특징으로는 
     * 1. 텍스트 기반의 형식
     * 2. 키-값 쌍으로 데이터 표현
     * 3. 다양한 언어에서 지원
     * 4. 다양한 데이터 타입을 지원
     * 
     */
}

callApi();

