"use client";

import SubmitButton from "@/Components/Buttons/SubmitButton/SubmitButton";
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useRouter } from "next/navigation";
import MakeRepository from "@/Repository/MakeRepository";
import MakeModel from "@/Models/Entities/make";

export const ModelForm = ({text, customText} : {text: string, customText: string}) => {
    const [name, setName] = useState('');
    const [abrv, setAbrv] = useState('');
    const [img, setImg] = useState('');

    const router = useRouter();

    let makeRepository: MakeRepository = new MakeRepository();

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!name || !abrv || !img) {
            alert("All fields are required.");
            return;
        }
        try {
            let makeModel: MakeModel = new MakeModel(name, abrv, img);
            makeRepository.createMake(makeModel);
            router.push("/");
        } catch(error) {
            console.log(error);
        }
    };

    return ( 
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h1>{text}</h1>
           <FormInput 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            value={name}
            label={"Name of the "  + customText}
            type="text" 
            className="w-full px-3 py-2 border border-slate-500 " 
            placeholder="BMW" 
           />
           <FormInput 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setAbrv(event.target.value)}
            value={abrv}
            label={"Abrv of the " + customText}
            type="text"
            className="w-full px-3 py-2 border border-slate-500"
            placeholder="BMW"
           />
           <FormInput 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setImg(event.target.value)}
            value={img}
            label="Image URL:" 
            type="text" 
            className="w-full px-3 py-2 border border-slate-500" 
            placeholder="" 
           />
            <SubmitButton text="Add Make" />

        </form>
    );
}; 

