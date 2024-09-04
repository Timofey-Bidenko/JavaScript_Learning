/* 
Буду розбивати все на дії з результатом.

Приклад ~> "Hello" + " " + "World!"

"Hello" + " " >>> "Hello " / string
"Hello " + "World!" >>> "Hello World!" / string

Іноді я відбивався від шаблону, для додаткових думок.
convert / coerce >>> слова синоніми
*/



undefined + 1;
/* 
undefined + 1
undefined >>> NaN /// undefined coerced to NaN by JS
NaN + 1 >>> NaN
*/
'true' == true
/* 
JS tries to coerce operands to the same type (number)
It succeeds with true, turning it into 1
'true' is not a numeric string, so we get NaN
NaN == 1 >>> NaN
*/
false == 'false'
/* 
JS tries to coerce operands to the same type (number)
It succeeds with false, turning it into 0
'false' is not a numeric string, so we get NaN
'false' == NaN >>> NaN
*/
null == ''
/* 
JS tries to coerce operands, but null is very special.
Null can only be == null or undefined, this is an exception.
null == '' >>> false / boolean
*/
3 ** (9 / 3);
/* 
First we will be doing what is inside of ()
9 / 3 >>> 3 / number (int)
3 ** 3 also 3^3 >>> 27 / number (int)
*/
!!'false' == !!'true'
/* 
! >>> logical NOT, I use it for toggling in scripts like so: currentState = not currentState (Luau)
Both strings 'false' and 'true' have a length > 0, JS coerces both to true
!!true == !!true >>> true / boolean
Even if we did double NOT through we would still get
true == true >>> true / boolean
*/
0 || '0' && 1
/* 
&& operator has priority over || operator
'0' is coerced into true by JS (string with length of > 0)
both '0' and 1 are true, && returns the last true value
'0' && 1 >>> 1 / number (int)
next > 0 or 1, only one needs to be true
0 || 1 >>> 1 / number (int)
*/
1 < 2 < 3
/*
1 < 2 >>> true / boolean
true is coerced by JS into number as 1
true (1) < 3 >>> true / boolean
*/
'foo'+ + +'bar'
/* 
Unary + before 'bar', tries to convert it into number
'bar' is NOT a numeric string >>> NaN
another unary + before NaN, tries to convert it into number
NaN is a sticky value, converted to number, contuiniues to be NaN
In the end we concatenate 'foo' and NaN
'foo' + NaN >>> 'fooNaN'
*/
3 ** 2 / 3;
/* 
3 ** 2 also 3^2 >>> 9 / number (int)
9 / 3 >>> 3 / number (int)
*/
1 < 2 > 3
/* 
1 < 2 >>> true / boolean
true is coerced by JS into number as 1
true (1) > 3 >>> false / boolean
*/
(+null == false) < 1;
/*
First we will be doing what is inside of ()
Unary + converts null to 0, JS coerces false into 0 to match the type because of ==
+null == false >>> true / boolean
true is coerced by JS into number as 1
true (1) < 1 >>> false / boolean
*/
false && true || true
/* 
&& operator has priority over || operator
for && (and) to return true we need both values to be true, only one is true so it returns false
false && true >>> false / boolean
for || (or) to return true at least one value has to be true, one is, it returns true
false || true >>> true / boolean
*/
false && (true || true);
/* 
We set the priority to do || (or) first using the ()
for || (or) to return true at least one value has to be true, both are, it returns the first true value
true || true >>> true / boolean
for && (and) to return true we need both values to be true, only one is true so it returns false
false && true >>> false / boolean
*/
(+null == false) < 1 ** 5;
/*
First we will be doing what is inside of ()
Unary + converts null to 0, JS coerces false into 0 to match the type because of ==
+null == false >>> true / boolean
1 ** 5 also 1^5 >>> 1 number / (int)
true is coerced by JS into number as 1
true (1) < 1 >>> false / boolean
*/