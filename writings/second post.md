---
title: "Create a turtles' race with Python!"
date: "2020-05-16"
og:
  description: "The title says it."
  image: "https://drive.google.com/open?id=1zQCrHPi8v6iNcQhmTbWuAFhMbGVT-RDU"
author:
  twitter: "theavidcoder"
  name: "Divya Kelaskar"
---
Today I will be sharing tips for making a "Guess the number" game with the Python programming language.

Let's begin !

👉 Import the random module to generate the numbers randomly in the game.
```python
import random
```
💡 Introduce a infinite while loop.

👉 Generate a random number, initialize the chances to zero.
```python
while True:

    print("\nN U M B E R   G U E S S I N G   G A M E") 
    print("\nYou have 10 chances to guess the number.")
    
    # randint function to generate the random number between 1 to 100 
    number = random.randint(1, 100) 
    
    """ number of chances to be given to the user to guess the number or it is the inputs
    given by user into input box here number of chances are 10 """
    chances = 0
    
    print("Guess a number (1 - 100):")
```
👉 Add a while loop to count the number of chances used and take the input from the user.
```python
# While loop to count the number of chances 
    while chances < 10: 
        
        # Enter a number between 1 to 100  
        guess = int(input()) 
```
👉 Tally the user's input with the guess number accordingly.
```python
# Compare the user entered number  with the number to be guessed  
        if guess == number: 
            
            """ if number entered by user is same as the generated number by randint
            function then  break from loop using loop control statement "break" """
            print("Congratulation YOU WON!!!") 
            break
            
        # Check if the user entered number is smaller than the generated number  
        elif guess < number: 
            print("Your guess was too low: Guess a number higher than", guess) 
    
        # The user entered number is greater than the generated number              
        else: 
            print("Your guess was too high: Guess a number lower than", guess) 
```
👉 Increase the value of the chances variable one at a time as the user will be using one chance at a time.
```python
# Increase the value of chance by 1 as 1 chance is used
        chances += 1
```
👉 Verify if the user has identified the number or not.
```python
    # Check whether the user guessed the correct number  
    if not chances < 10: 
        print("YOU LOSE!!! The number is", number) 
```
👉 Ask a replay question and break the infinite while loop.
```python
    ans=input("Do you want to play again (y/n) : ")
    
    if ans != 'y' : 
        break
```
## That's it! Wasn't that simple ? 