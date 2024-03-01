function firstNonRepeatedChar(str) {
 // Write your code here
	let count =0;
for(let i=0; i<str.length; i++){
	count =0;
	for(let j=0; j<str.length; j++){
		if(str.charAt(i)===str.charAt(j)){
			count++;
		}
	}
	if(count===1){
		return str.charAt(i);
	}

}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
