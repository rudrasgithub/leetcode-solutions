# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        q = deque([root])       
        res = []
        flag = True

        while q:
            size = len(q)
            ans = deque()

            for _ in range(size):
                node = q.popleft()

                if flag:
                    ans.append(node.val)
                else:
                    ans.appendleft(node.val)

                if node.left: q.append(node.left)
                if node.right: q.append(node.right)

            flag = not flag
            res.append(list(ans))

        return res