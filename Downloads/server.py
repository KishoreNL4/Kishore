from click import File
from fastapi import FastAPI, Header, Body, UploadFile
# import models
from pymongo import MongoClient
import uvicorn
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#
# origins = ['http://localhost:3001']

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


client = MongoClient("mongodb://localhost:27017/")
db = client["AssetWarrenty"]
collection = db["Upload asset"]


@app.post("/Assetupload")
async def Upload_asset(
    username: str = Body(..., title="Username"),
    productName: str = Body(..., title="ProductName"),
    warrantyFrom: str = Body(..., title="WarrantyFrom"),
    warrantyTo: str = Body(..., title="WarrantyTo"),
    productDetails: str = Body(..., title="ProductDetails"),
    warrantyFile: UploadFile = File(..., title="WarrantyFile")

):
    user_data = {
        "username": username,
        "productName": productName,
        "warrantyFrom": warrantyFrom,
        "warrantyTo": warrantyTo,
        "productDetails": productDetails,
        "warrantyFile": warrantyFile
    }
    collection.insert_one(user_data)
    return {"message": "User successfully registered"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3001)
