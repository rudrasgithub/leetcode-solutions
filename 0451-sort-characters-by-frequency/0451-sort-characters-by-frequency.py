from collections import Counter
class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)
        sorted_freq = {k:v for k, v in sorted(freq.items(), key=lambda item: item[1], reverse=True)}

        new_str = ""
        for k, v in sorted_freq.items():
            new_str += (k * v)
        
        return new_str