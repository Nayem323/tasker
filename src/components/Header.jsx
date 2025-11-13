import logo from "../assets/logo.png";
export default function Header() {
    return (
        <nav className="py-6 md:py-8 px-4 fixed top-0 w-full bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img className="h-[45px]" src={logo} alt="Tasker" />
                </a>
            </div>
        </nav>
    );
}
