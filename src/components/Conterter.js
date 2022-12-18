import React, {useState} from "react";
import convert from './convert';

export default function Converter() {
    const [hex, setHex] = useState("#");
    const [rgb, setRgb] = useState("");

    const handleColor = (evt) => {
        let {value} = evt.target;
        let result;
        if (value.length <= 7 || value.length > 7) {
            !value ? setHex("#") : convert(value);
            setTimeout(() => setRgb('Ошибка!'), 1000)
            
        } 
        if (value.length === 7) {
                result = convert(value);
                setTimeout(() => setRgb(result), 1000);
        }
    };
    return (
        <div className="container" style={{background: rgb}}> 
            <input type="text"
                defaultValue={hex} 
                onChange={handleColor} 
                placeholder="" />
            <input className="result" type="text"
                value= {rgb}
                onChange={handleColor} />
        </div>
    )
}