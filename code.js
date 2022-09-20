// 01
document.querySelectorAll("h2.crayons-subtitle-2")[1].innerHTML="Lourdhu Princy";
document.querySelectorAll(".color-base-70")[1].innerText="I am a JS Web Developer";

// 02
let items=document.querySelectorAll("span.as-imagegrid-item-title");
let span=document.querySelectorAll("span.as-imagegrid-item-title span");
span.forEach((el)=>el.remove());
let arr=[];
items.forEach((el)=>arr.push(el.innerText));
console.log(arr);
//  ans: (7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

// 03
const section=document.createElement("section");
const head=document.createElement("h3");
section.className='parent';
head.textContent="My New FAQ";
section.appendChild(head);
document.querySelector(".accordition-homepage").appendChild(section);

// 04
document.querySelector(".customer-support a").innerText="+91 6366256689";

// 05
let products=document.querySelectorAll(".mytabs .diwali-deals-product-sale-btn");
for(let p of products){
    p.innerText="Check Out";
};

// 06
const button=document.querySelector(".searchinput___19uW0");
button.addEventListener('mouseover', ()=>button.style.backgroundColor="red");

// 07
function submit(){
    document.querySelector("#hp-search-input").value="submit()";
    document.querySelector("#hp-search-form").submit();
};
submit();

// 08
let lang=document.querySelectorAll("#SIvCob a");
for(let i=0; i<lang.length; i++){
    if(i%2==0){
        lang[i].remove();
    }
};

// 09
let h1=document.querySelector(".display-heading-1");
h1.style.fontFamily="monospace";
h1.style.color="#b1361e";

// 10
let btn=document.querySelectorAll(".login-btn-text");
for(let el of btn){
    el.addEventListener("mouseover", ()=>el.style.backgroundColor="red");
};

// 11
let logo=document.querySelector(".logo span");
logo.style.backgroundImage="url('https://ineuron.ai/images/ineuron-logo.png')";

// 12
let btns=document.querySelectorAll("a.btn");
btns.forEach((el)=>el.style.backgroundColor="blue");

// 13
document.querySelector(".fl-module-content h1 span").innerHTML="JSBOOTCAMP";

// 14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize="80px";

// 15
let h3=document.querySelectorAll("h3.ps-title");
h3.forEach((el)=>el.style.textAlign="right");

// 16
document.querySelector("h4.section-title_title__VEDfK").innerHTML="Start with Scratch";

// 17
let buy=document.querySelectorAll("a.btn-large");
buy[0].remove();
document.querySelectorAll(".btn-container")[0].innerHTML=new Date();

// 18
document.querySelector(".p-footer").style.backgroundColor="orange";

// 19
let image=document.querySelector("img.logo").src;
console.log(image);
// ans: https://in.canon/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png

// 20
let data=document.querySelectorAll("h3.desc");
data.forEach((el)=>el.style.color="orange");