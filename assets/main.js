
let list=document.querySelectorAll(".navigation li")

function activeLink() {
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

//menu

let toggle=document.querySelector(".toggle")
let navigation=document.querySelector(".navigation")
let main=document.querySelector(".main")

toggle.onclick=function(){
    navigation.classList.toggle("active")
    main.classList.toggle("active")
}


// api
// let request=new XMLHttpRequest()
// request.open("GET","https://jsonplaceholder.typicode.com/posts")
// request.responseType="json"
// request.send()
// request.onload=function(){
//     let posts=request.response

//     for(post of posts){
//         document.getElementById("post").innerHTML +=`<h1>${post.title}</h1>`
//         console.log(post.body)
//     }
// }








