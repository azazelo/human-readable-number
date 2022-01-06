module.exports = function toReadable (number) {
        const m = number.toString()[0];
         const t = number.toString()[1];
         const y = number.toString()[2];
         const o = t + y;
        const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        const arrDozens = [' ','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];   
        if(number < 20){
            const rin = arr[number];
            return rin
           } 
            else if (number <= 99){
            if (t !== "0") {
            const  ren = arrDozens[m] + " " +  arr[t] ;
             return ren;
            }
            else{
            const  ren = arrDozens[m]
             return ren;
            }
           }           
        if  (number <= 999 && (y  === "0" && t === "0")){
          const ran = arr[m] + " hundred" ;
          return ran;
          }
          else if (t === "0"){
          const ran = arr[m] + " hundred " + arr[y];
          return ran;
          }
          else if (y === "0" && t !== "0" && m !== "0"){
          const ran = arr[m] + " hundred " + arrDozens[t];
          return ran;     
          }
          else if(number < 1000 && t !== "1"){
              const ran = arr[m] + " hundred " + arrDozens[t] + " " + arr[y];
              return ran;
          }
          else if( t === "1"){
            const ran = arr[m] + " hundred " + arr[o];
            return ran;
          }
}
