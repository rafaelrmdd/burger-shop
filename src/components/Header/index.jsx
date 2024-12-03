export const Header = () => {
    return(
        <div className="w-full h-[15vh] flex justify-between px-20 font-poppins">
            <div className="flex items-center text-left">
                <span className="text-black w-64">Hamburguer</span>
            </div>

            <nav className="flex justify-between items-center w-80">
                <a href="/" className="text-black">HOME</a>
                <a href="/" className="text-black">ABOUT</a>
                <a href="/" className="text-black">BURGERS</a>
                <a href="/" className="text-black">CONTACT US</a>
            </nav>

            <nav className="w-64 flex justify-end items-center">
                <span className="text-black">+55 11 95338-5546</span>
            </nav>
        </div>
    )
};

