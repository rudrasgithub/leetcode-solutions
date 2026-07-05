class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        def canMinimizeSum(limit):
            bag = 1
            curr_sum = 0
            
            for num in nums:
                if curr_sum + num <= limit:
                    curr_sum += num
                else:
                    bag += 1
                    curr_sum = num

            return bag <= k

        low = max(nums)
        high = sum(nums)

        while low <= high:
            mid = (low + high) // 2
            if canMinimizeSum(mid):
                high = mid - 1
            else:
                low = mid + 1
        
        return low