import React, {useState} from 'react';
import "./changeLang.css"


export default function ChangeLang() {
    const [lang, setLang] =useState("EN")
    const [selected, setSelected] = useState(false)

    function selectedHandler(){
        if(selected){
            setLang("TH")
        }
        else{
            setLang("EN")
        }
        setSelected(!selected)
    }

    return (
        <div className="selectLang" onClick={selectedHandler}>
            {lang}
        </div>
    )
}
