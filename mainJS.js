var advArr=['1.jpg','2.jpg', '3.jpg']
var myadv= document.getElementsByTagName('img')[0]
var i=1;
function showAdd(){
    myadv.src="./" + advArr[i];
    if(i==advArr.length-1){
        i=-1;
    }
    i++;

}
setInterval(showAdd,1500)
//************************************** */


function goToform(){
    open('file:///E:/projectJs/regstration.html', '_blanck',"width=420,height=400, screenX=350,screenY=200" )
}

