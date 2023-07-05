// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //changes the first letter to captial
	                                                                        // letter and adds remaining letters to word
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
	let middleIndex = Math.floor(str.length /2);
	let middlecharc;
	if(str.length % 2 == 0)
	{
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
	var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
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
		return parseFloat(mean.toFixed(2));
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
