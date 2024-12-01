import { twMerge } from "tailwind-merge";

export function SimpleHeadingComponent({className, name} : {className : string , name : string}){
    return <h1 className={twMerge(className, '')}>{name}</h1>
}