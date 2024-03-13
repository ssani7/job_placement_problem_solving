const list = [4, 3, 2, 7, 8, 2, 3, 1];
const set = new Set();
const duplicates = [];

list.forEach((value) => {
	if (set.has(value)) {
		duplicates.push(value);
	} else {
		set.add(value);
	}
});

console.log(duplicates);
