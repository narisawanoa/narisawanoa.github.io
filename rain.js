const container = document.getElementById("rain");

for (let i=0; i<150; i++){
    const drop = document.createElement("div");
    drop.classList.add("p1");
    container.appendChild(drop);

    let x=Math.random() * container.clientWidth;
    let y=Math.random() * container.clientHeight;

    const o = Math.random()*100-30;
    drop.style.backgroundColor = `rgba(19,0,77, ${o}%)`

    function move(){
     y++;

     if (y>container.clientHeight){
        y = Math.random() * container.clientHeight;
        x = Math.random() * container.clientWidth;
     }

     drop.style.transform= `translate(${x}px, ${y}px)`;
     requestAnimationFrame(move);
    }
     
    move();
}
