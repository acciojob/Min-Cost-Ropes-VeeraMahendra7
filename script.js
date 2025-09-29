function mincost(arr)
{ 
//write your code here
// return the min cost
	let mnCost = 0;
	while(arr.length > 1){
		arr.sort((a,b) => a-b);
		let first = arr.shift();
		let second = arr.shift();
		let newrope = first+second;
		mnCost += newrope;
		arr.push(newrope);
	}
	return mnCost;
}

module.exports=mincost;
