function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>a-b);
	let sum = 0;
	const a = arr.map((ele,ind)=>{
		sum += ele;
		return sum;
	})
	let mnCost = 0;
	for(let i=0;i<a.length;i++){
		mnCost += a[i];
	}
	return mnCost;
}

module.exports=mincost;
