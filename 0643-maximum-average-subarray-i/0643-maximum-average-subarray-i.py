class Solution:
    def findMaxAverage(self, arr: List[int], k: int) -> float:

        n = len(arr)

        window_sum = 0

        for i in range(k):
            window_sum += arr[i]

        maxAvg = window_sum / k

        for i in range(k, n):
            window_sum += arr[i] - arr[i-k]
            maxAvg = max(maxAvg, window_sum / k)

        return maxAvg