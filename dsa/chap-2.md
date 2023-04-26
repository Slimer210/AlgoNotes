---
title: Chapter 2 - Mathematical Formulas & Implementations
outline: deep
---

# Large Numbers
## Making a large number
Fastest way to make a large number
```cpp
long long x = 123456789123456789LL;
```

While handling large numbers, remember to convert the type. For example, 
```cpp
int a = 132456789;
long long b = a*a;
// b = -872138768 (just wrong value)
```
change it to 
```cpp
int a = 123455678;
long long b = (long long)a*a;
```

## Modular Arithmetic

Given x mod m = x%m = remainder of (x/m)

To prevent overflow or certain errors, you can use the following formula when dealing with large numbers

```
(a+b)%m = (a%m+b%m)%m
(a-b)%m = (a%m-b%m)%m
(a*b)%m = (a%m*b%m)%m
```

# Sequence, series formulas

## Summation formula

Given a series: *1+2+3+4+...+n*, the formula is n(n+1)/2

Given a series: *1²+2²+3²+4²+...+n²*, the formula is n(n+1)(2n+1)/6

## Arithmetic Progression (AP)

Given a sequence: 3, 7, 11, 15

in this sequence,
- amount of numbers, n = 4
- diference between each number, d = 4
- first number, a = 3
- second number, b = 15

So, for the total value, 3+7+11+15, the formula is **n(a+b)/2** = 4(3+15)/2=36

To find the nth term, use a+(n-1)d. let n = 5, a5 = 3+(4)4 = 19 