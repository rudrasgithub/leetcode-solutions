class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 0
        n = len(s)
        l = 0

        hashmap = {}

        for r in range(n):
            if s[r] in hashmap and hashmap[s[r]] >= l:
                l = hashmap[s[r]] + 1

            hashmap[s[r]] = r
            maxLen = max(maxLen, r - l + 1)
            
        return maxLen
