class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def canShip(cap):
            used_days = 1
            rem = cap

            for weight in weights:
                if weight <= rem:
                    rem -= weight
                else:
                    used_days += 1
                    rem = cap - weight
                    
            return used_days <= days

        low = max(weights)
        high = sum(weights)

        while low <= high:
            mid = (low + high) // 2

            if canShip(mid):
                high = mid - 1
            else:
                low = mid + 1
        
        return low

