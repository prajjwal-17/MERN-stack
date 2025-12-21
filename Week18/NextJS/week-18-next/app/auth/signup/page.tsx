export default function Signup() {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200">
                <div className="">
                    <div className=" px-10">
                        <div className="text-3xl font-extrabold text-gray-900">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username"
                        placeholder="example@gmail.com"
                        ></LabelledInput>

                        <LabelledInput label="Password"
                        placeholder="********">
                        </LabelledInput>

                        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4
                         focus:ring-gray-300 font-medium rounded-b-lg text-sm px-5 py-2.5 me-2 mb-2  
                        ">SignIn</button>

                    </div>
                </div>
            </div>
        </div>

    </div>
}

interface LabelledInputType {
    label : string ,
    placeholder : string ,
    type? : string
}
function  LabelledInput({label , placeholder , type} : LabelledInputType){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
        block w-full p-2.5" placeholder={placeholder} required></input>
    </div>
}