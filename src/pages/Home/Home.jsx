import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLaptop, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="flex justify-center bg-bgr  my-[35px]">
            <div className="w-[1200px] ">
                <div className="flex justify-around flex-wrap text-center">
                    <Link
                        to={'/predict'}
                        className="my-3 group overflow-hidden w-[260px] cursor-pointer border border-solid border-[#d6d6d6] transition-all duration-400 ease-linear"
                    >
                        <div className="h-[150px] bg-main leading-[120px] group-hover:bg-white">
                            <div className="h-[100px]">
                                <FontAwesomeIcon
                                    className="group-hover:text-main group-hover:animate-moveFromLeft text-white text-[48px] transition-all duration-400 ease-linear"
                                    icon={faSitemap}
                                />
                            </div>

                            <div className="h-[50px] text-white text-xl group-hover:text-main transition-all duration-400 ease-linear">
                                <p className="leading-[50px] group-hover:animate-moveFromRight transition-all duration-400 ease-linear">
                                    Dự đoán
                                </p>
                            </div>
                        </div>
                        <div className="h-[50px]">
                            <div className="h-full bg-white text-[#666] group-hover:text-white group-hover:bg-main transition-all duration-400 ease-linear">
                                <p className=" leading-[50px] group-hover:animate-moveFromBottom transition-all duration-400 ease-linear">
                                    Xem thêm
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={'/breastcanner'}
                        className="my-3 group overflow-hidden w-[260px] cursor-pointer border border-solid border-[#d6d6d6] transition-all duration-400 ease-linear"
                    >
                        <div className="h-[150px] bg-main leading-[120px] group-hover:bg-white">
                            <div className="h-[100px]">
                                <FontAwesomeIcon
                                    className="group-hover:text-main group-hover:animate-moveFromLeft text-white text-[48px] transition-all duration-400 ease-linear"
                                    icon={faLightbulb}
                                />
                            </div>

                            <div className="h-[50px] text-white text-xl group-hover:text-main transition-all duration-400 ease-linear">
                                <p className="leading-[50px] group-hover:animate-moveFromRight transition-all duration-400 ease-linear">
                                    Bệnh ung thư vú
                                </p>
                            </div>
                        </div>
                        <div className="h-[50px]">
                            <div className="h-full bg-white text-[#666] group-hover:text-white group-hover:bg-main transition-all duration-400 ease-linear">
                                <p className=" leading-[50px] group-hover:animate-moveFromBottom transition-all duration-400 ease-linear">
                                    Xem thêm
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={'/technology'}
                        className="my-3 group overflow-hidden w-[260px] cursor-pointer border border-solid border-[#d6d6d6] transition-all duration-400 ease-linear"
                    >
                        <div className="h-[150px] bg-main leading-[120px] group-hover:bg-white">
                            <div className="h-[100px]">
                                <FontAwesomeIcon
                                    className="group-hover:text-main group-hover:animate-moveFromLeft text-white text-[48px] transition-all duration-400 ease-linear"
                                    icon={faLaptop}
                                />
                            </div>

                            <div className="h-[50px] text-white text-xl group-hover:text-main transition-all duration-400 ease-linear">
                                <p className="leading-[50px] group-hover:animate-moveFromRight transition-all duration-400 ease-linear">
                                    Công nghệ
                                </p>
                            </div>
                        </div>
                        <div className="h-[50px]">
                            <div className="h-full bg-white text-[#666] group-hover:text-white group-hover:bg-main transition-all duration-400 ease-linear">
                                <p className=" leading-[50px] group-hover:animate-moveFromBottom transition-all duration-400 ease-linear">
                                    Xem thêm
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
