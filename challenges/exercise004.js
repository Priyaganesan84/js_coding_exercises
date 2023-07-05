export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(nums => nums < 1); 
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	return names.filter(names => names.charAt(0) === char) // filter create new array of names when matches the condition charAt(0)== given character
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	return words.filter(words => words.startsWith('to ')); // check if it verb if it startswith to with a space to differentiate from normal word for eg tower
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(nums => Number.isInteger(nums)); // isInteger function checks for integer value
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	for(var i=0; i < users.length; i++)
	{
		return users.map(user => user.data.city.displayName); // map is type of collection to hold array of city diaply name
	}

}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.map (nums => parseFloat(Math.sqrt(nums).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	// Your code here
	return sentences.filter(sentences => sentences.toLowerCase().includes(str));

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	const longestSides = [];
	//iterate using for loop each triangle data.
   for (let i = 0; i < triangles.length; i++) {
    const triangle = triangles[i];
    const longestSide = Math.max.apply(null, triangle); //math.max.apply method used to find the maximum value side of triangle
    longestSides.push(longestSide); // results are pushed into new array.
  }
  return longestSides;
}
