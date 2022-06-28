
function averagePair(array, avg){
   //working with ordered array
   array.sort((a, b) => a > b)

   //creating pointers
   let left=0
   let right=array.length-1

   //loopping based on a condition
   while(true){
      let tempAvg = (array[left]+array[right])/2

      //stopping my loop
      if(tempAvg === avg){
         console.log(`average pair found in: ${array[left]} and ${array[right]}`)
         return true
      }
      else if(array[left+1] === array[right]){
         console.log(`average not found`)
         return false
      }

      //moving my pointers
      else if(tempAvg > avg) right-=1
      else if(tempAvg < avg) left+=1
   }
}

averagePair([1,2,3], 2.5)
averagePair([1,3,3,5,6,7,10,12,19], 8)
averagePair([-1,0,3,4,5,6], 4.1)
averagePair([], 4)
