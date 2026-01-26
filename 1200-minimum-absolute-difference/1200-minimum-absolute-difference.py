class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()
        difference = float('inf')
        
        for i in range(1, len(arr)):
            diff = arr[i] - arr[i-1]
            difference = min(difference, diff)

        res = []

        for i in range(1, len(arr)):
            if difference + arr[i-1] == arr[i]:
                res.append([arr[i-1], arr[i]])
                
        return res