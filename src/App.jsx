import { useState } from "react";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";
import Header from "./components/Header";
import ToastConfig from "../toastConfig";
import { TypeAnimation } from "react-type-animation"; 
import Footer from "./components/Footer";

function App() {
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = (value) => {
    setQrValue(value);
  };

  return (
    // 🔥 This wrapper enables dark mode styling globally
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex flex-col items-center px-4 py-6 md:py-10">
        <QRCodeForm onGenerate={handleGenerate} />
        <QRCodeDisplay value={qrValue} />

        {/* Typing animation and intro text */}
        <div className="text-center mt-8 max-w-xl">
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Instantly convert your links, messages, or wallet addresses into scannable QR codes. Fast, free & secure.
          </p>

          <TypeAnimation
            sequence={[
              'Generate QR Codes for links...',
              2000,
              '📱 Use them for events or resumes...',
              2000,
              '🔐 All data stays on your device!',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-indigo-600 dark:text-pink-400 text-base font-semibold mt-4 block"
            repeat={Infinity}
          />
        </div>
      </main>

      <ToastConfig />
      <Footer />
    </div>
  );
}
export default App;
