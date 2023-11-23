import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="w-full bg-bgr-300 flex justify-center bg-bgr">
            <div className="w-1200 bg-main p-2">
                <div className="flex md:px-10 ">
                    <Link to={'/'} className="w-16 h-16">
                        <img
                            className="w-full object-cover"
                            src="https://res.cloudinary.com/dyoctwffi/image/upload/v1697878528/Breast%20Canner/kisspng-computer-icons-physician-medicine-5b0890c7240c75.8494327015272880071477_fy0osy.png"
                            alt="logo"
                        />
                    </Link>
                    <div className="flex-1 pl-8">
                        <Link to={'/'} className="inline-block">
                            <h1 className="text-2xl text-white font-bold h-full leading-64 md:text-3xl md:leading-64">
                                Breast Canner
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
