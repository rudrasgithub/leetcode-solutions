class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0

        total_subarrays = 0
        n = len(nums)
        maxProd = 1
        l = 0


        for r in range(n):
            maxProd *= nums[r]

            while maxProd >= k:
                maxProd //= nums[l]
                l += 1

            total_subarrays += r - l + 1

        return total_subarrays