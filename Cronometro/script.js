var sec=0
var min=0
var hr=0
var interval

function start(){
    watch()
    interval = setInterval(watch,1000);
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval);
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00'
}

//funcao para adicionar dois digitos na hora se for < 10
function toDigitos(digit){
    if (digit<10) {
        return('0'+digit)
    }else{
        return(digit)
    }

}

function watch(){
    sec++       //adicionando +1 na variavel sec
    if (sec==60) {
        min++   //adicionando +1 na variavel min
        sec=0   //zeranso a variavel sec
        if (min==60) {
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=toDigitos(hr)+':'+toDigitos(min)+':'+toDigitos(sec)
}
