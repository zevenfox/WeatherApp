import React, {useState} from "react";
import plus from "../../assets/plus (1).png";
import minus from "../../assets/minus-2.png";
import "./moreInfo.css"

export default function MoreInfoBtn(props){

    
    const infobtn = {plus, minus};
    const [selected, setSelected] = useState(false)
    const [symbol, setSymbol] = useState(infobtn.plus)

    function selectedHandler(){
        if(selected){
            setSymbol(infobtn.minus)
        }
        else{
            setSymbol(infobtn.plus)
        }
        setSelected(!selected)
        // Call the callback function to update cardWidth in the App component
    props.onMoreInfoButtonClick(selected);
    }

    return (
        <div className="buttonRight">
            <img src={symbol} alt="" className={selected? "plus-pic" : "minus-pic"} onClick={selectedHandler}/>
        </div>
    )
}
