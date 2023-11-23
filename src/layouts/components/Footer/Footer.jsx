import { faAngleUp, faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="text-sm w-full md:text-base">
            <div className="bg-bgr flex justify-around w-full md:p-8 lg:justify-center">
                <div className="w-1/2 p-3 lg:w-[500px]">
                    <div className="w-16 h-16 ">
                        <img
                            className="w-full object-cover"
                            src="https://res.cloudinary.com/dyoctwffi/image/upload/v1697878528/Breast%20Canner/kisspng-computer-icons-physician-medicine-5b0890c7240c75.8494327015272880071477_fy0osy.png"
                            alt="logo"
                        />
                    </div>
                    <ul className="mt-8">
                        <li className="mb-2.5 h-full">
                            <strong>Nghiên cứu:</strong> Trần Quang Khải
                        </li>
                        <li className="mb-2.5 h-full">
                            <strong>Môn:</strong> Khóa luận tốt nghiệp
                        </li>
                        <li className="mb-2.5 h-full">
                            <strong>Đề tài:</strong> Dự đoán bệnh ung thư vú
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 p-3 lg:w-[500px]">
                    <h2 className="py-8 text-main text-lg font-medium md:text-2xl">CONTACT INFO</h2>

                    <div className="flex mb-2 h-[25px] leading-[25px]">
                        <FontAwesomeIcon className="mr-2 h-[25px] w-[15px]" icon={faHouse} />
                        <h5 className="w-[85%] break-words">TP HCM</h5>
                    </div>
                    <div className="flex mb-2 h-[25px] leading-[25px]">
                        <FontAwesomeIcon className="mr-2 h-[25px] w-[15px]" icon={faPhone} />
                        <h5 className="w-[85%] break-words">079xxxxxxx</h5>
                    </div>
                    <div className="flex mb-2 h-[25px] leading-[25px]">
                        <FontAwesomeIcon className="mr-2 h-[25px] w-[15px]" icon={faEnvelope} />
                        <h5 className="w-[85%] break-words">contact@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className="bg-main lg:flex lg:justify-center">
                <div className=" p-[10px] flex justify-between lg:w-[1200px]">
                    <div>
                        <p className="text-white text-xs leading-[30px]">© Theme sưu tầm</p>
                    </div>
                    <div>
                        <button onClick={handleScrollToTop} className="bg-black w-[30px] h-[30px] rounded-full ">
                            <FontAwesomeIcon
                                className="text-white p-[7px] hover:text-red-500 transition-colors"
                                icon={faAngleUp}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
