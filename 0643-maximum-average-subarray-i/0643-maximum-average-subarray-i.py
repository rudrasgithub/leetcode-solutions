class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum = sum(nums[:k])
        maximum_sum = window_sum

        n = len(nums)
        left = 0
        
        for right in range(k, n):
            window_sum += (nums[right] - nums[left])
            left += 1

            maximum_sum = max(maximum_sum, window_sum)
        
        return maximum_sum / k