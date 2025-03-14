var xhr =new XMLHttpRequest();
xhr.open('GET','./data.json',false)
var res;


xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){

        res= JSON.parse(xhr.response)
         for(o in res){
            let nm=res[o].mname
            let sup=res[o].subject
            let time=res[o].Time
            let prs=res[o].Price
            let mg=res[o].imgs
        
            let h1=document.createElement('h1')
            h1.innerText=nm
            document.body.appendChild(h1)

            let p1=document.createElement('p')
            p1.innerText=sup
            document.body.appendChild(p1)

            let p2=document.createElement('p')
            p2.innerText=time
            document.body.appendChild(p2)

            let p3=document.createElement('p')
            p3.innerText=prs
            document.body.appendChild(p3) 

            let myimg=document.createElement('img')
            myimg.src=mg
            document.body.appendChild(myimg)


        
        }
        
       
         
    } 
   
}


xhr.send()

// function ma