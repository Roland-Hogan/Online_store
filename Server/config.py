import pymongo
import certifi

connection_string = "mongodb+srv://Hogan-107:DaSmoke@fsdi-107.6kmyj.mongodb.net/?retryWrites=true&w=majority&appName=fsdi-107"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
db = client.get_database("organika_2")

