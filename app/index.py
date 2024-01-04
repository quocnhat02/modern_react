def validate_age(age):
    if (age < 0):
        raise ValueError("Error: Age cannot be negative")
    print("Valid age entered")

try:
    user_age = int(input("Enter your age: "))
    validate_age(user_age)
except ValueError as e:
    print(e)