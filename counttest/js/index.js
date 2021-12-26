// ページが読み込まれたら実行
window.onload = function() {

     // オブジェクトと変数の準備
     var count_disp = document.getElementById("disp_count");  
     var count_up_btn = document.getElementById("btn_count_up");
     var reset_btn = document.getElementById("btn_reset");
     var count_value = 0;

     // カウントアップボタンクリック処理
     count_up_btn.onclick = function (){
          count_value += 1;
          count_disp.innerHTML = count_value;
     };
     // カウントアップボタンのマウスダウン処理
     count_up_btn.onmousedown = function() {
          count_up_btn.style.backgroundColor = "#00FF00";
     }
     // カウントアップボタンのマウスアップ処理
     count_up_btn.onmouseup = function() {
          count_up_btn.style.backgroundColor = "";
     }
     // リセットボタンのクリック処理
     reset_btn.onclick = function (){
          count_value = 0; count_disp.innerHTML = count_value;
     }
     // リセットボタンのマウスダウン処理
     reset_btn.onmousedown = function() {
          reset_btn.style.backgroundColor = "#00FF00";
     }
     // リセットボタンのマウスアップ処理
     reset_btn.onmouseup = function() {
          reset_btn.style.backgroundColor = "";
     }
};