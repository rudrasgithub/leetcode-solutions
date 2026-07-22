class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        n = len(answerKey)
        l = 0
        maxLen = 0
        count = {'T': 0, 'F': 0}

        for r in range(n):
            count[answerKey[r]] += 1

            while min(count['T'], count['F']) > k:
                count[answerKey[l]] -= 1
                l += 1

            maxLen = max(maxLen, r - l + 1)
        
        return maxLen