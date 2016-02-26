/**
 * Created by Administrator on 2016/2/26.
 */
window.onload=function(){
    document.getElementById('btn').addEventListener('click',function(){
        alert('为什么点我')
    });

    setInterval(function(){
        var xhr=new XMLHttpRequest();
        xhr.open('GET','/clock',true);
        xhr.onload=function(){
            if(this.status==200){
                var oClock=document.getElementById('clock');
                oClock.innerHTML=this.responseText;
            }
        }
        xhr.send();
    },1000)
}
