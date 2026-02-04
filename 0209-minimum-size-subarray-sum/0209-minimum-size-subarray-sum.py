class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)

        left = 0
        window_sum = 0

        minLen = float('inf')

        for right in range(n):
            window_sum += nums[right]

            while window_sum >= target:
                minLen = min(minLen, right - left + 1)

                window_sum -= nums[left]
                left += 1

        return minLen if minLen != float('inf') else 0