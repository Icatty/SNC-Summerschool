arr=[1,0,3,4,null];
function removeVoid(arr) {
	
		narr = new Array;
		var h=0;
		l=arr.length;
		for(var k=0;k<l;k++){
			if(arr[k]==null){
				h=h+1;
				continue;
			}else{
				narr[k-h]=arr[k];
			}
		}
	

	console.log(narr);
	return arr;
}
removeVoid(arr);

console.log(removeVoid(arr));