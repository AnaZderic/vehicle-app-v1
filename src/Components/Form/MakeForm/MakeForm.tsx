"use client";

import SubmitButton from "@/Components/Buttons/SubmitButton/SubmitButton";
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useRouter } from "next/navigation";
import MakeRepository from "@/Repository/MakeRepository";
import { v4 as uuidv4 } from "uuid";

export const MakeForm = ({text, customText} : {text: string, customText: string}) => {
    const router = useRouter();
    let makeRepository: MakeRepository = new MakeRepository();

    const [name, setName] = useState("");
    const [abrv, setAbrv] = useState("");
    const [file, setFile] = useState<File>();

    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!name || !abrv || !file) {
            alert("All fields are required.");
            return;
        }
        
        let img = `/images/Makes/${name}/${uuidv4()}.${file.name.split(".")[1]}`;

        try {
            let partialMake: IPartialMakeFile = {name, abrv, img, file};
            await makeRepository.createMake(partialMake);
            router.push("/");
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">            
            <p className="text-xl mb-6">{text}</p>
           <FormInput 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            name="name"
            value={name}
            label={"Name of the "  + customText}
            type="text" 
            className="w-full px-3 py-2 border border-slate-500 " 
            placeholder="BMW" 
           />
           <FormInput 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setAbrv(event.target.value)}
            name="abrv"
            value={abrv}
            label={"Abrv of the " + customText}
            type="text"
            className="w-full px-3 py-2 border border-slate-500"
            placeholder="BMW"
           />
            <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
            />
            <SubmitButton text="Add Make" />
        </form>
    );
};