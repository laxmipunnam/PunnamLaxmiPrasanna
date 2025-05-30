num = [5, 2, 1, 5, 7, 4]
num.append(20) #insert the number in the list
num.insert(0,10)
num.remove(2)
#num.clear() clear the entire list
num.pop()
print(num.index(1))
print(50 in num)
print(num.count(5))
print("----------")
num.sort()
print(num)
print("-----------")
num.reverse()
print(num)
print("-------------")
num2=num.copy()
num.append(8)
print(num2)
print(num)
print("-----------")
numbers=[2, 2, 4, 6, 3, 4, 6, 1]
unique=[]
for n in numbers:
    if n not in unique:
        unique.append(n)
print(unique)

