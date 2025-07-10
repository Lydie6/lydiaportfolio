import { useState, useEffect } from 'react';
import '../App.css';
import '../index.css'
const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to my portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          console.log("Loading complete");
          onComplete(); // Ensure this triggers
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black text-gray-100 flex flex-col justify-center items-center">
      <div className=" text-center text-[30px] sm:text-2xl text-4xl font-mono font-bold">
        <span className="animate-blink ml-1 ">{text}|</span>
      </div>
      <div className=" w-[80vw] mt-4 sm:mt-1 sm:w-[400px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}
export default LoadingScreen;