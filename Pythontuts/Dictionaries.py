customer = {
    "name": "Laxmi Prasanna",
    "age":22,
    "is_verified": True
}
customer["birthdate"]="Feb 1 2003"
print(customer["birthdate"])
print("-----------------")
print(customer["name"])
print("-----------------------")
print(customer.get("birthdate","Feb 1 2003"))
print("----------------------")
print(customer["Name"])
