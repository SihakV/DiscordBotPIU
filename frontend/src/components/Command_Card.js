import ToggleButton from './ToggleButton';


function Card({ title, content }) {
    return (
        <div className="justify-between h-64 max-w-xs px-4 py-5 mb-10 rounded-lg bg-background-text">
            <p className="p-6 text-2xl text-white font-regular focus:outline-none ">{title}</p>
            <p className="p-6 text-xl text-gray-custom font-regular focus:outline-none ">{content}</p>
            <ToggleButton />
        </div>
    );
}

export default Card;