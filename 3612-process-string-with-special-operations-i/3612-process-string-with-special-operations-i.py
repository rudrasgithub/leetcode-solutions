class Solution:
    def processStr(self, s: str) -> str:
        arr = []
        for i in s:
            if i == '#':
                arr.extend(arr)
            elif i == '*':
                if arr:
                    arr.pop()
            elif i == '%':
                arr.reverse()
            else:
                arr.append(i)
        return "".join(arr)