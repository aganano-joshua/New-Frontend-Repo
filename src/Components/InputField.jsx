/* eslint-disable react/prop-types */
// import './Global.css'
import { Input } from "../Components/ui/input"


const InputF = ( {label, placeHolder, value, onChange, type, error}) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "left", justifyContent: "flex-start" }}>
                <label htmlFor="text" className='input-label-sign' style={{ fontWeight: "bold", fontSize: "1rem" }}>{label}</label>
                <Input className='com-input' 
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeHolder} />
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    )
}

export default InputF