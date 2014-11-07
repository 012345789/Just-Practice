function oddDigitSum (integer) {
	var storage,
		sum = 0;
		storage = (integer).toString().split("");
		for (var i = 0; i < storage.length; i++) {
			if (storage[i]%2 == 1) {
				sum = +sum + +storage[i];
			}
		}
	console.log(sum + " is the sum");
	return sum;
}

oddDigitSum(909);

