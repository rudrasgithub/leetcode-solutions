class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        low = 0
        high = len(letters) - 1

        ans = float('inf')

        while low <= high:
            mid = (low + high) // 2

            if letters[mid] > target:
                ans = letters[mid]
                high = mid - 1
            else:
                low = mid + 1
        
        return ans if ans != float('inf') else letters[0]