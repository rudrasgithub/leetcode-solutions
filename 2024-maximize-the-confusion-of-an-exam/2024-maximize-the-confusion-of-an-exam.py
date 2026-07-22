class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        def maxConsecutiveKeys(n, answerKey, key, k):
            l = 0
            maxLen = 0
            window_keys = 0

            for r in range(n):
                window_keys += (answerKey[r] == key)

                while window_keys > k:
                    window_keys -= (answerKey[l] == key)
                    l += 1

                maxLen = max(maxLen, r - l + 1)
            
            return maxLen
        n = len(answerKey)

        return max(maxConsecutiveKeys(n, answerKey, 'T', k), maxConsecutiveKeys(n, answerKey, 'F', k))