const plus =document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const img =document.getElementById("textBox3");
const flat = document.getElementById("flat");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const pass = document.getElementById("pass");
const mar1 = document.getElementById("mar1");
const mar2 = document.getElementById("mar2");
// const mar3 = document.getElementById("mar3");
let number = 0;
mar1.style.display="none";
mar2.style.display="none";
// mar3.style.display="none";

plus.addEventListener("click",function(){
    if(number<15){
        number++;
        textBox.innerHTML = number;
        
     }else{
        function　countup(){
        textBox.innerHTML = number++;}
        setInterval(countup,10);
        alert("メモリの外部転送を開始します");
        mar1.style.display="block";
        mar2.style.display="";
        // mar3.style.display="";
    }
    });

minus.addEventListener("click",function(){
    number--;
    textBox.innerHTML = number;
    
});

reset.addEventListener("click",function(){
    number = 0;
    textBox.innerHTML= 0;
});

flat.addEventListener("click",function(){
    function　countup(){
    textBox2.innerHTML = number++;}
     setInterval(countup,8);
});

img.style.display="none";
pass.style.display="none";

let mes ="ゴイゴイスー！ ゴイゴイスー！"
let count =0;//文字入力
let flg = 0;//点滅

// function goi(){
//     p1.innerHTML=mes.substring(0,count+1);
//     if(count==mes.length){
//         count=0;
//     }else{
//         count++;
//     };
//     };
    //↑左から右へのfuntion

function goi(){
    if(flg == 0){//文字入力フェーズ
        p1.innerHTML = mes.substring(0,count+1);
        if(count == mes.length){
            count=0;
            flg = 1;
        }else{
            count++;
        }
    }
    else if(flg == 1){//点滅(消)
        p1.innerHTML = "　";
        flg = 2;
    }else{//点滅(有)
        p1.innerHTML = mes;
        count++;
        if(count == 5){
            flg=0;
            count=0;
        }else{
            flg=1;
        }
    }
}

let mes2 ="パスワードは“あいやしばらく”";
// let mes2 =mes2 + mes2;
let count2 = 0;
function func2(){
    p2.innerHTML=mes2.substring(count2,mes2.length);
    if(count2 == (mes2.length/2)){
        count2=0;
    }else{
        count2++;
    };
};





flat.addEventListener("dblclick",function(){
    alert("ゴイゴイスー");
    img.style.display="block";
    pass.style.display="block";
    setInterval("goi()",300);
    setInterval("func2()",500);
});

pass.addEventListener("click",function(){
    myPassWord = prompt("パスワードを入力してください","");
    if(myPassWord == "あいやしばらく"){
        myRet = confirm("ほんまにええのん？？")
        if(myRet == true){
            alert("あほやな");
        location.href="https://profile.yoshimoto.co.jp/assets/data/profile/5087/1f832ea78e47c608a5b523a6f53f9d765dca14f2.jpg";
        }else{
            alert("‘OK’　を押してや");
        }
    }else{
        alert("パスワードがちゃうんやけど？？");
    };
})

