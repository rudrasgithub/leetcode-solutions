class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n - 1:
            return -1 

        graph = [[] for _ in range(n)]
        visited = set()

        for u, v in connections:
            graph[u].append(v)
            graph[v].append(u)
        
        def dfs(node):
            visited.add(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    dfs(neighbor)

        components = 0
        
        for computer in range(n):
            if computer not in visited:
                components += 1
                dfs(computer)

        return components - 1