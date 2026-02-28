class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        next_greater = {}
        stack = []
        
        for num in nums2:
            if stack and num > stack[-1]:
                smaller = stack.pop()
                next_greater[smaller] = num
        
            stack.append(num)

        while stack:
            next_greater[stack.pop()] = -1
        
        res = []
        for num in nums1:
            res.append(next_greater[num])

        return res