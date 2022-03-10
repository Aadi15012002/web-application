function registeration(){
    alert("hi");
    var name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("emailId").value;
    password=document.getElementById("password").value;
    console.log(name);
    localStorage.setItem("name",name)
    localStorage.setItem("emailId",email)
    localStorage.setItem("password",password)

}
function login(){
    var email=document.getElementById("emailId").value;
    var password=document.getElementById("password").value;
    var email1=localStorage.getItem("emailId");
    var pass1=localStorage.getItem("password");
    if(email==email1&&password==pass1){
        window.location.href="C:\Users\aditi sharma\Desktop\task2 web app\userprofile.html";
    }
    else{
        alert("email and password is incorrect");
    }

}
var newsDataarr=[];
const generalbtn=document.getElementById("general");
const bussinessbtn=document.getElementById("business");
const sportsbtn=document.getElementById("sports");
const entertainmentbtn=document.getElementById("entertainment");
const technologybtn=document.getElementById("technology");
const searchbtn=document.getElementById("search");
const newsQuery=document.getElementById("newsQuery");
const newstype=document.getElementById("newsType");
const newsdetails=document.getElementById("newsdetails");
const API_KEY ="3ad45f0e6c37bb75e055ec9856e95b34";
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=us&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const GENERAL_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const BUSINESS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const TECHNOLOGY_NEWS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3ad45f0e6c37bb75e055ec9856e95b34";
const SEARCH_NEWS="https://newsapi.org/v2/everything?q=";
window.onload(function(){
     newstype.innerHTML="<h4>Headlines</h4>";
     fetchheadlines();
 });
generalbtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>general</h4>";
    FetchGeneralNews();
});
bussinessbtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>business</h4>";
    FetchbusinessNews();
});
sportsbtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>sports</h4>";
    FetchsportsNews();
});
entertainmentbtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>entertainment</h4>";
    FetchentertainmentNews();
});
technologybtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>technology</h4>";
    FetchtechnologyNews();
});
searchbtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>search : "+newsQuery+"</h4>";
    FetchQueriesNews();
});
const fetchheadlines= async()=>{
    const response=await fetch(HEADLINES_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchGeneralNews= async()=>{
    const response=await fetch(GENERAL_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
         console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchbusinessNews= async()=>{
    const response=await fetch(BUSINESS_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchsportsNews= async()=>{
    const response=await fetch(SPORTS_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchentertainmentNews= async()=>{
    const response=await fetch(ENTERTAINMENT_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchtechnologyNews= async()=>{
    const response=await fetch(TECHNOLOGY_NEWS+API_KEY);
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const FetchQueriesNews= async()=>{
    if(newsQuery.value==null)
        return;
    const response=await fetch(SEARCH_NEWS+newsQuery.value+"&apikey="+API_KEY);
    newsDataarr=[];
    if(response.status>=200 && response.status< 300){
        const myJson = await response.json();
        newsDataarr=myJson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displayNews();
}
function displayNews(){
    if(newsDataarr.length==0){
        newsdetails.innerHTML="<h5> No data found.</h5>"
        return;
    }
    newsDataarr.forEach(news =>{
        var date=news.publishedAt.split("T");
        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
        var card=document.createElement('div');
        card.className="p-2";
        var image=document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src=news.urltoimage;
        var cardbody= document.createElement('div');
        var newsheading=document.createElement('h5');
        newsheading.className="card-title";
        newsheading.innerHTML=news.title;
        var dateheading=document.createElement('h6');
        dateheading.className="text-primary";
        dateheading.innerHTML=date[0];
        var description=document.createElement('p');
        discription.className="text-muted";
        var link=document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target","_blank");
        link.href=news.url;
        link.innerHTML="read more";
        cardbody.appendChild(newsheading);
        cardbody.appendChild(dateheading);
        cardbody.appendChild(discription);
        cardbody.appendChild(link);
        card.appendChild(image);
        card.appendChild(cardbody);
        col.appendChild(card);
        newsdetails.appendChild(col);
    })
}
