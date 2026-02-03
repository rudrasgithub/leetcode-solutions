class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxCount = 0
        curr_count = 0

        for i in nums:
            if i == 1:
                curr_count += 1
                maxCount = max(maxCount, curr_count)
            else:
                curr_count = 0
                
        return maxCount