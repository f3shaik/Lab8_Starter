# Lab 8 - Starter

Partner: Fayaz Shaik

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
 - `Within a Github action that runs whenever code is pushed`: This makes sense as one can automate this action of testing instead of having to manually take the time to test and make sure everything's good. It also helps that such automation is able to catch issues fast any allow for any necessary fixes before the production stage. 


2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

- No. This is because an end-to-end test would go through a whole process which isn't necessary for testing something like a function, which often doesn't encompass a whole start to finish program.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

- I wouldn't since unit tests are built in the intention that the feature being tested is small and does not affect a lot of other pieces of the code. For something as essential as the "message" feature in a messaging app, it becomes quite clear that this task is in any way minor and cannot be tested fully by only a unit test.


4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- I wouldn't since it seems like a "max message length" is a complex feature and requires extensive parts, which doesn't seem feasible to test with a unit test.