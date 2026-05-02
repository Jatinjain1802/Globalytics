const Card = ({ title, icon, children }) => {
    return (
        <div className="bg-white p-8 rounded-xl w-[300px] border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200">
            <div className="text-5xl text-indigo-600 mb-4">
                <i className={`bx ${icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="text-gray-600">
                {children}
            </div>
        </div>
    )
}

export default Card
