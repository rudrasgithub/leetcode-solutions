/**
 * @param {number[]} nums
 * @return {number}
 */
var minArraySum = function(nums) {
    const MAX = 100000;

    // mark existing numbers
    const exists = Array(MAX + 1).fill(false);

    for (let x of nums) {
        exists[x] = true;
    }

    let ans = 0;

    for (let x of nums) {

        // find smallest divisor present in array
        let best = x;

        for (let d = 1; d * d <= x; d++) {

            if (x % d === 0) {

                // divisor d
                if (exists[d]) {
                    best = Math.min(best, d);
                }

                // paired divisor
                let other = x / d;

                if (exists[other]) {
                    best = Math.min(best, other);
                }
            }
        }

        ans += best;
    }

    return ans;
};