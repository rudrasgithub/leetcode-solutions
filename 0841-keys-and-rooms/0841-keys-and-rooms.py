class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set([0])

        def dfs(room):
            visited.add(room)

            for key in rooms[room]:
                if key not in visited:
                    dfs(key)

        dfs(0)

        return len(rooms) == len(visited)