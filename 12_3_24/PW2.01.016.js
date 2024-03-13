const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (arr) => {
	arr.forEach((val, i) => {
		arr.forEach((elem, j) => {
			if (elem == val && i != j) {
				arr[j] = '_';
			}
		});
	});

	return arr.sort();
};

const expectedArr = removeDuplicates(arr);
const output = expectedArr.filter((elem) => elem != '_').length;

console.log(output);
console.log('nums: ', expectedArr);
