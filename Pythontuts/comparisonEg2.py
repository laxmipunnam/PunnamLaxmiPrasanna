name = input("enter the name=")
name_length = len(name)
if name_length<3:
    print("name must be at least 3 characters")
elif name_length>50:
    print("name can be a maximum of 50 characters")
else:
    print("name looks good!")