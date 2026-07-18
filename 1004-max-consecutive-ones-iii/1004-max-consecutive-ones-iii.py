class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        maxLen = 0
        n = len(nums)
        l = 0
        zeros = 0

        for r in range(n):
            if nums[r] == 0:
                zeros += 1
            
            while zeros > k:
                if nums[l] == 0:
                    zeros -= 1
                l += 1

            maxLen = max(maxLen, r - l + 1)
        
        return maxLen