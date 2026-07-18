class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        def atMostK(n, nums, k):
            hashmap = {}
            l = 0
            tot_subarrays = 0
            
            for r in range(n):
                hashmap[nums[r]] = hashmap.get(nums[r], 0) + 1

                while len(hashmap) > k:
                    hashmap[nums[l]] -= 1
                    if hashmap[nums[l]] == 0:
                        del hashmap[nums[l]]

                    l += 1

                tot_subarrays += r-l+1 

            return tot_subarrays

        n = len(nums)
        return atMostK(n, nums, k) - atMostK(n, nums, k-1)
