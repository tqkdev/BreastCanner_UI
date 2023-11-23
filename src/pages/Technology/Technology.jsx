import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Technology() {
    return (
        <main className="flex justify-center">
            <div className="w-[1200px]">
                <div className="p-4 text-justify">
                    <Link to={'/'} className="flex w-[120px] h-[30px] my-3 group">
                        <FontAwesomeIcon className="w-[20px] h-[30px] group-hover:text-blue-600" icon={faArrowLeft} />
                        <p className="leading-[30px] ml-2 text-[18px] group-hover:text-blue-600">Quay lại</p>
                    </Link>
                    <div className="mt-2">
                        <div>
                            <h1 className="text-3xl font-medium">
                                Thuật toán CNN là gì? Cấu trúc mạng Convolutional Neural Network
                            </h1>
                        </div>
                        <h2 className="text-xl font-medium mt-2">CNN &#40;Convolutional Neural Network&#41; là gì?</h2>
                        <p className="mt-1.5">
                            CNN là gì? Convolutional Neural Network &#40;CNNs &#8209; Mạng nơ-ron tích chập&#41; là một
                            trong những mô hình Deep Learning tiên tiến. Nó giúp cho chúng ta xây dựng được những hệ
                            thống thông minh với độ chính xác cao như hiện nay.
                        </p>
                        <p className="mt-1.5">
                            CNN được sử dụng nhiều trong các bài toán nhận dạng các object trong ảnh. Để tìm hiểu tại
                            sao thuật toán này được sử dụng rộng rãi cho việc nhận dạng &#40;detection&#41;, chúng ta
                            hãy cùng tìm hiểu về thuật toán này.
                        </p>
                        <h2 className="text-xl font-medium mt-2">Tìm hiểu Convolutional là gì?</h2>
                        <p className="mt-1.5">
                            Là một cửa sổ trượt &#40;Sliding Windows&#41; trên một ma trận như mô tả hình dưới:
                        </p>

                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156758/Breast%20Canner/Convolution_schematic_m5dqyd.gif"
                                alt="Convolution"
                            />
                        </div>
                        <p className="mt-1.5">
                            Các convolutional layer có các parameter&#40;kernel&#41; đã được học để tự điều chỉnh lấy ra
                            những thông tin chính xác nhất mà không cần chọn các feature.
                        </p>
                        <p className="mt-1.5">
                            Trong hình ảnh ví dụ trên, ma trận bên trái là một hình ảnh trắng đen được số hóa. Ma trận
                            có kích thước 5&#215;5 và mỗi điểm ảnh có giá trị 1 hoặc 0 là giao điểm của dòng và cột.
                        </p>
                        <p className="mt-1.5">
                            Convolution hay tích chập là nhân từng phần tử trong ma trận 3. Sliding Window hay còn gọi
                            là kernel, filter hoặc feature detect là một ma trận có kích thước nhỏ như trong ví dụ trên
                            là 3&#215;3.
                        </p>
                        <p className="mt-1.5">
                            Convolution hay tích chập là nhân từng phần tử trong ma trận 3. Sliding Window hay còn gọi
                            là kernel, filter hoặc feature detect là một ma trận có kích thước nhỏ như trong ví dụ trên
                            là 3&#215;3.
                        </p>

                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156758/Breast%20Canner/Convolution-2_rkby5y.png"
                                alt="Convolution"
                            />
                        </div>

                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156758/Breast%20Canner/Convolution-1_ovdcwu.png"
                                alt="Convolution"
                            />
                        </div>

                        <h2 className="text-xl font-medium mt-2">Cấu trúc mạng CNN</h2>
                        <p className="mt-1.5">
                            Mạng CNN là một tập hợp các lớp Convolution chồng lên nhau và sử dụng các hàm nonlinear
                            activation như ReLU và tanh để kích hoạt các trọng số trong các node. Mỗi một lớp sau khi
                            thông qua các hàm kích hoạt sẽ tạo ra các thông tin trừu tượng hơn cho các lớp tiếp theo.
                        </p>
                        <p className="mt-1.5">
                            Mỗi một lớp sau khi thông qua các hàm kích hoạt sẽ tạo ra các thông tin trừu tượng hơn cho
                            các lớp tiếp theo. Trong mô hình mạng truyền ngược &#40;feedforward neural network&#41; thì
                            mỗi neural đầu vào &#40;input node&#41; cho mỗi neural đầu ra trong các lớp tiếp theo.
                        </p>
                        <p className="mt-1.5">
                            Mô hình này gọi là mạng kết nối đầy đủ &#40;fully connected layer&#41; hay mạng toàn vẹn
                            &#40;affine layer&#41;. Còn trong mô hình CNNs thì ngược lại. Các layer liên kết được với
                            nhau thông qua cơ chế convolution.
                        </p>
                        <p className="mt-1.5">
                            Layer tiếp theo là kết quả convolution từ layer trước đó, nhờ vậy mà ta có được các kết nối
                            cục bộ. Như vậy mỗi neuron ở lớp kế tiếp sinh ra từ kết quả của filter áp đặt lên một vùng
                            ảnh cục bộ của neuron trước đó.
                        </p>
                        <p className="mt-1.5">
                            Mỗi một lớp được sử dụng các filter khác nhau thông thường có hàng trăm hàng nghìn filter
                            như vậy và kết hợp kết quả của chúng lại. Ngoài ra có một số layer khác như
                            pooling/subsampling layer dùng để chắt lọc lại các thông tin hữu ích hơn &#40;loại bỏ các
                            thông tin nhiễu&#41;.
                        </p>
                        <p className="mt-1.5">
                            Trong quá trình huấn luyện mạng &#40;traning&#41; CNN tự động học các giá trị qua các lớp
                            filter dựa vào cách thức mà bạn thực hiện. Ví dụ trong tác vụ phân lớp ảnh, CNNs sẽ cố gắng
                            tìm ra thông số tối ưu cho các filter tương ứng theo thứ tự raw pixel &#8250; edges &#8250;
                            shapes &#8250; facial &#8250; high-level features. Layer cuối cùng được dùng để phân lớp
                            ảnh.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156761/Breast%20Canner/cnn_vdwrd9.png"
                                alt="cnn"
                            />
                        </div>

                        <p className="mt-1.5">
                            Trong mô hình CNN có 2 khía cạnh cần quan tâm là tính bất biến &#40;Location Invariance&#41;
                            và tính kết hợp &#40;Compositionality&#41;. Với cùng một đối tượng, nếu đối tượng này được
                            chiếu theo các gốc độ khác nhau &#40;translation, rotation, scaling&#41; thì độ chính xác
                            của thuật toán sẽ bị ảnh hưởng đáng kể.
                        </p>
                        <p className="mt-1.5">
                            Pooling layer sẽ cho bạn tính bất biến đối với phép dịch chuyển &#40;translation&#41;, phép
                            quay &#40;rotation&#41; và phép co giãn &#40;scaling&#41;. Tính kết hợp cục bộ cho ta các
                            cấp độ biểu diễn thông tin từ mức độ thấp đến mức độ cao và trừu tượng hơn thông qua
                            convolution từ các filter.
                        </p>
                        <p className="mt-1.5">
                            Đó là lý do tại sao CNNs cho ra mô hình với độ chính xác rất cao. Cũng giống như cách con
                            người nhận biết các vật thể trong tự nhiên.
                        </p>
                        <p className="mt-1.5">Mạng CNN sử dụng 3 ý tưởng cơ bản:</p>

                        <ul className="list-disc ml-8">
                            <li className="mt-1.5">các trường tiếp nhận cục bộ &#40;local receptive field&#41;</li>
                            <li className="mt-1.5">trọng số chia sẻ &#40;shared weights&#41;</li>
                            <li className="mt-1.5">tổng hợp &#40;pooling&#41;.</li>
                        </ul>
                        <h3>Trường tiếp nhận cục bộ &#40;local receptive field&#41;</h3>

                        <p className="mt-1.5">
                            Đầu vào của mạng CNN là một ảnh. Ví dụ như ảnh có kích thước 28&#215;28 thì tương ứng đầu
                            vào là một ma trận có 28&#215;28 và giá trị mỗi điểm ảnh là một ô trong ma trận. Trong mô
                            hình mạng ANN truyền thống thì chúng ta sẽ kết nối các neuron đầu vào vào tầng ảnh.
                        </p>
                        <p className="mt-1.5">
                            Tuy nhiên trong CNN chúng ta không làm như vậy mà chúng ta chỉ kết nối trong một vùng nhỏ
                            của các neuron đầu vào như một filter có kích thước 5&#215;5 tương ứng &#40;28- 5 + 1&#41;
                            24 điểm ảnh đầu vào. Mỗi một kết nối sẽ học một trọng số và mỗi neuron ẩn sẽ học một bias.
                            Mỗi một vùng 5&#215;5 đấy gọi là một trường tiếp nhận cục bộ.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156759/Breast%20Canner/local-receptive-field_jrcbfy.png"
                                alt="local-receptive-field"
                            />
                        </div>
                        <p className="mt-1.5">
                            Một cách tổng quan, ta có thể tóm tắt các bước tạo ra 1 hidden layer bằng các cách sau:
                        </p>
                        <h4 className="font-medium text-lg mt-2">1. Tạo ra neuron ẩn đầu tiên trong lớp ẩn 1</h4>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156760/Breast%20Canner/local-receptive-field-2_nlqtm1.png"
                                alt="local-receptive-field"
                            />
                        </div>
                        <h4 className="font-medium text-lg mt-2">
                            2. Dịch filter qua bên phải một cột sẽ tạo được neuron ẩn thứ 2.
                        </h4>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156759/Breast%20Canner/local-receptive-field-3_qxbvyq.png"
                                alt="local-receptive-field"
                            />
                        </div>
                        <p className="mt-1.5">
                            với bài toán nhận dạng ảnh người ta thường gọi ma trận lớp đầu vào là feature map, trọng số
                            xác định các đặc trương là shared weight và độ lệch xác định một feature map là shared bias.
                            Như vậy đơn giản nhất là qua các bước trên chúng ta chỉ có 1 feature map. Tuy nhiên trong
                            nhận dạng ảnh chúng ta cần nhiều hơn một feature map.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156760/Breast%20Canner/local-receptive-field-4_grglyw.png"
                                alt="local-receptive-field"
                            />
                        </div>
                        <p className="mt-1.5">
                            Như vậy, local receptive field thích hợp cho việc phân tách dữ liệu ảnh, giúp chọn ra những
                            vùng ảnh có giá trị nhất cho việc đánh giá phân lớp.
                        </p>

                        <h3>Trọng số chia sẻ &#40;shared weight and bias&#41;</h3>
                        <p className="mt-1.5">
                            Đầu tiên, các trọng số cho mỗi filter &#40;kernel&#41; phải giống nhau. Tất cả các nơ-ron
                            trong lớp ẩn đầu sẽ phát hiện chính xác feature tương tự chỉ ở các vị trí khác nhau trong
                            hình ảnh đầu vào. Chúng ta gọi việc map từ input layer sang hidden layer là một feature map.
                            Vậy mối quan hệ giữa số lượng Feature map với số lượng tham số là gì?
                        </p>
                        <p className="mt-1.5">
                            Tóm lại, một convolutional layer bao gồm các feature map khác nhau. Mỗi một feature map giúp
                            detect một vài feature trong bức ảnh. Lợi ích lớn nhất của trọng số chia sẻ là giảm tối đa
                            số lượng tham số trong mạng CNN.
                        </p>
                        <h3>Lớp tổng hợp &#40;pooling layer&#41;</h3>
                        <p className="mt-1.5">
                            Lớp pooling thường được sử dụng ngay sau lớp convulational để đơn giản hóa thông tin đầu ra
                            để giảm bớt số lượng neuron.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156761/Breast%20Canner/cnn_vdwrd9.png"
                                alt="cnn"
                            />
                        </div>
                        <p className="mt-1.5">
                            Thủ tục pooling phổ biến là max-pooling, thủ tục này chọn giá trị lớn nhất trong vùng đầu
                            vào 2&#215;2.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156760/Breast%20Canner/pooling-layer_c7appa.png"
                                alt="pooling-layer"
                            />
                        </div>
                        <p className="mt-1.5">
                            Như vậy qua lớp Max Pooling thì số lượng neuron giảm đi phân nửa. Trong một mạng CNN có
                            nhiều Feature Map nên mỗi Feature Map chúng ta sẽ cho mỗi Max Pooling khác nhau. Chúng ta có
                            thể thấy rằng Max Pooling là cách hỏi xem trong các đặc trưng này thì đặc trưng nào là đặc
                            trưng nhất. Ngoài Max Pooling còn có L2 Pooling.
                        </p>
                        <p className="mt-1.5">
                            Cuối cùng ta đặt tất cả các lớp lại với nhau thành một CNN với đầu ra gồm các neuron với số
                            lượng tùy bài toán.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156760/Breast%20Canner/pooling-layer-2_aank0p.png"
                                alt="pooling-layer"
                            />
                        </div>
                        <p className="mt-1.5">
                            2 lớp cuối cùng của các kết nối trong mạng là một lớp đầy đủ kết nối &#40;fully connected
                            layer&#41; . Lớp này nối mọi nơron từ lớp max pooled tới mọi nơron của tầng ra.
                        </p>
                        <h2 className="text-xl font-medium mt-2">Cách chọn tham số cho CNN</h2>
                        <ul className="list-disc ml-8">
                            <li className="mt-1.5">
                                Số các convolution layer: càng nhiều các convolution layer thì performance càng được cải
                                thiện. Sau khoảng 3 hoặc 4 layer, các tác động được giảm một cách đáng kể
                            </li>
                            <li className="mt-1.5">Filter size: thường filter theo size 5&#215;5 hoặc 3&#215;3</li>
                            <li className="mt-1.5">
                                Pooling size: thường là 2&#215;2 hoặc 4&#215;4 cho ảnh đầu vào lớn
                            </li>
                            <li className="mt-1.5">
                                Cách cuối cùng là thực hiện nhiều lần việc train test để chọn ra được param tốt nhất.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mt-6">
                            <h1 className="text-3xl font-medium">Phân vùng ảnh &#40;U-net&#41;</h1>
                        </div>
                        <h2 className="text-xl font-medium mt-2">Phân vùng ảnh là gì?</h2>
                        <p className="mt-1.5">
                            Phân vùng ảnh &#40;Image Segmentation&#41; là một phần quan trọng trong lĩnh vực thị giác
                            máy tính &#40;Computer Vision&#41;. Nó là quá trình chia nhỏ một bức ảnh thành nhiều phần,
                            với mục tiêu đơn giản hóa hoặc thay đổi biểu diễn của bức ảnh để dễ dàng phân tích. Phân
                            vùng ảnh cũng có một mục tiêu chung với phát hiện vật thể &#40;Object Detection&#41; là phát
                            hiện ra vùng ảnh chứa vật thể và gán nhãn phù hợp cho chúng. Tuy nhiên tiêu chuẩn về độ
                            chính xác của Image Segmentation ở mức cao hơn so với Object Detection khi nó yêu cầu nhãn
                            dự báo đúng tới từng pixel.
                        </p>
                        <p className="mt-1.5">
                            Trong quá trình này, mỗi pixel trong hình ảnh được liên kết với một loại đối tượng. Có hai
                            kiểu phân đoạn hình ảnh chính &#8209; phân đoạn ngữ nghĩa &#40;semantic segmentation&#41; và
                            phân đoạn cá thể &#40;instance segmentation&#41;. Từ đó, Phân vùng ảnh có thể chỉ ra thông
                            tin chi tiết của bức ảnh, bao gồm: Vị trí của vật thể trong ảnh, hình dạng của vật thể và
                            từng pixel nào thuộc về vật thể nào.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156759/Breast%20Canner/Hai-kieu-phan-doan-hinh-anh_siqxoz.png"
                                alt="Hai-kieu-phan-doan-hinh-anh"
                            />
                        </div>

                        <h2 className="text-xl font-medium mt-2">Kiến trúc hệ thống phân vùng ảnh</h2>
                        <p className="mt-1.5">
                            Kiến trúc cơ bản trong phân đoạn hình ảnh bao gồm một bộ mã hóa &#40;encoder&#41; và một bộ
                            giải mã &#40;decoder&#41;.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156759/Breast%20Canner/Kien-truc-phan-vung-anh_q7qkxf.png"
                                alt="Kien-truc-phan-vung-anh"
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className="italic mt-[-55px]">
                                Kiến trúc bộ mã hóa-giải mã phù hợp sâu để phân đoạn hình ảnh &#40;nguồn: Cornell
                                University&#41;
                            </p>
                        </div>
                        <p className="mt-1.5">
                            Bộ mã hóa trích xuất các tính năng từ hình ảnh thông qua các bộ lọc. Bộ giải mã chịu trách
                            nhiệm tạo ra đầu ra cuối cùng thường là một mặt nạ phân đoạn chứa đường viền của đối tượng.
                        </p>

                        <h2 className="text-xl font-medium mt-2">Các ứng dụng của phân vùng ảnh</h2>
                        <p className="mt-1.5">
                            Phân vùng ảnh có rất nhiều các ứng dụng trong y học, xe tự hành, xử lý ảnh vệ tinh,…
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-1.5">
                                Y học: Trong y học, thuật toán Image Segmentation có thể hỗ trợ bác sĩ chẩn đoán khối u
                                từ ảnh x-quang. Ưu điểm của Image Segmentation đó là không chỉ cho chúng ta biết vị trí
                                của các khối u trong ảnh mà còn cho chúng ta biết được hình dạng của chúng.
                            </li>
                            <li className="mt-1.5">
                                Xe tự hành: Xe tự hành đòi hỏi phải liên tục nhận thức, xử lý và lên kế hoạch trong một
                                môi trường luôn có sự thay đổi. Vì yêu cầu an toàn tuyệt đối và độ chính xác cao trong
                                mọi quyết định nên một hệ thống xe tự hành cần phải xác định chính xác các vật thể xuất
                                hiện khi tham gia giao thông như người, đèn tín hiệu, biển báo, vạch kẻ đường, xe cộ.
                            </li>
                            <li className="mt-1.5">
                                Xử lý ảnh vệ tinh: Các vệ tinh quay quanh trái đất sẽ liên tục thu thập hình ảnh bề mặt
                                trái đất ở những vùng khác nhau. Từ các bức ảnh chụp vệ tinh, mô hình Image Segmentation
                                sẽ phân đoạn hình ảnh thành tuyến đường, khu phố, biển cả, cây cối,….
                            </li>
                            <li className="mt-1.5">
                                Ứng dụng trong nông nghiệp: Chúng ta có thể tiết kiệm được một lượng lớn thuốc trừ sâu
                                trong nông nghiệp nhờ sử dụng hệ thống phun thuốc trừ sâu tự động có khả năng phân biệt
                                được diện tích cỏ và cây trồng dựa trên thuật toán Image Segmentation. Khi diện tích cỏ
                                lấn át so với cây trồng thì hệ thống sẽ tự động kích hoạt.
                            </li>
                            <li className="mt-1.5">
                                Cảnh báo cháy rừng: Những hệ thống kiểm soát cháy rừng có thể segment được chính xác vị
                                trí phát sinh các đám cháy từ ảnh chụp vệ tinh. Từ đó đưa ra cảnh báo về quy mô và mức
                                độ lây lan của các đám cháy trên diện rộng.
                            </li>
                        </ul>
                        <h2 className="text-xl font-medium mt-2">Thuật toán phân vùng ảnh U-net</h2>
                        <p className="mt-1.5">
                            U-Net là một mạng nơ-ron tích chập ban đầu được phát triển để phân đoạn các hình ảnh y sinh.
                            Kiến trúc của nó trông giống như chữ U và do đó có tên là U-Net. Kiến trúc của nó được tạo
                            thành từ hai phần, phần bên trái &#8209; trích xuất đặc trưng &#40;encoder&#41; và phần bên
                            phải &#8209; giải mã đặc trưng &#40;decoder&#41;. Mục đích của encoder là cô đọng thông tin
                            ngữ cảnh trong khi vai trò của decoder là giải mã thông tin, xác định chính xác các đối
                            tượng.
                        </p>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698156758/Breast%20Canner/Kien-truc-cua-U-net_zo1z3e.png"
                                alt="Kien-truc-cua-U-net"
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className="italic">
                                Hình ảnh mô tả kiến trúc U-net &#8209; Olaf Ronneberger et. al 2015 &#40;nguồn: Cornell
                                University&#41;
                            </p>
                        </div>
                    </div>
                </div>
                <div className="inline-block float-right">
                    <Link to={'/predict'} className="flex justify-end  h-[30px] my-3 group">
                        <p className="leading-[30px] mr-2 text-[18px] group-hover:text-blue-600">
                            Dự đoán bệnh ung thư vú
                        </p>
                        <FontAwesomeIcon className="w-[20px] h-[30px] group-hover:text-blue-600" icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Technology;
