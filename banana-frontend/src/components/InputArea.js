import React, {useState} from "react";
function InputArea(props){
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
                });
    
                if (response.ok) {
                    alert('Message sent!');
                    setMessage('');
                  } else {
                    alert('Failed to send message.');
                  }
        } catch (error) {
            console.error("error:", error);
        }
        
    }
    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default InputArea;