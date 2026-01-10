import { useState } from "react";

function InputText() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const handleAdd = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return;
        setItems((prev) => [...prev, { id: Date.now(), text: trimmed }]);
        setInputValue("");
    };

    const handleDelete = (id) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

    return (
        <>
            <div className="flex mx-auto justify-center mt-6 w-full">
                <input
                    type="text"
                    className="w-80 p-3 mr-2 bg-black rounded border text-green-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAdd();
                    }}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="w-20 bg-green-700 text-white p-3 rounded hover:bg-green-500 cursor-pointer"
                >
                    Add
                </button>
            </div>

            <div className="space-y-2 mt-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center p-3 bg-gray-900 rounded mx-5 text-green-600
                        hover:shadow-sm shadow-green-200 transition-colors duration-200"
                    >
                        <span>{item.text}</span>
                        <span className="float-left">{new Date().toLocaleDateString()}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded text-sm  hover:shadow-sm shadow-red-200 transition-colors duration-200"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {items.length === 0 && (
                <p className="text-gray-400 text-center mt-4">No items yet</p>
            )}
        </>
    );
}

export default InputText;