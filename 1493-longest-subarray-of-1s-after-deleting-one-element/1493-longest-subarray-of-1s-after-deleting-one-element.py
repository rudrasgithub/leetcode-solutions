class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        l = 0

        maxLen = 0
        l = 0
        zeros = 0
        for r in range(n):
            if nums[r] == 0:
                zeros += 1

            while zeros > 1:
                if nums[l] == 0:
                    zeros -= 1
                l += 1

            maxLen = max(maxLen, r - l)

        return maxLen