// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	//changes the first letter to captial letter and slice function appends remaining letters to word
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	/* Display First Letter of firstName and Surname as Intials */
	let intial = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
	return intial;
	
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!
	let newPrice;
	/*calculate vatPrice with vatRate*/
	let vatPrice = (vatRate/100)*originalPrice;
	newPrice = originalPrice + vatPrice; // calculate newPrice
	//checks for decimal value
	if (newPrice % 1 !== 0)
	{
		  return parseFloat(newPrice.toFixed(2));

	}
	console.log("wholenumber");
	return  Math.floor(newPrice);

}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	//add your code
	let reductionPercent = (reduction/100) * originalPrice;
	let salePrice = originalPrice - reductionPercent;
	if(salePrice %1 !== 0)
	{
		return parseFloat(salePrice.toFixed(2));
	}
	else
	{
	    return salePrice;
	}
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	let middleIndex = Math.floor(str.length /2); // built in js method to round of nearest value
	let middlecharc;
	if(str.length % 2 == 0) //check if reminder is 0
	{
		//slice method returns copy of values from original array with start,end index
		// for eg middleindex value is 4 letter word(TALE) (4/2 = 2); slice method retrives (2-1,2+1) i.e(1,2) (A,L)
		middlecharc = str.slice(middleIndex -1 , middleIndex +1) ; 
		return middlecharc;
	}
	else
	{
         middlecharc = str.charAt(middleIndex);
		 return middlecharc;
	
	}
	 
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	var reversedWord = ''; // empty string
    for (var i = word.length - 1; i >= 0; i--) // lopping over the word length -1 
	{
       // += appends the reversdWord + characterAt(specific index)
       reversedWord += word.charAt(i);
      }
     return reversedWord;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
	if (words.length > 1) {
		for (var i = 0; i < words.length; i++) {
		  var word = words[i];
		  var reversedWord = reverseWords(word);
		  words[i] = reversedWord;
		}
	  } else if (words.length === 1) {
		var word = words[0];
		var reversedWord = reverseWords(word);
		words[0] = reversedWord;
	  }
	return words;
}
	export function reverseWords(word) 
	{
	  var reversedWord = '';
	  for (var i = word.length - 1; i >= 0; i--) {
		reversedWord += word.charAt(i);
	  }
	  return reversedWord;
	
	
	}

	
	


export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
	// user.type is linux then assign values to user by using filter method. Filter method creates new array with elements from  original array if the conditions statisfies
	let linuxUserNumber = users.filter(user => user.type === "Linux");
	if(linuxUserNumber == 0)
	{
		return 0;
	}
	else
	{
	return linuxUserNumber.length;
	}
	
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!

	let sum = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
    let mean = sum / scores.length
	if(mean %1 !== 0)
	{
		return parseFloat(mean.toFixed(2));  // parsefloat return values in float.i.e two decimal points specified in tofixed argument
	}
	else
	{
	    return mean;
	}
   return mean;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
	if (n % 3 === 0 && n % 5 === 0) 
	{
		return "fizzbuzz";
	  }
	  else if (n % 3 === 0) 
	  {
		return "fizz";
	  } else if (n % 5 === 0)
	   {
		return "buzz";
	  } else 
	  {
		return n;
	  }
}
