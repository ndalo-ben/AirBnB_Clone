import Image from "next/image"
import Link from "next/link"
import SearchFilters from "./SearchFilters"
import UserNav from "./UserNav"
import AddPropertyBtn from "./AddPropertyBtn"

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            alt="bnbclone logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                       <AddPropertyBtn />
                        <UserNav />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar