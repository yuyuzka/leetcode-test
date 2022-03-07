#include<stdio.h>
#include <string.h>
#include<memory.h>
 
#define MAXCHARLEN 50
int binarySearch(const char directionary[][MAXCHARLEN], int nSize, const char* pQuery)
{
	int l, u;
 
	l = 0;
	u = nSize - 1;
	int m;
	int cmpResult;
	while(l <= u)
	{
		m = (l + u)/2;
		while(m > l && directionary[m][0] == '\0') 
		{
			m--;
		}
		cmpResult = strcmp(directionary[m], pQuery);
 
		if(cmpResult == 0)
		{
			return m;
		}
		else if(cmpResult == 1)
		{
			u = m - 1;
		}
		else
		{
			l = m + 1;
		}
 
	}
	return -1;
}  
int main()//test cases.
{
 
	const char directionary[][MAXCHARLEN] = 
	{
		"", "aa", "", "bb", "", "cc", "dd", "e", "", "", "ff"
	};
 
	const char query[][MAXCHARLEN] = 
	{
		"aa", "bb", "cc", "dd", "kk", "e"
	};
 
	for( int i = 0; i < 6; i++)
	{
		printf("%d ", binarySearch(directionary, 11,  query[i]));
	}
	return 0;
}

