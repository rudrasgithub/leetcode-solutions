class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        
        freq = {}
        window_sum = 0

        for i in range(k):
            window_sum += nums[i]
            freq[nums[i]] = freq.get(nums[i], 0) + 1

        left = 0
        max_distinct_sum = window_sum if len(freq) == k else 0
        
        for right in range(k, n):
            freq[nums[left]] -= 1
            if freq[nums[left]] == 0:
                del freq[nums[left]]
                
            window_sum += nums[right] - nums[left]

            freq[nums[right]] = freq.get(nums[right], 0) + 1

            if(len(freq) == k):
                max_distinct_sum = max(max_distinct_sum, window_sum)

            left += 1

        return max_distinct_sum