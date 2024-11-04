interface MenuLinkProps {
    label: string;
    onClick: () => void;
}


const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className="px-5 cursor-pointer py-4 hover:bg-gray-100 transition">
            {label}
        </div>
    )
}

export default MenuLink