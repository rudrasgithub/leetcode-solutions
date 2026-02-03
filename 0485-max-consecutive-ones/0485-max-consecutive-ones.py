class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        if nums[0] == 1:
            count = 1
        else:
            count = 0

        maxCount = 0

        n = len(nums) 

        for i in range(1, n):
            if nums[i] == 0:
                maxCount = max(maxCount, count)
                count = 0
                continue
            if nums[i] == 1 and count == 0:
                count = 1
            if nums[i] == nums[i-1]:
                count += 1
        
        maxCount = max(maxCount, count)

        return maxCount