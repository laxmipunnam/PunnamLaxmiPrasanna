from pymongo import MongoClient
client = MongoClient("mongodb+srv://Admin:lucky123@cluster0.ovhrq5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.todo_db

collection_name =db["todo_collection"]
