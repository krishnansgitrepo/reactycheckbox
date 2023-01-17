
import ReactDom from "react-dom/client";
import React from "react";

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const CheckboxTag = function () {
    const [isVeg, setIsVeg] = React.useState(false);
    
    const handleChange = () => {
        setIsVeg(!isVeg);
    };

    return (<div>
                <label>
                    <input type="checkbox" checked={isVeg} onChange={handleChange}/>IS pure veg?
                </label>
                <p>Is pure Veg? {isVeg.toString()}</p>
            </div>);
}

reactRoot.render(<CheckboxTag/>);
