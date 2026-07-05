class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        
        def canEat(speed):
            hours = 0
            for pile in piles:
                hours += ceil(pile / speed)
            
            return hours <= h
        
        low = 1
        high = max(piles)

        
        while low <= high:
            mid = (low + high) // 2
            if canEat(mid):
                ans = mid
                high = mid - 1
            else:
                low = mid + 1
        
        return ans

