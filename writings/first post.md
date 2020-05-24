---
title: "My First post"
date: "2020-05-05"
og:
  description: "The title says it."
  image: ""
author:
  twitter: "theavidcoder"
  name: "Divya Kelaskar"
---
Hi everyone!

Today I will share some tips to make a simple stone paper scissor game in python. The game will be a Human vs Computer game.

✔️ Import the random module by the following:
```python 
import random 
```
"Why?"
So that computer will generate its own choice.

💡 Place a infinite while loop (You don't have to run program  again and again.)
```python 
while True:
```
✔️ State the rules of the game.
```python 
# Rules of the game   
    print("""Enter your choice : 
    a. Press '1' to select 'Stone'. 
    b. Press '2' to select 'Paper'.
    c. Press '3' to select 'Scissor'.\n""")  
```
✔️ Take the input from the user according to the rules mention above.
```python 
user_choice = int(input("Enter YOUR choice: ")) 
```
✔️ Code the condition when user gives input out of the range.
```python 
while user_choice > 3 or user_choice < 1:
    user_choice = int(input("Enter valid input: ")) 
```
✔️ Assign numbers to the user's choice.
```python 
    if user_choice == 1: 
        choice_name = 'Stone'
    elif user_choice == 2: 
        choice_name = 'Paper'
    else: 
        choice_name = 'Scissor'
```
✔️ Let the computer select its choice and then assign numbers to the computer's choice.
```python
    computer_choice = random.randint(1, 3)  

# Assigning numbers to the computer's choices
    if computer_choice == 1: 
        computer_choicehoice_name = 'Stone'
    elif computer_choice == 2: 
        computer_choicehoice_name = 'Paper'
    else: 
        computer_choicehoice_name = 'Scissor'
```
✔️ Write the main logic of the game.
```python 
    if((user_choice == 1 and computer_choice == 2) or
      (user_choice == 2 and computer_choice ==1 )): 
        print("Paper wins !!! \n", end = "") 
        result = "Paper"
          
    elif((user_choice == 1 and computer_choice == 3) or
        (user_choice == 3 and computer_choice == 1)): 
        print("Stone wins !!! \n", end = "") 
        result = "Stone"
    else: 
        print("Scissor wins !!!\n", end = "") 
        result = "Scissor"
```
✔️ Declare the result.
```python 
    if result == choice_name: 
        print("\nYOU WIN !!!\n") 
    else: 
        print("\nCOMPUTER WINS !!!\n") 
```
✔️ Ask a replay question and also code the condition to break the infinite while loop.
```python
    print("Do you want to play again? (y/n)") 
    ans = input() 
  
    if ans == 'n' or ans == 'N': 
        break
```

# Thanks for reading !