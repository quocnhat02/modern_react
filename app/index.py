try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except ValueError:
    print("Error: Please enter a valid number.")
finally:
    print("Finally")