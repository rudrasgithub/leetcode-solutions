# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def height(root):
    if root == None: 
        return 0

    lh = height(root.left)
    rh = height(root.right)

    return 1 + max(lh, rh)

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameter = 0

        def diameterOfTree(root):
            if root == None:
                return
            
            lh = height(root.left)
            rh = height(root.right)

            self.diameter = max(self.diameter, lh + rh)

            diameterOfTree(root.left)
            diameterOfTree(root.right)

        diameterOfTree(root)
        return self.diameter
        