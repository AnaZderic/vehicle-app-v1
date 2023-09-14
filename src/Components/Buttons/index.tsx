'use client';

const SubmitButtonCal = (text: string, callback: () => void) => {
    return <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={callback}>{text}</button>;
};

export default SubmitButtonCal;