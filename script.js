const mele = [
    { varieta: "Varietà 1", peso: 10, diametro: 4 },
    { varieta: "Varietà 2", peso: 13, diametro: 16 },
    { varieta: "Varietà 3", peso: 4, diametro: 23 },
    { varieta: "Varietà 4", peso: 11, diametro: 6 },
    { varieta: "Varietà 5", peso: 2, diametro: 17 },
    { varieta: "Varietà 6", peso: 5, diametro: 10 },
    { varieta: "Varietà 7", peso: 7, diametro: 9 },
    { varieta: "Varietà 8", peso: 3, diametro: 8 },
    { varieta: "Varietà 9", peso: 6, diametro: 27 },
    { varieta: "Varietà 10", peso: 14, diametro: 4 },
  ];
  
  let pesoTotale=0;

//   somma
  for (i=0; i<mele.length; i++){
      pesoTotale += mele[i].peso; 
      
  }

//   media

let media = pesoTotale/mele.length



console.log(pesoTotale);
console.log(media)

// Dividi in due array separati le mele che misurano meno o più di 15cm di diametro.
let piccole=[];
let grandi=[];

for (i=0; i<mele.length; i++){
    let mela= mele[i].varieta;
    if(mele[i].diametro < 15){
        piccole.push(mela);
    }else{
        grandi.push(mela);
    }
       

}

console.log(piccole)
console.log(grandi)