class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        low = 0
        high = len(arr) - 1

        ans = float('inf')

        while low <= high:
            mid = (low + high) // 2

            if arr[mid] < arr[mid+1]:
                low = mid + 1
            else:
                ans = mid
                high = mid - 1

        return ans
