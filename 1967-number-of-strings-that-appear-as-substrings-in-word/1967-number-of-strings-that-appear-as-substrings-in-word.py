class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        n = len(word)
        count = 0

        for substring in patterns:
            m = len(substring)

            for start in range(n - m + 1):
                if word[start:start + m] == substring:
                    count += 1
                    break
    
        return count