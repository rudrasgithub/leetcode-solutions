from collections import Counter
class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)

        bucket = [[] for _ in range(len(s) + 1)]

        for k, v in freq.items():
            bucket[v].append(k)

        new_str = ""
        for v in range(len(s), 0, -1):
            for k in bucket[v]: 
                new_str += (k * v)
        
        return new_str