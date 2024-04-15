const Button = ({ label, styles, icon, type, onClick}) => {
    return (
        <button
        onClick={onClick}
        type={type || "button"}
        className={`fkex items-center justify-center text-base outline-nones ${styles}`}
        >
        {label}
        {icon && <div className="ml-2">{icon}</div>}
        </button>
    )
}

export default Button

