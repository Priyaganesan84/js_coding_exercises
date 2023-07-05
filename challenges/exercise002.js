export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	let fillings = sandwich.fillings;
    return fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	const city = person.city;
	if(city == "Manchester")
	{
		return true;
	}
	else
	{
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	return Math.ceil(people/40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	/* filter method used to create new array contains retun the count based upon animal value sheep */
    return arr.filter(animal => animal === 'sheep').length; 
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	let personMCode= person.address.postCode;
	let personCity = person.address.city;
	console.log(person.address.postCode);
	if(personMCode.startsWith('M') && personCity != 'Manchester')
	{
		  return false;
	}
	else if(personMCode.startsWith('M'))
	{
		 return true;
	}

	else if(!personMCode.startsWith('M'))
	{
		return false;
	}
}
