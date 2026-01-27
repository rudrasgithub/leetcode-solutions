class Solution:
    def threeSum(self, arr: List[int]) -> List[List[int]]:
        arr.sort()

        n = len(arr)
        res = []

        for i in range(n):
            if i > 0 and arr[i] == arr[i-1]:
                continue

            l = i+1
            r = n - 1

            while l < r:
                total = arr[l] + arr[r] + arr[i]

                if total == 0:
                    res.append([arr[i], arr[l], arr[r]])

                    while l < r and arr[l] == arr[l+1]:
                        l += 1
                    while l < r and arr[r] == arr[r-1]:
                        r -= 1

                    l += 1
                    r -= 1

                elif total < 0:
                    l += 1
                else:
                    r -= 1

        return res