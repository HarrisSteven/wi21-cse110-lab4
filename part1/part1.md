1. At line 11, the value of i, which is equal to the length of the input prices array, will be successfully printed. This is beacuse the variable was declared within the function discountPrices and thus it's scope it's scope is in the discountPrices function.

2. At line 12, the discounted price of the last element in the prices array will be successfully printed. Even though it was declared inside the for loop, it has a function-level scope.

3. At line 13, the final price of the last element in the prices array will be successfully printed. The variable was declared inside the function, so it is in valid scope when being logged.

4. [50, 100, 150]. The call discountPrices([100, 200, 300], .5) will return an array of prices with a 50% discount applied to all the prices in the input array. Each iteration of the for loop applies the discount to the ith element in the input array and pushes the resulting price to an array that stores all the discounted prices which is returned.

5. Line 11 will cause an error because the variable i is declared within the for loop so its scope is confined to the for loop. Trying to log it outside the loop causes a reference error. 

6. Line 12 has the same error as 11. The variable discountedPrice is declared inside the for loop which binds its scope to within the loop. Attempting to access it outside the loop causes a reference error.

7. Given that the two previous errors are ignored, line 13 will successfully print the final price of the last element in the input prices array. It was declared outside the for loop and it is being referenced within its scope.

8. The call discountPrices([100, 200, 300], .5) will produce a reference error because both variables i and discountedPrice are being referenced outside their scope.

9. Line 11 will cause an error because the variable i is declared within the for loop so its scope is confined to the for loop. Trying to log it outside the loop causes a reference error. 

10. Line 12 will cause a reference error because discountedPrices is declared inside the for loop, so its scope is only in the loop. Trying to log it outside the loop causes a reference error.

11. While the scope of the finalPrice variable is correct, there is another error in the for loop when finalPrice is trying to be assigned a new value after being declared as const.

12. The call to discountPrices([100, 200, 300], .5) will produce multiple errors due to reference variables outside their scope and attempting to assign a new value to a const variable.

13. A) student.name;
B) student['Grad Year'];
C) student.greeting();
D) student['Favorite Teacher'].name;
E) student.courseLoad[0];

14. A) '32', the 2 gets converted to a String type as + is the concatenate operater used for strings.
B) 1, the '3' get converted to a Number type as - is a mathematical operation
C) 3, null gets converted to a Number type with the value 0
D) '3null' null gets converted to a String type with a value 'null', then is concatentated with '3'
E) 4, true gets converted to a Number type with the value 1
F) 0, false gets converted to a Number type with value 0 and null gets converted to a Number type with value 0
G) '3undefined', undefined gets converted to a String type with value 'undefined'
H) NAN, undefined gets converted to a Number type with value NAN, which cannot be subtracted from another number.

15. A), true, '2' gets converted to a Number type with value 2
B) false, two strings are compared lexicographically and 2>1
C) true, '2' gets converted to a Number type with value 2
D) false, === is a strict comparison without type conversion; 2 and '2' are of different types
E) false, true gets converted to a Number type with value 1 != 2
F) true, Boolean(2) becomes true of type Boolean, so both sides are identical.

16. == compares two values allowing for type conversion if the two values being compared are of differing types. === is a strict comparison and returns false if the two values being compared are of a different type.

17. 'How are you?' get printed. For the first comparison 2 == true, true gets converted to a Number type with value 1, so this comparison is false. For the else if comparison, 2 gets converted to a Boolean type with value true, so 'How are you?' is printed and the else is skipped.

18. see part1-question18.js

19. [6, 8, 10]. For each element in the array input to the function, the callback doSomething that is passed in will add 2 to the number, then pass this modified value to the function defined in modifyArray, which multiplies it by two. The result is appended to an array. Overall, the function takes each input number, adds 2, then multiplies by 2, resulting in [(1+2)*2, (2+2)*2, (3+2)*2] = [6, 8, 10].

20. see part1-question20.js

21. 1 4 3 2 There is a timer set to print 3 and 2 with the timer to print 3 less than the timer to print 2.
