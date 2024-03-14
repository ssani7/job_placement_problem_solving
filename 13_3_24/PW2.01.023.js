const nums = [1, 2, 3, 4];

nums.sort((a, b) => b - a);

mult = 1;

for (let i = 0; i < 3; i++) {
	mult *= nums[i];
}

console.log(mult);
