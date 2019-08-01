// ランダム関数でおみくじ（大吉、吉、小吉、凶）を作成


let btn = document.getElementById('btn');
let omikuji = ['大吉','吉','小吉','凶'];
btn.addEventListener(
  'click',
  function(){
    let n = Math.floor(Math.random() * omikuji.length);
    btn.textContent = omikuji[n];

    // ==========確率操作============ //
    // let n = Math.random();
    // if(n > 0.2){
    //   btn.textContent = '大吉'; 20%
    // }else if(n > 0.5){
    //   btn.textContent = '吉'; 30%
    // }else if(n > 0.95){
    //   btn.textContent = '小吉'; 45%
    // }else{
    //   btn.textContent = '凶'; 5%
    // }
    // ==========確率操作=========== //

  }
);
btn.addEventListener(
  'mousedown',
  function(){
    btn.classList.add('pressed');
  }
);
btn.addEventListener(
  'mouseup',
  function(){
    btn.classList.remove('pressed');
  }
);


