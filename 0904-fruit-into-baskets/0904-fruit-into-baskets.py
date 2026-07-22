class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        maxFruitsLen = 0
        l = 0
        hashmap = {}
        n = len(fruits)

        for r in range(n):
            hashmap[fruits[r]] = hashmap.get(fruits[r], 0) + 1
            
            while len(hashmap) > 2:
                hashmap[fruits[l]] -= 1
                if hashmap[fruits[l]] == 0:
                    del hashmap[fruits[l]]
                l += 1
            
            maxFruitsLen = max(maxFruitsLen, r - l + 1)

        return maxFruitsLen