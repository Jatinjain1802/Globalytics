const Button = ({ children, onClick, type = 'primary' }) => {
    const baseClasses = "px-6 py-3 rounded-lg font-bold cursor-pointer transition-transform hover:-translate-y-0.5 shadow-md border border-transparent active:shadow-sm active:translate-y-0"
    const typeClasses = type === 'primary'
        ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-600/30"
        : "bg-white border-indigo-600 text-indigo-600 hover:bg-indigo-50"

    return (
        <button className={`${baseClasses} ${typeClasses}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
