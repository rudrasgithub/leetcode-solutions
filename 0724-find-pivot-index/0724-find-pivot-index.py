class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left = 0
        right = sum(nums)

        for i in range(len(nums)):
            if left == right - nums[i] - left:
                return i
            left += nums[i]
        
        return -1