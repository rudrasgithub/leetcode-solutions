class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        # 1. store vowel count
        # 2. assign maxvowel count as stored one
        # 3. iterate through k, n
        #     3.1 check next element vowel or not
        #     3.2 check left element vowel or not 
        #     3.3 update vowel_count + (right, left) 
        #     3.4 update maxvowel
        # 4. return maxvowel

        left = 0
        n = len(s)

        window_sum = 0
        for i in range(k):
            if s[i] in "aeiou":
                window_sum += 1

        maxVowel_sum = window_sum
        for right in range(k, n):
            if(s[right] in "aeiou"):
                window_sum += 1

            if(s[left] in "aeiou"):
                window_sum -= 1

            left += 1
            maxVowel_sum = max(maxVowel_sum, window_sum)
        
        return maxVowel_sum