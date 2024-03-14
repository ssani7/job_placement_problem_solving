const list = [2, 0, 2, 1, 1, 0];

for (let i = 0; i < list.length; i++) {
	for (let j = 0; j < list.length - i; j++) {
		if (list[j] > list[j + 1]) {
			temp = list[j + 1];
			list[j + 1] = list[j];
			list[j] = temp;
		}
	}
}

console.log(list);
