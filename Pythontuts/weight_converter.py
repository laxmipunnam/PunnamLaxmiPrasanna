w=int(input("enter the weight= "))
unit = input('(L)bs or (K)g: ')
if unit.upper()=="L":
    converted=w*0.45
    print(f"you are {converted} kilos")
else:
    converted=w/0.45
    print(f"you are {converted} pounds")
