/*
    promise 는 콜백 지옥과 같은 코드가 형성되지 않게 ( 비동기 통신간의 순서를 정하기 쉽게) 하는 방안으로 도입..
    
    promise 객체 생성 이유?
    1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하다..
    2. promise 객체가 제공하는 메소드를 사용하기 위함..
    ( 콜백 지옥 상황을 해소해주기 때문.. 가독성이 좋고 메소드 체이닝 방식 제공)*/ 

    const increse = (number) => {
        // promise 는 몸체에 있는 내용을 다 동기로 실행한다.. 기다려준다 !

        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const result = number + 10;
                if(result > 50){
                    const e = new Error("NumberToBig");
                    return reject(e); // 실패시에 reject 에 담아서 리턴해줄꺼고 (return 은 생략이 가능하다..)
                }
                resolve(result);// 우리가 생각한 결과값 성공일시에 resolve 에 값을 넣어준다..
            },1000)
        })
        return promise;
    }

    console.log(increse(0));
    // promice 객체는 그냥 호출하면 처리가 안되고( 값을 반환하지 않고 ) promise 약속 자체를 리턴해버린다. 
    // --> 아직 다 실행이 안되었기에 ! 

    // 체이닝
    // promise 객체는 promise 객체 안에있는 then 메소드를 사용해서 비동기 작업의 결과를 처리할 수 있다..

    increse(40).then(number => { // 그 안에 then 이라는 메소드를 사용하면 결과값을 인자로 받을 수 있다..
        // 정상적으로 실행 후 결과값을 받을 수 있게 직접 말고 안에 있는 메소드인 then 을 이용하여 값을 반환한다..
        // 그냥 promise 를 가지고 오면 아직 다 수행이 안되었기에 그래 줄꺼야 약속할게~ 기다려! 하고 그냥
        // 약속값을 리턴해주는것이다..
        // 그러니 then 메소드를 이용해 return 값을 가지고 와서 찍어주는것이다.. 

        console.log(number);
        return increse(number);
    }).then(number => { // 그 다음 then 을 또 써주면 그 
        console.log(number);
        return increse(number);

    }).catch(e=>console.log(e,"가 발생했네 !"))
    // catch 를 하면 실패의 결과인 reject 를 받는거라고 봄..

    


