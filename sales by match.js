
    function sockMerchant(n, ar) {
        let colorCount = {};
        let a = []
        let color=0
        for (let i = 0; i < n; i++) {

             color = ar[i];
            if (colorCount[color]) {
                colorCount[color]++;
                a.push(color)

            } else {
                colorCount[color] = 1;
            }
        }
        
        let pairs = 0;
        console.log(colorCount[color]) 
        for (let count in colorCount) {
         
            pairs += Math.floor(colorCount[count] / 2);
            

        }
        
        re
    }

    let n = 9;
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    console.log(sockMerchant(n, ar));

