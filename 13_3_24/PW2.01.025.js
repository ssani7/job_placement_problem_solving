const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const max = Math.max(...nums);
const min = Math.min(...nums);

const expected = [];

for (let i = min; i <= max; i++) {
	if (!nums.includes(i)) {
		expected.push(i);
	}
}

console.log(expected);
