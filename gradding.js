

function grading(grades) {
    let grade=[]


for (let i = 0; i < grades.length; i++) {
     grade = grades[i];
     let fiveMultiple = grade

    if ( grade % 5 == 0 ) {

        grades[i] = grade;

        continue;

    }

    if (grade < 38) {
        grades[i] = grade;
        
    }

    while(fiveMultiple % 5 != 0)
    {
        fiveMultiple ++;
        
    }
    let diffrence=   fiveMultiple-grade
    

    if( grade >= 38 && grade % 5 != 0 && diffrence < 3 )
    {
    
        grades[i] = grade + diffrence
    
    }
    
      
    }
 
   
         return grades;
        }
