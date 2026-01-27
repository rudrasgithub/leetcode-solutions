class Solution:
    def sortColors(self, arr: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        low = mid = 0
        high = len(arr) - 1

        while mid <= high:
            if arr[mid] == 0:
                arr[mid], arr[low] = arr[low], arr[mid]
                low += 1
                mid += 1
                
            elif arr[mid] == 1:
                mid += 1

            else:
                arr[mid], arr[high] = arr[high], arr[mid]
                high -= 1

        return arr