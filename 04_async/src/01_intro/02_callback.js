

function increse(number,callback){ 
    // callcack 함수는 함수 안에서 다른함수를 실행하는것이다..

    // setTimeout 함수는 두 가지 인수를 필요로 합니다. 
    // 하나는 우리가 실행하려는 콜백함수이고, 
    // 다른 하나는 콜백함수가 호출되기 까지의 지연 시간을 밀리초(ms) 단위로 받습니다.
    setTimeout(()=>{
        const result = number + 10;
        if(callback){ // 그냥 값이 있으면 진행이 될꺼니까 그거 확인하는 용도임
            callback(result);
        }
    },1000);
}
// 1초에 텀을 setTimeout()으로 주고 + 연산이 끝나면 callback의 유무를 확인해 수행중첩해서 구현

increse(0,
    result => {console.log(result)});
// 뒤에 함수 ㅎ화살표함수 쓴거임

/**
 *  여러번 순차적으로 결과물을 콜백함수로 전달히기 위해서는 중첩을 사용해서 호출할 수 있다..
 * 하지만 이러한 형태는 가독성도 좋자 않고, 유지보수도 힘들기 때문에 피해야 하는 패턴 중 하나이다..
 * 이러한 형태를 콜백 지옥이라고 한다..
 * 
 */

// increase(number,callback 형태로 넘겨준거임) , callback 은 매개변수로 함수를 넘겨받는다고 본다..
// 함수가 채워지면 trusy

increse(0,result=>{
    console.log(result);
    increse(result,result=>{
        console.log(result)
        increse(result,result=>{
            console.log(result)
        })
    })
})

/**
 *  그래서 비동기 함수를 왜 쓰나?
 * 
 * 1. 시간이 오래 걸리는 작업을 처리하기 위해
 * 2. 사용자 인터페이스가 중단되지 않기 위해서
 * 3. 여러 작업을 동시에 처리하기 위해 ( 실제로는 자바스크립트는 그렇게 동작하지 않지만, 이벤트 루프를 통해 동시에
 * 처리되는 것 처럼 보임)
 * 4. 콜백 지옥을 해결하기 위해서
 * 
 * 결국 느린 작업이 전체 프로그램의 흐름을 막지 않도록 하기 위함..
 * 이러면 사용자에게 더 나은 경험을 제공할 수 있고, 특히 네트워크 요청, 파일 입출력, 타이머 같은 시간이
 * 오래 걸리는 작업에서 큰 효과를 발휘한다..
 * 
 */
