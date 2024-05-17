function indexOfIgnoreCase(s1, s2) {
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
  // write your code here
	let ab=s1.indexOf(s2);
	if(ab==-1){
		return -1;
	}
	return ab;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");//
alert(indexOfIgnoreCase(s1, s2));
