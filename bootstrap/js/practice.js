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
function getParamenters(){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	console.log(r);
	console.log(JSON.stringify(r));
}
arr.reverse();

function subOnClick(){
	var h=document.getElementsByTagName('input');
	var v1=h[1].value;
	var v0=h[0].value;
	 h[1].value=v0;
	 h[0].value=v1;
	console.log(v1);
}
function restr(str) {

    return str.split('').reverse().join('');

}
