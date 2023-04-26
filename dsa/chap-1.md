---
title: Chapter 1 - Getting Started with Setup
outline: deep
---

# Setup 
## Manual Compiling
As the fastest compile way, use

```shell
g++ std=c++11 -O2 -Wall file.cpp -o file.exe
```

in this command:
- std=c++11 stands for using C++11 standard library
- O2 for optimization
- -Wall for warning messages

::: info
Make sure to set the PATH environment variable, or include the whole executable path in the command
:::

## Using Dev-C++

By using Dev-C++, normally it should be setup completed, but **make sure** to do this:

Tools > Compiler Options > (tick) Add the following...compiler: > add the following:
```std=c++11 -O2 -Wall```

# Before Competitive Programming

**REMEMBER** create yourself a very own snippet

For this I strongly encourage you to set a fast snippet in your IDE, or else just open a notepad and copy&paste.

```cpp
#include <bits/stdc++.h>
using namespace std;

void solve() {
    // Your code goes here!
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int t = 1;
    // cin >> t;
    while (t--) {
        solve();
    }
}
```

