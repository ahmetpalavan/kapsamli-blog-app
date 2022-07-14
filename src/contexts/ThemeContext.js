import { createContext } from "react";
import { useReducer } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext=createContext();
const themeReducer=(state,action)=>{
    switch(action.type){
        case 'CHANGE_COLOR':
            return{...state,bgColor:action.payload}
        case 'CHANGE_MODE':
            return{...state,mode:action.payload}
    }
}
export function ThemeProvider({children}){
    const [state,dispatch]=useReducer(themeReducer,{
        bgColor:'#778beb',
        mode:"dark"
    })
    const changeColor=(color)=>{
        dispatch({type:'CHANGE_COLOR', payload:color})
    }
    const changeMode=(mode)=>{
        dispatch({type:'CHANGE_MODE', payload:mode})
    }
    return(
        <ThemeContext.Provider value={{...state,changeColor,changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}