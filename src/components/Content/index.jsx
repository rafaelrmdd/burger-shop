import cheeseBurger from "../../assets/cheese-burger.png"
import { IoIosArrowDropright as RightArrow} from "react-icons/io";

export const Content = () => {
    return (
        <main className="h-[85vh] flex px-20 mt-24 font-poppins">
            <section className="w-[40%] relative bottom-[-40px]">
                <h1 className="font-bold text-5xl text-stone-800 ml-[-3px]">HAMBURGER TESTE</h1>

                <p className="mt-4 text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam tempora minima qui possimus voluptate voluptatibus sunt modi facilis sed?</p>
                
                <div className="flex gap-4 items-center mt-4">
                    <button className="p-1 border-solid border-2 border-black rounded-md bg-black text-white px-4 text-xl">ORDER NOW</button>
                    <span>R$10,00</span>
                </div>
            </section>

            <section className="w-[60%] flex justify-center ">
                <img src={cheeseBurger} alt="Cheese burger" className="w-[638px] h-[638px] relative top-[-170px] right-[-40px]"/>
            </section>

            <div className="flex items-center">
                <RightArrow size={30} className="hover:cursor-pointer hover:brightness-10 relative top-[-170px]"/>
            </div>
        </main>
    )
};