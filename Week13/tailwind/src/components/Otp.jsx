import { useRef, useState } from "react"
import { Button } from "./Buttons";

export const Otp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

    return <div>
        <div className="flex justify-center">  
            <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} />
            <SubOtpBox reference={ref2} onDone={() => ref3.current.focus()} onBack={() => ref1.current.focus()} />
            <SubOtpBox reference={ref3} onDone={() => ref4.current.focus()} onBack={() => ref2.current.focus()} />
            <SubOtpBox reference={ref4} onDone={() => ref5.current.focus()} onBack={() => ref3.current.focus()} />
            <SubOtpBox reference={ref5} onDone={() => ref6.current.focus()} onBack={() => ref4.current.focus()} />
            <SubOtpBox reference={ref6} onDone={() => {
                ref6.current.focus();
                setDisabled(false);
            }} onBack={() => ref5.current.focus()} />
        </div>
        <div className="flex justify-center">
            <Button disabled={disabled}>Enabled</Button>
        </div>
    </div>
}

function SubOtpBox({ reference, onDone, onBack }) {
    const [inputBoxVal, setInputBoxVal] = useState("");

    return <div>
        <input value={inputBoxVal} ref={reference} 
        onKeyUp={(e) => {
            if (e.key === "Backspace") {  // Prevent unnecessary focus shift
                setInputBoxVal("");
                onBack();
            }
        }}
        onChange={(e) => {
            const val = e.target.value;
            
            if (val >= '1' && val <= '9') {
                setInputBoxVal(val);
                onDone();
            }
        }} 
        type="text"
        className="my-10 mx-1 px-4 text-white w-[40px] h-[50px] rounded-2xl bg-[#193f6b] outline-none" />
    </div>
}
