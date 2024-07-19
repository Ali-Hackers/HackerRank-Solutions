
   function timeconversion(s) {
    
      let hour = s[s.length -10]+s[s.length -9] 
      let mint=s[s.length -8 ]+s[s.length -7]+s[s.length -6]
     
      let sec=s[s.length -5 ]+s[s.length -4]+s[s.length -3]
      let daynight=s[s.length -2 ]+s[s.length -1]
      if (daynight == 'AM' && hour=='12'  ) {
      hour='0'+'0'
      }
      if (daynight == 'AM' && hour>'12') {
         hour =Number(hour)-12  
      }
        
      
      if (daynight == 'PM' && hour<12) {
     hour =12+Number(hour)  
      }
      
      return hour+mint+sec+daynight
   }
