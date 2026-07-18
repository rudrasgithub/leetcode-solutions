class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        window_whites = sum(i == "W" for i in blocks[:k])
        min_opr = window_whites

        l = 0
        n = len(blocks)
        
        for i in range(k, n):
            if blocks[i] == "W":
                window_whites += 1
            if blocks[i-k] == "W":
                window_whites -= 1

            if min_opr == 0:
                return 0

            min_opr = min(min_opr, window_whites)

        return min_opr