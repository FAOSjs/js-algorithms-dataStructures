function sameFrequency(numberOne, numberTwo){
   let strNumberOne = numberOne.toString();
   let strNumberTwo = numberTwo.toString();

   //creating the frequency counter object
   let frequencyCounter = {}

   //counting the frequencies
   for(let char of strNumberOne){
      frequencyCounter[char] = (frequencyCounter[char] || 0)+1
   }

   //check the frequencies (if has a number missing or left, return false)
   for(let char of strNumberTwo){
      if(!frequencyCounter[char]){
         console.log(`FALSE - Numbers: ${numberOne}, ${numberTwo} doesn't have the same frequency`)
         return false
      }
      frequencyCounter[char] -= 1
   }

   console.log(`TRUE - Numbers: ${numberOne}, ${numberTwo} has the same frequency`)

   return true
}

sameFrequency(876, 656) //false

sameFrequency(453, 453) //true

sameFrequency(99076, 07969) //true

sameFrequency(12, 1212)
