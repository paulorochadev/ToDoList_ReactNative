import { createContext, ReactNode, useState } from "react";

type CheckedContextData = {
    isChecked: boolean;
    setChecked: (state: boolean) => void;
    countFinishedTask: () => void;
    countChecked: number;
}

type CheckedProviderProps = {
    children: ReactNode;
}

export const CheckedContext = createContext({} as CheckedContextData)

export function CheckedProvider({ children }: CheckedProviderProps){
    const [isChecked, setChecked] = useState(false);

    let countChecked = 0;
    
    function countFinishedTask(){
        if(isChecked == false){
            countChecked = countChecked + 1
        } else {
            countChecked = countChecked - 1
        }
    }

    return (
        <CheckedContext.Provider value={{isChecked, setChecked, countFinishedTask, countChecked}}>
            {children}
        </CheckedContext.Provider>
    )

}