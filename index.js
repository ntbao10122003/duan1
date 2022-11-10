let index=1;
function next(){
    const img=document.querySelector('.img_banner');
    const imgs=["img/1.jpg","img/2.jpg","img/3.jpg"]
    img.src=imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(next,2000)
const close=document.querySelector('.button');

console.log(close);