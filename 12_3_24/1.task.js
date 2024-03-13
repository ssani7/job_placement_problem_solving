const arr = [7, 1, 5, 3, 6, 4];

const maxProfit = (arr) => {
	let minBuy = arr[0];
	let index = 0;
	arr.forEach((elem, i) => {
		if (elem < minBuy) {
			minBuy = elem;
			index = i;
		}
	});

	if (index == arr.length - 1) return 0;

	const remaining = arr.slice(index, arr.length - 1);
	const maxSell = Math.max(...remaining);
	const profit = maxSell - minBuy;
	return profit;
};

const profit = maxProfit(arr);
console.log(profit);
