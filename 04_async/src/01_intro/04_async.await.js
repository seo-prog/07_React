
/**
 *  promise : 비동기 작업의 결과를 처리하는 객체
 *  async/await : 비동기 작업을 동기적으로 실행하는 것 처럼 보이게 만드는 구문
 * --> then 이 복잡할 때 간단하게 그냥 하나의 함수로 만들어 사용하게ㅔㅆ다는 뜻
 *  then() 과 await : promise 의 결과를 사용할 때 then()을 사용하거나, async 함수 내에서 await 로 처리할 수 있다.,
 * 
 */

function increase(number){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const result = number + 10;
            if(result > 50){
                const e = new Error ("number to big");
                return reject(e);
            }
            resolve(result);
        },1000)
    })
    return promise;
}

// async : 비동기 함수를 정의
async function run(){
    // async 안에서만 await 를 사용할 수 있다.. 

    try{
        let result = await increase(1);
         // 여기서 await 가 없다면 promise 값이 반환될것이다. 그런데 await 를 적어주면 promise 작업이 끝날때까지 기다렸다가 값을 가지고 오겠다는 의미이다..
        console.log(result);
        result = await increase(2);
        console.log(result);
        result = await increase(3);
        console.log(result);
        result = await increase(4);
        console.log(result);
        result = await increase(5);
        console.log(result);
        result = await increase(6);
        console.log(result);
        return result; // 마지막의 값이 반환될것이다.. 즉 result 에 6을 넣은값이다.


    }catch(e){ // reject 를 반환하면 catch 가 받을겨 
        console.log(e,"가 발생 ~!~!~!")
    }
}

const value = async () => {
    const runValue = await run();
    console.log("value:" + runValue);
}

const result = value();
// result 를 콘솔에 찍어면 async 가 아니라 promise 가 반환된다..
// 안기다리고 바로 반환이 먼저 된다.. 얘는 비동기적 !
