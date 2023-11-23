import { faArrowLeft, faArrowRight, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Predict() {
    const [dataResponse, setDataResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);
    const [error, setError] = useState(false);
    const [file, setFile] = useState();
    let timeoutId;

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    // Hàm kiểm tra và log file
    const handleCheckFile = () => {
        if (file) {
            handleUpload();
            setError(false);
        } else {
            handleOpenToast();
        }
    };

    const handleOpenToast = () => {
        // Hủy bỏ hàm setTimeout hiện tại nếu có
        clearTimeout(timeoutId);
        setToast(true);
        // Đặt thời gian chờ 2 giây trước khi ẩn toast
        timeoutId = setTimeout(() => {
            setToast(false);
        }, 3000);
    };
    const handleCloseToast = () => {
        setToast(false);
    };

    const handleUpload = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        axios
            .post('/api/predict', formData)
            .then((response) => {
                setLoading(false);
                setDataResponse(response.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
                console.error(error);
            });
    };

    return (
        <main className="flex justify-center mb-[22px]">
            <div className="w-[1200px] m-4 p-4 relative truncate">
                {toast && (
                    <div className="absolute right-0 animate-moveToast">
                        <div
                            id="toast-default"
                            className="flex items-center w-full max-w-xs p-2 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                            role="alert"
                        >
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                                <FontAwesomeIcon icon={faExclamation} />
                            </div>
                            <div className="ms-3 text-sm font-normal">Vui lòng chọn ảnh!</div>
                            <button
                                onClick={handleCloseToast}
                                type="button"
                                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                data-dismiss-target="#toast-default"
                                aria-label="Close"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <Link to={'/'} className="flex w-[120px] h-[30px] my-3 group">
                    <FontAwesomeIcon className="w-[20px] h-[30px] group-hover:text-blue-600" icon={faArrowLeft} />
                    <p className="leading-[30px] ml-2 text-[18px] group-hover:text-blue-600">Quay lại</p>
                </Link>

                <h1 className="text-center text-xl font-medium">Hãy chọn ảnh cần dự đoán:</h1>
                <div className="flex justify-center flex-wrap mt-5">
                    <input
                        className="sm:text-[16px] sm:w-[280px] sm:leading-[35px] text-[14px] leading-[32px] w-[220px] mb-2  cursor-pointer shadow-4xl hover:shadow-3xl border "
                        type="file"
                        onChange={handleFile}
                    />
                    <button
                        onClick={handleCheckFile}
                        className="sm:mt-0 sm:text-[18px] sm:w-[100px] sm:h-[40px] text-[13px] shadow-4xl hover:shadow-3xl bg-main text-white w-[80px] h-[38px] rounded hover:bg-white hover:text-main"
                    >
                        Dự đoán
                    </button>
                </div>

                {error && <h2 className="mt-4 text-red-500 text-center">Có lỗi! Vui lòng tải lại trang!!!</h2>}

                {loading && (
                    <div className="flex justify-center mt-12">
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}

                {!loading && dataResponse && (
                    <div className="mt-8">
                        <div className="text-center">
                            <h1 className="font-semibold">Kết quả dự đoán: {dataResponse.name_predict}</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="m-2">
                                <img src={`data:image/png;base64,${dataResponse.img_base64}`} alt="Ảnh đã tải lên" />
                            </div>
                            <div className="m-2">
                                <img
                                    src={`data:image/png;base64,${dataResponse.overlay_base64}`}
                                    alt="Ảnh đã tải lên"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="inline-block float-right">
                    <Link to={'/breastcanner'} className="flex justify-end  h-[30px] my-3 group">
                        <p className="leading-[30px] mr-2 text-[18px] group-hover:text-blue-600">Bệnh ung thư vú</p>
                        <FontAwesomeIcon className="w-[20px] h-[30px] group-hover:text-blue-600" icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Predict;
