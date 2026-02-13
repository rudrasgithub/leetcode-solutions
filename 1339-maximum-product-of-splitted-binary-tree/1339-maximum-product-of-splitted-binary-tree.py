# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        sums = []

        def dfs(root):
            if not root:
                return 0

            left = dfs(root.left)
            right = dfs(root.right)

            total = left + right + root.val
            sums.append(total)

            return total

        total = dfs(root)
        res = 0
        for i in sums:
            res = max(res, i * (total - i))

        return res % (10 ** 9 + 7)