import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react"; // or `QRCodeSVG` if you're using SVG

function QRCodeDisplay({ value }) {
  const qrRef = useRef(null);

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {value && (
        <>
          <div ref={qrRef} className="bg-white p-4 rounded shadow-md">
            <QRCodeCanvas value={value} size={200} />
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Download QR Code
          </button>
        </>
      )}
    </div>
  );
}

export default QRCodeDisplay;
