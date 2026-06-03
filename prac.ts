// write a program to add two number

const sum = (a:number, b:number):number => {
	return a+b
}

//write a program to calculate avg that takes array of nos. as parameters and return avg of those numbers

const avg = (a:number[]): number => {
	const sum = a.reduce((total, num) => total + num, 0);
	return sum / a.length;
	
}


const arr : number[] = [1,2,3,4,5];
console.log(avg(arr));
