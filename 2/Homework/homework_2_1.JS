/* 
Буду розбивати все на дії з результатом.

Приклад ~> "Hello" + " " + "World!"

"Hello" + " " >>> "Hello " / string
"Hello " + "World!" >>> "Hello World!" / string

Іноді я відбивався від шаблону, для додаткових думок.
convert / coerce >>> слова синоніми
*/



'number' + 23 + 32
/*
'number' + 23 >>> 'number23' / string
'number23' + 32 >>> 'number2332' / string
*/
41 + 1 + 'number'
/* 
41 + 1 >>> 42 / number (int)
42 + 'number' >>> '42number' / string
*/
null + 1
/* 
null >>> 0 /// null coerced to 0 by JS
0 + 1 >>> 1 / number (int)
*/
'five' + + 'two'
/* 
Unary + before 'two' >>> tries to convert string to number
'two' is NOT a numeric string >>> NaN
'five' + NaN >>> 'fiveNaN' / string
*/
2 && 7
/* 
Both numbers 2 and 7 are >= 1, this means, coerced to boolean both become true
&& returns the last true value
In our case answer is 7 <<< ANSWER
If it was 7 && 2 the answer would be 2
*/
+'40' + +'2';
/* 
Unary + before '40' and '2' tries to covert strings to numbers
Both strings happen to be numeric
We are left with 40 + 2
40 + 2 >>> 42 / number (int)
*/
'10' - 5 === 6;
/* 
'10' - 5 >>> 5 / number (int)
5 === 6 >>> false / boolean
*/
true + false
/* 
true >>> 1 /// true coerced to 1 by JS
false >>> 0 /// false coerced to 0 by JS
1 - 0 >>> 1 / number (int)
*/
'4px' - 3
/* 
JS tries to coerce '4px' string to number
'4px' is NOT a numeric string >>> NaN
NaN - 3 >>> NaN
NaN is a sticky thing, so it returns NaN
*/
'4' - 3
/* 
JS tries to coerce '4' string to number, it succeeds!
4 - 3 >>> 1 / number (int)
*/
'2' + 3 ** 2;
/* 
** has priority just like multiplication or division have
3 ** 2 also 3^2 >>> 9 / number (int)
'2' + 9 >>> '29' / string
*/
12 / '6'
/* 
JS tries to coerce '6' string to number, success!
12 / 6 >>> 2 / number (int)
*/
23 + 42 + 'number'
/* 
23 + 42 >>> 65 / number (int)
65 + 'number' >>> '65number' / string
*/
'10' + (5 === 6);
/* 
First we will be doing what is inside of ()
5 === 6 >>> false / boolean
'10' + false >>> '10false' / string (concatenation happens, no conversions/coercions)
*/
'number' + 15 + 3
/* 
'number' + 15 >>> 'number15' / string
'number15' + 3 >>> 'number153' / string
*/