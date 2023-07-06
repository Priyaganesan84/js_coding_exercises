export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	//looping through nums array; n is next number to be found
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === n && i < nums.length - 1) {
		  return nums[i + 1];
		}
	  }
	  return null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	//initalise the count 0:0 and 1 as 0
	const count = { 0: 0, 1: 0 };
	//looping through the str length
	for (let i = 0; i < str.length; i++) {
		//str.charAt at specified index 
	  const char = str.charAt(i);
	  if (char === '0' || char === '1') {
		count[char]++; //As the loop iterates over each character, it checks if the character is "0" or "1".
		               // If it is, count[char]++ is executed, and the count value for that character is incremented by 1. 
	  }
	}
	return count;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	  let reversedNumber = 0;
       while (n !== 0) {
        const digit = n % 10;
        reversedNumber = reversedNumber * 10 + digit;
        n = Math.floor(n / 10);
  }
  return reversedNumber;
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	
	let total = 0; // Declare and initialise
  //looping through the arrs and adding them into subarray using nested for loops
   for (let subArray of arrs) {
    for (let num of subArray) {
		//using typeof function to check for num is number
      if (typeof num === 'number') {
        total += num;
      }
    }
  }
  
  return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	if (arr.length < 2) {
		return arr; // Return the original array if it has less than 2 items
	  }
	
	  const first = arr[0];
	  const last = arr[arr.length - 1];
	
	  arr[0] = last;
	  arr[arr.length - 1] = first;
	
	  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
    const lowerSearchString = searchTerm.toLowerCase(); //serachItem is changed to LowerCaseString
	// iterate in for loop each searchTerm(eg Linmon,warrington) in haystack eg [ name,
	for (let searchTerm in haystack) 
	{
		if (typeof haystack[searchTerm] === "string" && haystack[searchTerm].toLowerCase().includes(lowerSearchString)) {
		  return true;
		}
	  }
	  return false;
};



export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	 const cleanStr = str.replace(/[^\w\s]/g, ""); // Checking to ignore punctuations using regularexpression
     const words = cleanStr.toLowerCase().split(" "); //// Convert to lowercase and split into words
		const frequency = {}; //an empty frequency object is created
	    // for let loop iterates over the each words(str) array
		for (let word of words) {
				frequency[word] = (frequency[word] || 0) + 1; // Increment the word count
			}
	  
		return frequency;
	  
	  
};
