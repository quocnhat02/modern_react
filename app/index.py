def validate_age(age):
    if (age < 0):
        return False
    return True

your_age = int(input("Enter your age: "))

print(validate_age(your_age))
