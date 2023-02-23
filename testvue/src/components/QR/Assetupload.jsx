import { useState } from "react";
import QRCode from "qrcode.react";
import "./Assetupload.css";

const Assetupload = () => {
    const [username, setUsername] = useState("");
    const [productName, setProductName] = useState("");
    const [warrantyFrom, setWarrantyFrom] = useState("");
    const [warrantyTo, setWarrantyTo] = useState("");
    const [productDetails, setProductDetails] = useState("");
    const [warrantyFile, setWarrantyFile] = useState("");
    const [qrData, setQrData] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handlewarrantyFrom = (event) => {
        setWarrantyFrom(event.target.value);
    };
    const handlewarrantyTo = (event) => {
        setWarrantyTo(event.target.value);
    };
    const handleproductDetails = (event) => {
        setProductDetails(event.target.value);
    };
    const handlewarrantyFile = (event) => {
        setWarrantyFile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const qrString = `${username}, ${productName}, ${warrantyFrom}, ${warrantyTo}, ${productDetails}, ${warrantyFile}`;
        setQrData(qrString);
    };
    
return (
        <div className="container">
            <h1 className="text-center mb-4">QR Generator</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productName}
                        onChange={handleProductNameChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Warranty From:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={warrantyFrom}
                        onChange={handlewarrantyFrom}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Warranty To:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={warrantyTo}
                        onChange={handlewarrantyTo}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Details:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productDetails}
                        onChange={handleproductDetails}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">warranty File:</label>
                    <input
                        type="file"
                        className="form-control"
                        value={warrantyFile}
                        onChange={handlewarrantyFile}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Generate QR
                </button>
            </form>
            {qrData && (
                <div className="mt-4">
                    <QRCode value={qrData} />
                </div>
            )}
        </div>
    );
}
      
  
export default Assetupload;
