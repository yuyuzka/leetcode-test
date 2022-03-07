#include <iostream>
#include <cstring>
#include <algorithm>
#include <queue>
using namespace std;
int dir[4][2] = { -1,0,0,1,0,-1,1,0 };
int a[10][10];
int v[10][10][10][10];
int m, n;
struct node
{
	int bx, by;
	int rx, ry;
	int cnt;
};
struct man
{
	int x, y;
};
bool safe(int x, int y)
{
	if (x<1 || y<1 || x>n || y>m || a[x][y] == 1) return 0;
	return 1;
}

int bfs2(int si, int sj, int di, int dj, int bi, int bj)
{
	int v[10][10];
	memset(v, 0, sizeof(v));
	queue<man> qu;//新定义了q，所以不用初始化qu了
	man st, sd;
	st.x = si; st.y = sj;
	v[si][sj] = 1;
	qu.push(st);
	while (!qu.empty())
	{
		st = qu.front(); qu.pop();
		if (st.x == di && st.y == dj) return 1;
		for (int i = 0; i < 4; i++)
		{
			sd.x = st.x + dir[i][0];
			sd.y = st.y + dir[i][1];
			if (safe(sd.x, sd.y) && !v[sd.x][sd.y] && (sd.x != bi || sd.y != bj))
			{
				v[sd.x][sd.y] = 1;
				qu.push(sd);
			}
		}
	}
	return 0;
}





int bfs(int bi, int bj, int ri, int rj, int di, int dj)
{
	int i;
	queue<node>q;
	node f, d;
	f.bx = bi;
	f.by = bj;
	f.rx = ri;
	f.ry = rj;
	f.cnt = 0;
	v[bi][bj][ri][rj] = 1;
	q.push(f);
	while (!q.empty())
	{
		f = q.front(); q.pop();
		if (f.bx == di && f.by == dj)  return f.cnt;
		for (i = 0; i < 4; i++)
		{
			d.bx = f.bx + dir[i][0];
			d.by = f.by + dir[i][1];
			d.rx = f.bx - dir[i][0];
			d.ry = f.by - dir[i][1];
			if (safe(d.bx, d.by) && safe(d.rx, d.ry) && !v[d.bx][d.by][d.rx][d.ry])
			{
				if (bfs2(f.rx, f.ry, d.rx, d.ry, f.bx, f.by))//bfs人能不能走到箱子后面
				{
					v[d.bx][d.by][d.rx][d.ry] = 1;
					d.cnt = f.cnt + 1;
					q.push(d);
				}
			}
		}
	}
	return -1;
}





int main()
{
	int T, ri, rj, di, dj, bi, bj;
	int i, j;
	cin >> T;
	while (T--)
	{
		cin >> n >> m;
		for (i = 1; i <= n; i++)
		{
			for (j = 1; j <= m; j++)
			{
				cin >> a[i][j];
				if (a[i][j] == 4)
				{
					ri = i; rj = j;
				}
				if (a[i][j] == 2)
				{
					bi = i; bj = j;
				}
				if (a[i][j] == 3)
				{
					di = i; dj = j;
				}
			}
		}
		int ans = bfs(bi, bj, ri, rj, di, dj);
		memset(v, 0, sizeof(v));
		cout << ans << endl;
	}
	return 0;
}