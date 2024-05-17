import { useState } from 'react';

export function Predection(){
    const [date, setDate] = useState('');
    const [stationName, setStationName] = useState('');
    const [trainNumber, setTrainNumber] = useState('');
    const [trainName, setTrainName] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Replace this with your actual backend call
        const response = await fetch('http://your-backend-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date,
                stationName,
                trainNumber,
                trainName,
            }),
        });
        const data = await response.json();
        setResult(data);
    }

    return(
        <div style={{backgroundImage: `url(./train2.jpg)`}}>
        
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to DelayGuard</h1>
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <input type="text" value={stationName} onChange={(e) => setStationName(e.target.value)} placeholder="Your Station Name" className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <input type="number" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} placeholder="Train number" className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> 
                <input type="text" value={trainName} onChange={(e) => setTrainName(e.target.value)} placeholder="Train name(optional)" className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Predict
                </button>
            </form>
            {result && <div className="mt-4 text-white">{result}</div>}
        </div>
        </div>
    )
}