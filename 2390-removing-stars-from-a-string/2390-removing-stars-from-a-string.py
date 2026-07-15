class Solution:
    def removeStars(self, s: str) -> str:
        stack = []

        for ch in s:
            if not stack:
                stack.append(ch)
            else:
                if ch == "*":
                    stack.pop()
                else:
                    stack.append(ch)
        
        return "".join(stack)