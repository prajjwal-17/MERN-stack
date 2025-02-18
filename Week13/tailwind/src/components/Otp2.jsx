import { useRef, useState } from "react";
import { Button } from "./Buttons";
import React from "react";

export const Otp2 = () => {
    const inputRefs = useRef([...Array(6)].map(() => React.createRef())); // Create an array of refs
    const [otp, setOtp] = useState(Array(6).fill("")); // State for OTP values
    const [disabled, setDisabled] = useState(true);

    const handleChange = (index, value) => {
        if (value >= "0" && value <= "9") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to next input if available
            if (index < 5) {
                inputRefs.current[index + 1].current.focus();
            } else {
                setDisabled(false); // Enable button when all fields are filled
            }
        }
    };

    const handleBackspace = (index) => {
        if (otp[index] !== "") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        } else if (index > 0) {
            inputRefs.current[index - 1].current.focus(); // Move focus back only if empty
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                {otp.map((val, index) => (
                    <input
                        key={index}
                        ref={inputRefs.current[index]}
                        value={val}
                        onKeyDown={(e) => {
                            if (e.key === "Backspace"){ handleBackspace(index);setDisabled(true);}
                        }}
                        onChange={(e) => handleChange(index, e.target.value)}
                        type="text"
                        className="my-10 mx-1 px-4 text-white w-[40px] h-[50px] rounded-2xl bg-[#193f6b] outline-none text-center"
                        maxLength={1}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <Button disabled={disabled}>Enabled</Button>
            </div>
        </div>
    );
};
