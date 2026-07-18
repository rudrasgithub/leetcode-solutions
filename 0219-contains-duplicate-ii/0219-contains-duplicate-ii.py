class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hashmap = {}

        if k == 0:
            return False

        n = len(nums)
        l = 0
        for i in range(n):
            if i > k:
                hashmap[nums[l]] -= 1
                if hashmap[nums[l]] == 0:
                    del hashmap[nums[l]]
                l += 1

            if nums[i] in hashmap:
                return True
            else:
                hashmap[nums[i]] = 1
        
        return False