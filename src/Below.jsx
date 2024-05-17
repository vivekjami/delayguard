// import Predection from './Predection'
import { useState } from 'react';
import {Predection} from './Predection';
export function Below(){
  
    const [showPredection, setShowPredection] = useState(false);

    const handleClick = () => {
        setShowPredection(true);
    }

    if (showPredection) {
        return <Predection />;
    }
    return(
        <div style={{backgroundImage: `url(./train2.jpg)`}}>
        
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-white">Welcome to DelayGuard</h1>
            <p className="text-white">A Train time delay predector</p>
            <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-4" onClick={handleClick} >Get Started</button>
        </div>
        </div>
    )
}