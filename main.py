import random

number = random.randint(1, 100)
print(number)

while True:
    user_number = int(input("girin (1-100 arasında): "))

    if  user_number < number:
        print("yuxari regem girin.")
    elif  user_number > number:
        print("asagi regem girin.")
    else:
        print(f"Happy Happy Happy! cavab {number}")
        break