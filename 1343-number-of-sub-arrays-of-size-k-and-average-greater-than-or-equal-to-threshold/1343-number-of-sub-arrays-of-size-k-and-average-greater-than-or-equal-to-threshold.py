class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        window_sum = sum(arr[:k])
        n = len(arr)
        left = 0

        total_subarrays = 1 if (window_sum / k) >= threshold else 0
        for right in range(k, n):
            window_sum += arr[right] - arr[left]

            if((window_sum / k) >= threshold):
                total_subarrays += 1
            
            left += 1

        return total_subarrays