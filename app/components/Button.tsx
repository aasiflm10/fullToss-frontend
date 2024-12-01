import { twMerge } from "tailwind-merge";

export function Button({buttonText, className} : {buttonText : string, className : string}){
    return <div>
        <button className={twMerge(className, '')}>{buttonText}</button>
    </div>
}