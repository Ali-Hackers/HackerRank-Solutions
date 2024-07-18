
   function compareTriplets(a, b){
    let alicepoint =0
    let bobpoint = 0
    let candidatePoints = []
 
    for (let i = 0; i < a.length; i++)
    {
        if ( a[i] > b[i])
             {
                alicepoint++;                
            }

            if(a[i] < b[i])
            {
                bobpoint++;
            } 
    }

    candidatePoints[0] = alicepoint
    candidatePoints[1] = bobpoint

   return candidatePoints
}

