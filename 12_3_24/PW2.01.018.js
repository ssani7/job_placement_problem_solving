const arr = [2, 2, 1, 1, 1, 2, 2];

const findMax = (arr) => {
	let max = 'n/a';
	let maxCount = 0;
	arr.forEach((element, i) => {
		let count = 0;
		arr.forEach((val, j) => {
			if (val == element && i != j) {
				count++;
			}
		});

		if (count > maxCount) {
			maxCount = count;
			max = element;
		}
	});

	console.log(max);
};

findMax(arr);
