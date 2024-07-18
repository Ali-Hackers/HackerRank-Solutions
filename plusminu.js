    
    function min(arr) {

    let n=arr.length
     let positivearr=0
    let nagitivearr= 0
    let zeroarr= 0
    let resultpos;
    let resultnag;
    let resultzero;
let finial=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) positivearr++
        if(arr[i] < 0)  nagitivearr++
        if(arr[i] == 0)  zeroarr++    
    }

   resultpos = (positivearr/n).toFixed(6)
   resultnag = (nagitivearr/n).toFixed(6)
   resultzero = (zeroarr/n).toFixed(6)
   
    finial[0]= resultpos
    finial[1]= resultnag
    finial[2]= resultzero
    return finial
   }
