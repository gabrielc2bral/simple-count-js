

let contador = 0;

function increment(){
    contador = contador + 1;
    document.getElementById("contador").innerText = contador;
}
function decreaseOne(){
    if(contador>0){
        contador = contador - 1;
        document.getElementById("contador").innerText = contador;  
    }
}

function decrease(){
    contador = 0;
    document.getElementById("contador").innerText = contador;
}