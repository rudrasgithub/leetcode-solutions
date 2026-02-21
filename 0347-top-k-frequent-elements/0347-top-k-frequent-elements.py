from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = Counter(nums)

        n = len(nums)
        buckets = [[] for _ in range(n+1)]

        for num, count in freq.items():
            buckets[count].append(num)
        
        res = []

        for i in range(len(buckets) - 1, -1, -1):
            for num in buckets[i]:
                res.append(num)
                if len(res) == k:
                    return res