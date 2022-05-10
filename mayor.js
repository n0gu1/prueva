function sumard() {
    try {
        let d = parseFloat(document.getElementById("debe").value) || 0;
        dd = parseFloat(document.getElementById("debe2").value) || 0;
        ddd = parseFloat(document.getElementById("debe3").value) || 0;
        dddd = parseFloat(document.getElementById("debe4").value) || 0;
        ddddd = parseFloat(document.getElementById("debe5").value) || 0;
        dddddd = parseFloat(document.getElementById("debe6").value) || 0;

        document.getElementById("total").value = d + dd + ddd + dddd + ddddd + dddddd;
            
        } catch (e) {}
}

function sumarh() {
    try {
        let h = parseFloat(document.getElementById("haber").value) || 0;
        hh = parseFloat(document.getElementById("haber2").value) || 0;
        hhh = parseFloat(document.getElementById("haber3").value) || 0;
        hhhh = parseFloat(document.getElementById("haber4").value) || 0;
        hhhhh = parseFloat(document.getElementById("haber5").value) || 0;
        hhhhhh = parseFloat(document.getElementById("haber6").value) || 0;
    
        document.getElementById("total2").value = h + hh + hhh + hhhh + hhhhh + hhhhhh;
            
        } catch (e) {}
    }


// r = document.getElementById("total").value
// rr = document.getElementById("total2").value

// resultado = document.getElementById("diferencia").value = r - rr;
// resultado2 = document.getElementById("diferencia2").value = r - rr;

// if (resultado > resultado2){
//     document.getElementById("diferencia").value = resultado;
        
// } else (document.getElementById("diferencia2").value = resultado2); {

// }


// if (document.getElementById("total").value > document.getElementById("total2").value){
//     document.getElementById("diferencia").value = document.getElementById("total").value;

// } 
// else (document.getElementById("diferencia2").value = document.getElementById("total2").value); 
