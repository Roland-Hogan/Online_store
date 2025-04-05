from flask import Flask , request
import json
from config import db


app = Flask(__name__)

# This is an endpoint
@app.get("/")
def home():
    return "Hello from Flask"

@app.post("/")
def homePost():
    return "Thats not allowed"

@app.get("/about")
def about():
    return "Hello for the about page"

@app.get("/info")
def info():
    name = {"name":"Roland"}
    return json.dumps(name)

products = []

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/products")
def get_products():
    products_db = []
    cursor = db.products.find({})
    for product in cursor:
        print("product", product)
        products_db.append(fix_id(product))
    return json.dumps(products_db)


@app.post("/api/products")
def post_products():
    product = request.get_json()
    # products.append(product)
    db.products.insert_one(product)
    print(product)
    return "product saved"


@app.get("/api/categories")
def get_categories():
    # return list of unique categories
    results = []
    cursor = db.products.find({})
    for prod in cursor:
        cat = prod["category"]
        if cat not in results:
            results.append(cat)

    return json.dumps(results)

@app.get("/api/reports/total")
def get_total_sum():
    cursor = db.products.find({})
    total = 0
    for prod in cursor:
        total += prod["price"]

    return json.dumps(total)

@app.put("/api/products/<int:index>")
def put_products(index):
    updatedProduct = request.get_json()
    if 0<= index < len(products):
        products[index]=updatedProduct
        return json.dumps(updatedProduct)
    else: 
        return "that index does not exist"
    
# just remember that to delete an element from a list, you need to use - pop
@app.delete("/api/products/<int:index>")
def delete_products(index):
    #deletedProduct = request.get_json()
    if 0<= index < len(products):
    #    ---> Here we need to specify wich element from products list will be removed
        deletedProduct = products.pop(index)
        return json.dumps(deletedProduct)
    else: 
        return "that index does not exist" 
    
# try this to the patch, but use this logic instead - list[index].update(object)

@app.patch("/api/products/<int:index>")
def patch_products(index):
    patchProducts = request.get_json()
    if 0<= index < len(products):
        products[index].update(patchProducts)
        return json.dumps(patchProducts)
    else:
        return "That index does not exist"




app.run(debug=True)# This passes the changes to the server when we save