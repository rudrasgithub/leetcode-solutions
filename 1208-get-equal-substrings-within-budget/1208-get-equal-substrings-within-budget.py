class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        maxLen = 0
        l = 0
        n = len(t)
        window_cost = 0

        for r in range(n):
            window_cost += abs(ord(s[r]) - ord(t[r]))

            while window_cost > maxCost:
                window_cost -= abs(ord(s[l]) - ord(t[l]))
                l += 1
            
            maxLen = max(maxLen, r - l + 1)
        
        return maxLen