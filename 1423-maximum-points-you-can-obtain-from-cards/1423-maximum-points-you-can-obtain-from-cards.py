class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        window_size = n - k
        window_sum = sum(cardPoints[:window_size])

        totalPoints = sum(cardPoints)
        maxScore = totalPoints - window_sum

        for i in range(window_size, n):
            window_sum += cardPoints[i] - cardPoints[i-window_size]
            maxScore = max(maxScore, totalPoints - window_sum)

        return maxScore