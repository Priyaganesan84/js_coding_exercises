export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	return nums.map((nums) => nums * nums); 
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
		if (words.length === 0)
		{
		  return '';
		}
	  
		let camelcaseStr = words[0];
	  
		for (let i = 1; i < words.length; i++) {
		  const word = words[i];
		  const captialWord = word.charAt(0).toUpperCase() + word.slice(1);
		  camelcaseStr += captialWord;
		}
	  
		return camelcaseStr;
	  }
	  
	  
	  


export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let totSubjects = 0;
    for (let i = 0; i < people.length; i++)  
	 {
		totSubjects += people[i].subjects.length;
     }
  return totSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	for(let i =0; i < menu.length; i ++) // iterate over each menu item
	{
		if(menu[i].ingredients.includes(ingredient)) // check for the menu ingredient includes expected ingredient
		{
		return true;                          // return true
		}
	}
	return false;
}
      




export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
 	const duplicates = []; //  creating empty duplicate array to store the values
	// iterate over  arr1 using for loop. eg arr1[0],arr[1],arr[2],arr[3],arr[4],arr[5] => 1, 55, 4, 3, 7, 8 
	//so array length is 6.
	
     for (let i = 0; i < arr1.length; i++) {
		//check using include method if arr2 contains any value that matches arr1
		// Before pushing into duplicates array checking if the duplicate array includes any same value of arr[1] 

       if (arr2.includes(arr1[i]) && !duplicates.includes(arr1[i])) 
	   {
         duplicates.push(arr1[i]);
       }
    }
	//while returning sorting the array in ascending order using sort function
  return duplicates.sort((a, b) => a - b);
}
