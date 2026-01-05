import { useState } from "react";

function InputText() {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="max-w-6xl mx-auto mt-6 w-full" >
            <input 
                type="text" 
                className="w-auto p-3 bg-white-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Add a new task..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="submit" value="Add Task" className="m-4 w-auto bg-green-700 text-white p-3 rounded hover:bg-green-500 cursor-pointer"/>
        </div>
    );
}
export default InputText;    