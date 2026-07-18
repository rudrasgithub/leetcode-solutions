class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        def atMostThreeChr(n, s, k):
            hashmap = {}
            total_substrings = 0
            l = 0

            for r in range(n):
                hashmap[s[r]] = hashmap.get(s[r], 0) + 1
                
                while len(hashmap) > k:
                    hashmap[s[l]] -= 1
                    if hashmap[s[l]] == 0:
                        del hashmap[s[l]]

                    l += 1

                total_substrings += r - l + 1

            return total_substrings
            
        n = len(s)
        return atMostThreeChr(n, s, 3) - atMostThreeChr(n, s, 2)