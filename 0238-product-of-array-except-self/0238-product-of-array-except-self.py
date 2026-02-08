class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)

        multiplication = 1
        nonZeroMultiplication = 1
        zeroes = 0

        for i in nums:
            multiplication *= i
            if i != 0:
                nonZeroMultiplication *= i
            if i == 0:
                zeroes += 1
            if zeroes > 1 :
                nonZeroMultiplication = 0
                
        
        res = [0] * n

        for i in range(n):
            if nums[i] == 0:
                res[i] = nonZeroMultiplication
            else:
                res[i] = multiplication // nums[i]
                
        return res