---
title: "Guess the number with Python !"
date: "2020-05-17"
og:
  description: "The title says it."
  image: ""
author:
  twitter: "theavidcoder"
  name: "Divya Kelaskar"
---
Yeah you got it.

Today we'll be making turtles' race by the Python language.

The first main requirement here is the turtle module. Basically, this module lets us to introduce smaller-scale graphics in our Python. 

The next one is the random module.

Let's get started 😜

✅ Firstly, import the required modules.
```python
from turtle import *
from random import randint
```
💡 There are different shapes of pointer available in the turtle module(like arrow, classic and turtle). As ours is a "Turtle Race", we need the 'turtle' and 'classic' shape.

✅ We'll use the classic shape to trace the racing track.
```python
# classic shape turtle
speed(0)
penup()
goto(-140, 140)

# tracing the racing track
for step in range(15):
  write(step, align='center')
  right(90)
  for num in range(8):
    penup()
    forward(10)
    pendown()
    forward(10)
  penup()
  backward(160)
  left(90)
  forward(20)
```
✅ List the specs of the first turtle, enter the turtle in the track and set the turtle ready for the race.
```python
# first player details
player_1 = Turtle()
player_1.color('red')
player_1.shape('turtle')

# first player proceeds to racing track
player_1.penup()
player_1.goto(-160, 100)
player_1.pendown()

# 360 degree turn
for turn in range(10):
  player_1.right(36)
```
✅ Do the same for the rest of the turtles.
```python
# second player details
player_2 = Turtle()
player_2.color('blue')
player_2.shape('turtle')

# second player enters in the racing track
player_2.penup()
player_2.goto(-160, 70)
player_2.pendown()

# 360 degree turn
for turn in range(72):
  player_2.left(5)

# third player details
player_3 = Turtle()
player_3.shape('turtle')
player_3.color('green')

# third player enters in the racing track
player_3.penup()
player_3.goto(-160, 40)
player_3.pendown()

# 360 degree turn
for turn in range(60):
  player_3.right(6)

# fourth player details
player_4 = Turtle()
player_4.shape('turtle')
player_4.color('orange')

# fourth player enters in the racing track
player_4.penup()
player_4.goto(-160, 10)
player_4.pendown()

# 360 degree turn
for turn in range(30):
  player_4.left(12)
```
✅ Use the randint() to set the speed of the turtles.
```python
# turtles run at random speeds
for turn in range(100):
  player_1.forward(randint(1,5))
  player_2.forward(randint(1,5))
  player_3.forward(randint(1,5))
  player_4.forward(randint(1,5))
```
## That's it ! The race is ready to begin 🐢🐢🐢 

# Thanks for reading !