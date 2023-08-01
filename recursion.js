
function recursion(num) {
	if (num === 1) {
		return 1
	} else {
		// 5 * recursion(4) > 5 * 24 = 120
					// 4 * recursion(3) > 4 * 6 = 24
								// 3 * recursion(2) > 3 * 2 = 6
											// 2 * recursion(1)>> 1 > 2 * 1 = 2
		return num * recursion(num - 1)
	}
}

recursion(5)
