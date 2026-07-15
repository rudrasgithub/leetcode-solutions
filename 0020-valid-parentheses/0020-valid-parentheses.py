from collections import deque
class Solution:
    def isPair(self,a,b):
        return (a=='(' and b==')') or (a=='[' and b==']') or (a=='{' and b=='}')
    def isValid(self, s: str) -> bool:
        if len(s)==1:
            return False
        stack=deque()
        for i in s:
            if i=='(' or i=='{' or i=='[':
                stack.append(i)
            else:
                if len(stack)==0:
                    return False
                elif self.isPair(stack[-1],i):
                    stack.pop()
                    continue
                return False
        if len(stack)==0:
            return True
        return False
