command=""
started =False
while True:
    command=input(">").lower()
    if command== "start":
        if started:
            print("car is already started ")
        else:
            started =True
            print("car started....")
    elif command=="stop":
        if not started:
            print("car is alraedy stopped!")
        else:
            started =False
            print("car stopped.")
    elif command =="help":
        print(""" star - to start the car 
              stop - to stop the car
              quit- quit the car""")
    elif command=="quit":
        break
    else:
        print("sorry, i don't understand that !")
    