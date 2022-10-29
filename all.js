const translate =document.querySelectorAll('.translate');
const big_title =document.querySelector('.big-title');
const header =document.querySelector('header');
//陰影效果，當我們滾動頁面時陰影高度會增加
const shadow =document.querySelector('.shadow');
const content=document.querySelector('.content');
const section=document.querySelector('section');
const image_container = document.querySelector(".imgContainer");
const opacity =document.querySelectorAll('.opacity');
const border = document.querySelector(".border");


let header_height =header.offsetHeight;
let section_height=section.offsetHeight;

// 監聽滾動
window.addEventListener('scroll' , ()=>{
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    // 抓data-speed資料並改變數值
    translate.forEach(element => {
        let speed =element.dataset.speed;
        element.style.transform =`translateY(${scroll * speed}px)`
    })

    opacity.forEach(element=>{
        element.style.opacity=scroll / (sectionY.top + section_height);
    })

    // 標題的不透明度值設置為這個數學公式的結果，它將根據滾動值給我們一個介於 0 和 1 之間的值
    big_title.style.opacity= -scroll / (header_height/2)+1;
    //我們所需要的只是將陰影的高度設置為這個數學公式的結果 300為css shadow的高度
    shadow.style.height=`${scroll*0.5+300}px`

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;


})