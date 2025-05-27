import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import data from "../assets/intents.json";

const intents = data.intents;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    // Function to find the best response from intents.json
    const getResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();

        for (const intent of intents) {
            if (intent.patterns.some(pattern => lowerInput.includes(pattern.toLowerCase()))) {
                return intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        }

        // If no match found, return a default response
        return intents.find(intent => intent.tag === "no-response").responses[0];
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages([...messages, userMessage]);
        setInput("");

        setTimeout(() => {
            const botResponse = getResponse(input);
            setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-4 left-4 flex flex-col items-start">
            {isOpen && (
                <div className="w-80 bg-white shadow-lg rounded-lg p-4">
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="text-lg font-semibold">Mental Health Bot</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="h-48 overflow-y-auto p-2 space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[80%] ${msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-200"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                        <input
                            type="text"
                            className="border p-2 rounded w-full"
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded">Send</button>
                    </div>
                </div>
            )}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                    <MessageCircle color="white" size={24} />
                </button>
            )}
        </div>
    );
};

export default Chatbot;
