const nums = [1, 3, 4, 2, 2];

for (let num in nums) {
	const duplicates = nums.filter((n) => n == num);
	if (duplicates.length > 1) {
		console.log(num);
		break;
	}
}
