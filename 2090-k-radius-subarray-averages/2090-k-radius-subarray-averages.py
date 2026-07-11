class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)

        ans = [-1] * n
        window_size = 2 * k + 1
        if n < window_size:
            return ans

        prefix_arr = [0] * n
        prefix_arr[0] = nums[0]

        for i in range(1, n):
            prefix_arr[i] = prefix_arr[i-1] + nums[i]

        for center in range(k, n - k):
            left = center - k
            right = center + k

            if left == 0:
                window_sum = prefix_arr[right]
            else:
                window_sum = prefix_arr[right] - prefix_arr[left - 1]

            ans[center] = floor(window_sum / window_size)

        return ans