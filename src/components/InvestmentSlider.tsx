import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface InvestmentSliderProps {
  minAmount: number;
  maxAmount: number;
  currentValue: number;
  onValueChange: (value: number) => void;
  ROI: number;
}

const InvestmentSlider = ({ minAmount, maxAmount, currentValue, onValueChange, ROI }: InvestmentSliderProps) => {
  const [localValue, setLocalValue] = useState(currentValue);
  
  useEffect(() => {
    setLocalValue(currentValue);
  }, [currentValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalValue(value);
    onValueChange(value);
  };

  const calculateReturn = (amount: number) => {
    return amount * (1 + ROI / 100);
  };

  return (
    <div className="bg-teal-50 rounded-lg p-4">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-teal-900">
          ₦{localValue.toLocaleString()} → ₦{calculateReturn(localValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </div>
        <p className="text-gray-600 mt-1">
          Return on a ₦{localValue.toLocaleString()} investment
        </p>
      </div>
      <div className="mt-4">
        <input
          type="range"
          min={minAmount}
          max={maxAmount}
          step="100000"
          value={localValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>₦{minAmount.toLocaleString()}</span>
          <span>₦{maxAmount.toLocaleString()}</span>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <motion.div 
        className="mt-4 h-2 bg-teal-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="h-full bg-teal-700 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((localValue - minAmount) / (maxAmount - minAmount)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default InvestmentSlider;