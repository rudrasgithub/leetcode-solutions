class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxlen = 0
        hashmap = [-1] * 256
        n = len(s)
        l = r = 0
        while r < n:
            if hashmap[ord(s[r])] != -1 and hashmap[ord(s[r])] >= l:
                l = hashmap[ord(s[r])] + 1
            maxlen = max(maxlen, r - l + 1)
            hashmap[ord(s[r])] = r 
            r += 1
        return maxlen