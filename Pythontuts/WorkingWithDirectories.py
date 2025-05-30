from pathlib import Path

path =Path("ecommerce")
print(path.exists())

path1 =Path("ecommerce1")
print(path1.exists())

path2 =Path("emails")
print(path2.exists())

#path3 =Path("emails")
# print(path3.mkdir())        to add directory

path4 =Path("emails") # to remove or delte directory
print(path4.rmdir()) 