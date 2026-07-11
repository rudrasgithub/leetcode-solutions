class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        satisfied_customers = 0
        n = len(customers)

        for i in range(n):
            if(grumpy[i] == 0):
                satisfied_customers += customers[i]
        
        unsatisfied_customers = 0
        for i in range(minutes):
            if(grumpy[i] == 1):
                unsatisfied_customers += customers[i]

        left = 0
        remaining_customers = unsatisfied_customers
        for right in range(minutes, n):
            if(grumpy[right] == 1):
                unsatisfied_customers += customers[right]
            if(grumpy[left] == 1):
                unsatisfied_customers -= customers[left]
            
            left += 1
            remaining_customers = max(remaining_customers, unsatisfied_customers)

        return satisfied_customers + remaining_customers