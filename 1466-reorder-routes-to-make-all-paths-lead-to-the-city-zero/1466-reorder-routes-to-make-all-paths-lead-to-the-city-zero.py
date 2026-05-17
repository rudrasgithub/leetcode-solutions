from collections import deque
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = [[] for _ in range(n)]

        for a, b in connections:
            graph[a].append((b, 1))
            graph[b].append((a, 0))

        queue = deque([0])
        visited = set([0])
        changes = 0

        while queue:
            current = queue.popleft()

            for neighbor, cost in graph[current]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    changes += cost
                    queue.append(neighbor)

        return changes