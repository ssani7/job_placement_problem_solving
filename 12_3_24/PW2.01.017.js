const arr = [0, 1, 0, 3, 12];

const moveZero = (arr) => {
	arr.forEach((element, i) => {
		if (element == 0) {
			arr.splice(i, 1);
			arr.push(0);
		}
	});

	console.log(arr);
};

moveZero(arr);
