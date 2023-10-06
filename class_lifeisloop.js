function lifeIsLoop(callback, interval){
  function repeat(){
    callback();
    // 위에서 만들어진 콜백함수를 repeat함수 내부에서 실행
    setTimeout(repeat, interval);
    // 일정 시간 후 repeat함수 다시 실행
    // '내가 나를 호출'하는 형태
  }

  setTimeout(repeat, interval);

}

lifeIsLoop(function(){
  console.log("돌고");
}, 200)