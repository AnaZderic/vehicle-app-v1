"use client";

const SubmitButton = (props: {text: string}) => {
    return <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" type="submit">{props.text}</button>;
}

export default SubmitButton;