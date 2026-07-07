class Solution:
    def sumAndMultiply(self, n: int) -> int:
        x = 0
        total = 0

        for d in str(n):
            digit = int(d)

            if digit != 0:
                total += digit
                x = x * 10 + digit

        return x * total