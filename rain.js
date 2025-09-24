const container = document.getElementById("rain");

for (let i=0; i<100; i++){
    const drop = document.createElement("div");
    drop.classList.add("p1");
    container.appendChild(drop);

    let x=Math.random() * container.clientWidth;
    let y=Math.random() * container.clientHeight;

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
