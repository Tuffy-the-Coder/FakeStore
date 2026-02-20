import { RiArrowDropDownLine } from "react-icons/ri";

export default function Dropdown(props) {
    return (
        <div className={`${props.ContainerStyle}`}>
            <span className={`${props.placeholderStyle}`}>
                {props.placeholder}
            </span>
            <select className={`${props.selectStyle}`}
            onChange={(e) => props.onChange(e.target.value)}
            value={props.value}>
                {props.options.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>

            <RiArrowDropDownLine className={`${props.iconStyle}`} />
        </div>
    )
}