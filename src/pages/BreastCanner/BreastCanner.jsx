import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function BreastCanner() {
    return (
        <main className="flex justify-center">
            <div className="w-[1200px]">
                <div className="p-4 text-justify">
                    <Link to={'/'} className="flex w-[120px] h-[30px] my-3 group">
                        <FontAwesomeIcon className="w-[20px] h-[30px] group-hover:text-blue-600" icon={faArrowLeft} />
                        <p className="leading-[30px] ml-2 text-[18px] group-hover:text-blue-600">Quay lại</p>
                    </Link>
                    <div>
                        <h1 className="text-blue-800 text-2xl font-semibold">
                            UNG THƯ VÚ: DẤU HIỆU, NGUYÊN NHÂN VÀ CÁCH PHÒNG NGỪA
                        </h1>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Ung thư vú là gì?</h2>
                        <p className="mt-3">
                            Ung thư vú &#10088;breast cancer&#10089; là bệnh lý u vú ác tính khi các tế bào ác tính hình
                            thành từ trong mô tuyến vú. Các tế bào ung thư sau đó có thể phát triển lan rộng ra toàn bộ
                            vú và di căn sang các bộ phận khác trên cơ thể. Đây là loại ung thư thường gặp nhất ở nữ
                            giới.
                        </p>
                        <p className="mt-3">
                            Theo ghi nhận tỷ lệ mắc mới trên toàn cầu của ung thư vú ở nữ giới là 24.5% cao nhất trong
                            số các loại ung thư ở phụ nữ &#10088;theo Trung tâm ghi nhận ung thư toàn cầu Globocan, số
                            liệu năm 2020&#10089;.
                        </p>
                        <p className="mt-3">
                            Loại ung thư vú thường gặp nhất là ung thư ống tuyến vú &#10088;ductal carcinoma&#10089;,
                            xuất phát từ tế bào của ống tuyến. Ung thư xuất phát từ tiểu thùy và thùy tuyến vú được gọi
                            là ung thư tiểu thùy &#10088;lobular carcinoma&#10089;. Ung thư vú dạng viêm thường có biểu
                            hiện sưng, nóng và đỏ, đây là dạng ung thư vú ít gặp.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">8 Dấu hiệu ung thư vú</h2>
                        <p className="mt-3">
                            Nếu có những triệu chứng này, bạn nên đến gặp bác sĩ ngay để được thăm khám và chẩn đoán kịp
                            thời:
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Xuất hiện khối u ở vú, gần xung quanh vú hoặc dưới nách;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                            <li className="mt-2">Dịch từ núm vú đặc biệt dịch có máu;</li>
                        </ul>
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-[70%] object-cover"
                                src="https://res.cloudinary.com/dyoctwffi/image/upload/v1698151359/Breast%20Canner/dau-hieu-ung-thu-vu_usof8r.jpg"
                                alt="dau-hieu"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Nguyên nhân ung thư vú</h2>
                        <p className="mt-3">
                            Theo quy luật tất yếu của tự nhiên, trong cơ thể con người ai cũng mang một nguy cơ ung thư
                            vú tiềm tàng trong suốt cuộc đời và nguy cơ này tăng lên theo độ tuổi và được tính bằng cách
                            cộng dồn nguy cơ trong từng thập niên. Tuy nhiên, có nhiều yếu tố khác làm tăng hoặc thúc
                            đẩy sự phát triển của ung thư vú. Những yếu tố nguy cơ ung thư vú quan trọng có thể kể đến
                            là:
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Lớn tuổi.</li>
                            <li className="mt-2">Bản thân có các bệnh ác tính hoặc lành tính tại vú. </li>
                            <li className="mt-2">
                                Ít tham gia các hoạt động thể chất, chế độ ăn uống không lành mạnh, sử dụng nhiều rượu
                                bia, thuốc lá.
                            </li>
                            <li className="mt-2">Thừa cân, béo phì.</li>
                            <li className="mt-2">Phụ nữ có quá trình dậy thì sớm hoặc bước vào mãn kinh muộn.</li>
                            <li className="mt-2">
                                Phụ nữ lớn tuổi mới có con đầu lòng hoặc không sinh con hoặc không nuôi con bằng sữa mẹ.
                            </li>
                            <li className="mt-2">
                                Phụ nữ một số đột biến về gen như BRCA 1 hoặc BRCA 2. Theo thống kê khoảng 10% số ca ung
                                thư vú có yếu tố gen đột biến.
                            </li>
                            <li className="mt-2">Phụ nữ có sử dụng các liệu pháp nội tiết tố thay thế. </li>
                            <li className="mt-2">
                                Tiền sử gia đình có người mắc ung thư vú, đặc biệt là quan hệ thế hệ 1 &#10088;mẹ, chị
                                em gái, con gái&#10089;.
                            </li>
                            <li className="mt-2">Từng xạ trị vào vùng vú hoặc vùng ngực.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Ung thư vú có nguy hiểm không?</h2>
                        <p className="mt-3">
                            Tỷ lệ tử vong do bệnh ung thư vú đứng hàng đầu trong nhóm nguyên nhân tử vong do ung thư ở
                            nữ giới trên toàn thế giới. Mỗi năm nước ta có khoảng hơn 21.555 ca mắc mới và hơn 9.315 ca
                            tử vong. Ung thư vú ở nam giới chiếm khoảng 1% các trường hợp.
                        </p>
                        <p className="mt-3">Một số dấu hiệu gợi ý ung thư vú bao gồm:</p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Vú có sự thay đổi về hình dạng và kích thước;</li>
                            <li className="mt-2">Vùng da ở ngực, núm vú hoặc quầng vú xuất hiện vảy, đỏ hoặc sưng;</li>
                            <li className="mt-2">
                                Khi sờ phát hiện có khối u ở vú, hoặc vùng xung quanh vú như dưới nách;
                            </li>
                            <li className="mt-2">Núm vú bị tụt;</li>
                            <li className="mt-2">Vùng vú hoặc núm vú xuất hiện đau nhức;</li>
                            <li className="mt-2">Vùng vú hoặc núm vú xuất hiện đau nhức;</li>
                            <li className="mt-2">Vùng vú hoặc núm vú xuất hiện đau nhức;</li>
                        </ul>
                        <p className="mt-3">
                            Với những vết lõm ở da như Những vết lõm da vú giống như da quả cam được gọi là sần da cam.
                            Ung thư vú ở giai đoạn đầu, phần tổn thương chỉ ảnh hưởng đến ở xung quanh vú, nếu không
                            được nhận biết và thăm khám sớm kết hợp điều trị kịp thời, bệnh sẽ chuyển biến sang các giai
                            đoạn nặng hơn và ảnh hưởng đến nhiều cơ quan trong cơ thể.
                        </p>
                        <p className="mt-3">
                            Tế bào ung thư khi lây lan vào trong cơ thể sẽ thông qua 3 con đường chính là: mô tế bào lân
                            cận, hệ thống bạch huyết và qua đường máu. Việc các tế bào ung thư xâm lấn và lây lan trong
                            cơ thể được gọi là di căn:
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">
                                Mô tế bào lân cận: Lúc này tế bào ung thư đã lan rộng từ cơ quan khởi bệnh và phát triển
                                xâm lấn sang các mô tế bào lân cận.
                            </li>
                            <li className="mt-2">
                                Hệ thống bạch huyết: Lúc này tế bào ung thư đã lan rộng từ cơ quan khởi phát bệnh vào hệ
                                thống bạch huyết sau đó di chuyển trong mạch bạch huyết để đến với các cơ quan khác của
                                cơ thể.
                            </li>
                            <li className="mt-2">
                                Máu: Sau khi tế bào ung thư xâm lấn từ cơ quan khởi phát bệnh vào máu và di chuyển ngay
                                trong mạch máu để lan đến các cơ quan khác của cơ thể.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Đặc điểm của khối u di căn là có đặc tính giống với khối u nguyên phát &#10088;khối u ban
                            đầu&#10089;. Ví dụ nếu ung thư vú di căn xâm lấn đến xương, tế bào ung thư ở xương sẽ hoạt
                            động tương tự như tế bào ung thư ở vú. Trường hợp này được gọi là ung thư vú di căn xương,
                            không phải là ung thư xương nguyên phát.
                        </p>

                        <p className="mt-3">
                            Ở giai đoạn khối u nguyên phát di căn đến các mô và cơ quan trong cơ thể ở trường hợp nặng
                            có thể dẫn đến tử vong.Vì vậy việc khám tầm soát rất quan trọng trong việc tìm ra các dấu
                            hiệu bệnh lý trước khi người bệnh xuất hiện các triệu chứng. Mục tiêu của việc tầm soát là
                            phát hiện ra ung thư ở giai đoạn sớm để giúp cho điều trị khỏi hẳn bệnh. .
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Phân loại ung thư vú </h2>
                        <h3 className="mt-2 text-lg font-semibold">Ung thư vú không xâm lấn</h3>
                        <p className="mt-3">
                            Với ung thư vú không xâm lấn còn được gọi là ung thư biểu mô tại chỗ hoặc đôi khi được xem
                            là tổn thương tiền ung thư. Với ung thư vú không xâm lấn các tế bào ung thư chỉ giới hạn
                            trong các tiểu thuỳ vú hoặc trong các ống dẫn sữa. Với ung thư này, các tế bào ung thư chưa
                            phát triển hoặc xâm lấn và mô vú bình thường.{' '}
                        </p>
                        <p className="mt-3">
                            Có 2 dạng ung thư vú không xâm lấn là Ung thư ống tuyến vú tại chỗ và Ung thư ô tiểu thùy
                            tại chỗ.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Ung thư vú xâm lấn</h3>
                        <p className="mt-3">
                            Khi tế bào ung thư đã lan ra ngoài các ống tuyến hoặc các tiểu thùy của vú đến mô vú xung
                            quanh chúng được gọi là ung thư vú xâm lấn. Các dạng ung thư vú xâm lấn bao gồm:
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Bệnh Paget của núm vú;</li>
                            <li className="mt-2">Ung thư biểu mô ống tuyến xâm lấn;</li>
                            <li className="mt-2">Ung thư biểu mô ống tuyến xâm lấn;</li>
                            <li className="mt-2">Ung thư biểu mô ống tuyến xâm lấn;</li>
                            <li className="mt-2">Ung thư biểu mô tiểu thùy xâm lấn;</li>
                            <li className="mt-2">Ung thư vú tiến triển tại chỗ;</li>
                            <li className="mt-2">Ung thư vú tiến triển tại chỗ;</li>
                        </ul>
                        <h3 className="mt-2 text-lg font-semibold">Các dưới nhóm của ung thư vú</h3>
                        <p className="mt-3">Ung thư vú tiến triển tại chỗ;</p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Ung thư vú tiến triển tại chỗ;</li>
                            <li className="mt-2">Ung thư vú tiến triển tại chỗ;</li>
                            <li className="mt-2">Ung thư vú tiến triển tại chỗ;</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Các giai đoạn ung thư vú</h2>
                        <h3 className="mt-2 text-lg font-semibold">Giai đoạn 0</h3>
                        <p className="mt-3">
                            Giai đoạn này các tế bào bất thường đã xuất hiện nhưng chưa lan rộng ra mô kế cận, cũng có
                            thể gọi là ung thư tại chỗ tiếng anh là carcinoma in situ &#8209; CIS&#10089;. CIS chưa gọi
                            là ung thư nhưng tương lai có thể sẽ trở tiến triển thành ung thư.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Giai đoạn I, II, III</h3>
                        <p className="mt-3">
                            Tế bào ung thư đã xác định. Giai đoạn càng muộn, khối u càng lớn, khả năng lan rộng ra mô
                            xung quanh càng cao.
                        </p>

                        <p className="mt-3">Ngoài ra, bác sĩ có thể mô tả giai đoạn bệnh bằng một vài cách khác:</p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">
                                Tại chỗ &#10088;in situ&#10089;: Có tế bào bất thường nhưng chưa lan rộng ra mô xung
                                quanh.
                            </li>
                            <li className="mt-2">
                                Tại chỗ &#10088;localized&#10089;: Ung thư chỉ giới hạn ở cơ quan khởi phát, không có
                                dấu hiệu của sự lan tràn.
                            </li>
                            <li className="mt-2">
                                Tại vùng &#10088;regional&#10089;: Ung thư lan ra cơ quan/ mô/ hạch kế cận.
                            </li>
                            <li className="mt-2">
                                DI căn xa &#10088;distant&#10089;: Ung thư lan rộng ra các cơ quan xa trong cơ thể.
                            </li>
                            <li className="mt-2">
                                Không biết &#10088;unknown&#10089;: Không đủ thông tin để xác định giai đoạn.
                            </li>
                        </ul>

                        <h3 className="mt-2 text-lg font-semibold">Giai đoạn IV</h3>
                        <p className="mt-3">
                            Tế bào ung thư lan rộng sang các bộ phận và cơ quan khác trong cơ thể &#10088;gan, phổi,
                            xương, não, thận, hạch các vùng khác trong cơ thể,…&#10089;
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Chẩn đoán ung thư vú</h2>
                        <h3 className="mt-2 text-lg font-semibold">Khám vú</h3>
                        <p className="mt-3">
                            Việc khám vú như khám ở 2 bên vú cùng phần nách, thượng đòn để kiểm tra hạch các vùng lân
                            cận, kết hợp thăm khám các cơ quan bộ phận khác. Một số triệu chứng ung thư vú cần lưu ý như
                            đau đầu, đau xương, khó thở vì đó là dấu hiệu cho thấy có di căn xa.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Siêu âm vú</h3>
                        <p className="mt-3">
                            Siêu âm vú thông thường hoặc siêu âm 3D, siêu âm đàn hồi, siêu âm quét thể tích vú tự động
                            sẽ được bác sĩ chỉ định tùy trường hợp.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Chụp nhũ ảnh</h3>
                        <p className="mt-3">
                            Chụp nhũ ảnh &#10088;còn gọi là chụp X-quang tuyến vú&#10089; là phương pháp dùng tia X để
                            ghi hình ảnh tuyến vú, với mục đích phát hiện sớm các bất thường nghi ngờ và bệnh ung thư
                            vú. Bác sĩ Albert Salomon &#10088;1883-1976&#10089; là một phẫu thuật viên người Đức. Ông đã
                            chụp X-quang 3000 mẫu bệnh phẩm ung thư vú và nhận thấy rằng đa số các trường hợp ung thư vú
                            sẽ được biểu hiện bằng các nốt vôi hóa nhỏ và hạch nách. Đây là một thành quả hết sức quan
                            trọng, tạo nên nền móng cho việc sử dụng tia X để phát hiện sớm bệnh ung thư vú trên những
                            người chưa có triệu chứng.
                        </p>
                        <p className="mt-3">
                            Chụp nhũ ảnh thường được chỉ định với phụ nữ trên 40 tuổi với mục đích chẩn đoán khi họ có
                            các triệu chứng như sờ thấy khối u, da vú dày lên hoặc lõm vào, xuất hiện dịch tiết hoặc núm
                            vú bị thụt vào bất thường, các vết loét xuất hiện làm ăn mòn ở núm vú, gây đau đớn.{' '}
                        </p>

                        <p className="mt-3">
                            Với độ nhạy cao đến 70% &#10088;tức là nếu có 100 người mắc bệnh ung thư vú, thì nhũ ảnh có
                            thể phát hiện được 70 người&#10089; và giá thành hợp lý, cho đến hiện tại, nhũ ảnh được xem
                            là phương pháp tầm soát ung thư vú hiệu quả nhất. Các phương tiện khác như Siêu âm tuyến vú
                            &#10088;Ultrasound&#10089; và Cộng hưởng từ tuyến vú &#10088;MRI&#10089; sẽ đóng vai trò hỗ
                            trợ trong một số tình huống cụ thể và sẽ do bác sĩ chỉ định.
                        </p>

                        <h3 className="mt-2 text-lg font-semibold">Chụp cộng hưởng từ</h3>
                        <p className="mt-3">
                            Ở một số trường hợp bác sĩ có thể chỉ định làm cộng hưởng từ khi chưa xác định được bản chất
                            của tổn thương sau khi chụp nhũ ảnh, phần vú đã trải qua phẫu thuật tạo hình trước đó.…
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Xét nghiệm dịch từ núm vú</h3>
                        <p className="mt-3">
                            Việc dịch tiết bất thường ở núm vú cũng là 1 trong những dấu hiệu của ung thư vú. Việc xét
                            nghiệm tế bào học dịch tiết ở núm vú có mục đích truy tìm các tế bào ung thư bong ra giúp
                            ích cho việc chẩn đoán.{' '}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Sinh thiết vú</h3>
                        <p className="mt-3">
                            Sinh thiết vú là phương pháp lấy một phần khối u hoặc lấy hoàn toàn khối u vú dưới sự phân
                            tích của các chuyên gia giải phẫu bệnh cùng kính hiển vi về các chỉ số hình thái tế bào và
                            cấu trúc mô vú.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Phương pháp điều trị ung thư vú</h2>
                        <h3 className="mt-2 text-lg font-semibold">Phẫu thuật</h3>
                        <p className="mt-3">
                            Phần lớn bệnh nhân ung thư vú đều sẽ được phẫu thuật để cắt bỏ khối u tuyến vú. Một số
                            phương pháp phẫu thuật bao gồm:
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">
                                Phẫu thuật cắt vú bảo tồn &#10088;breast-conserving surgery&#10089;: Phẫu thuật cắt bỏ
                                khối u ác tính và một ít tế bào lành tính xung quanh khối u, và không cắt bỏ toàn bộ mô
                                vú còn lại.
                            </li>
                            <li className="mt-2">
                                Phẫu thuật cắt toàn bộ vú &#10088;total mastectomy&#10089;: Phẫu thuật cắt toàn bộ vú.
                                Nó còn được gọi là phẫu thuật cắt vú đơn giản &#10088;simple mastectomy&#10089;. Có thể
                                kết hợp lấy một vài hạch nách.
                            </li>
                            <li className="mt-2">
                                Phẫu thuật cắt vú triệt để cải biên &#10088;modified radical mastectomy&#10089;: Phẫu
                                thuật cắt bỏ toàn bộ vú, hạch nách và một phần cơ ngực.
                            </li>
                        </ul>
                        <h3 className="mt-2 text-lg font-semibold">Hóa trị </h3>
                        <p className="mt-3">
                            Sử dụng thuốc hóa chất để tiêu diệt các tế bào ung thư hoặc làm chậm sự phát triển của tế
                            bào ung thư. Khi thực hiện hóa trị &#10088;bằng đường uống hoặc đường tiêm truyền&#10089;,
                            thuốc sẽ theo đường máu để tìm diệt tế bào ung thư trong cơ thể. Hóa trị có thể thực hiện
                            trước mổ, sau mổ hoặc lúc tế bào ung thư đã cho di căn xa.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Xạ trị </h3>
                        <p className="mt-3">
                            Điều trị ung thư vú bằng xạ trị là phương pháp sử dụng các chùm tia năng lượng cao để tiêu
                            diệt tế bào ung thư hoặc ngăn chặn sự phát triển của chúng. Cách thức xạ trị được thực hiện
                            tùy thuộc loại và giai đoạn của ung thư.
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Liệu pháp nhắm trúng đích</h3>
                        <p className="mt-3">
                            Là sử dụng các loại thuốc hoặc chế phẩm có tác động “chọn lọc” lên một hay nhiều đặc tính
                            riêng biệt của các loại tế bào ung thư. So với hóa trị hoặc xạ trị, liệu pháp trúng đích
                            thường ít gây tác dụng phụ lên tế bào lành.{' '}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Liệu pháp nội tiết tố</h3>
                        <p className="mt-3">
                            Là phương pháp điều trị để loại bỏ nội tiết tố hoặc ức chế sự hoạt động của nội tiết tố từ
                            đó làm ngưng sự phát triển của tế bào ung thư.{' '}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Liệu pháp miễn dịch</h3>
                        <p className="mt-3">
                            Là biện pháp điều trị sử dụng hệ thống miễn dịch của bệnh nhân để chống lại bệnh ung thư.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-700 font-semibold mt-4">Phòng ngừa ung thư vú</h2>
                        <h3 className="mt-2 text-lg font-semibold">Dinh dưỡng</h3>
                        <p className="mt-3">
                            Hiện nay, không có một loại thực phẩm hay chế độ ăn có thể ngăn chặn ung thư vú. Tuy nhiên
                            việc lựa chọn đúng thực phẩm và chế độ ăn có thể giúp cơ thể bạn khỏe mạnh nhất có thể, tăng
                            cường hệ thống miễn dịch của bạn và giúp giảm nguy cơ mắc bệnh ung thư vú ở mức thấp nhất có
                            thể. Và không có thực phẩm hoặc chế độ ăn uống nào có thể chữa khỏi ung thư, mặc dù một số
                            chúng có thể giúp kiểm soát tác dụng phụ của việc điều trị hoặc giúp cơ thể bạn khỏe lại sau
                            khi điều trị. Một số lựa chọn thực phẩm có thể giúp điều trị ung thư hiệu quả hơn hoặc có
                            thể giúp bạn khỏe mạnh.{' '}
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="mt-2">Giữ trọng lượng cơ thể của bạn trong mức phù hợp.</li>
                            <li className="mt-2">Ăn nhiều rau và trái cây.</li>
                            <li className="mt-2">
                                Hạn chế lượng chất béo bão hòa tiêu thụ dưới 10% tổng lượng calo mỗi ngày và lượng chất
                                béo tiêu thụ được khuyến cáo nên ở khoảng 30gr mỗi ngày.
                            </li>
                            <li className="mt-2">
                                Sử dụng thêm các thực phẩm giàu omega-3 và axit béo, hạn chế sử dụng các chất béo chuyển
                                hóa, thực phẩm chế biến sắn chứa nhiều phụ gia.{' '}
                            </li>
                        </ul>
                        <h3 className="mt-2 text-lg font-semibold">Tập thể dục</h3>
                        <p className="mt-3">
                            Phụ nữ tập thể dục hơn 4 tiếng mỗi tuần được ghi nhận có nguy cơ mắc ung thư vú thấp hơn phụ
                            nữ không tập thể dục. Hiệu quả của việc tập thể dục trong việc làm giảm nguy cơ mắc ung thư
                            vú được ghi nhận rõ rệt ở phụ nữ tiền mãn kinh có cân nặng bình thường hoặc thấp.{' '}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">Tự khám vú tại nhà </h3>
                        <p className="mt-3">
                            Việc kiểm tra vú hoàn toàn có thể tự thực hiện tại nà và định kỳ mỗi tháng bạn nên kiểm tra
                            1 lần, thường là vào ngày thứ 7 &#8209; 10 của chu kỳ kinh &#10088;Ngày 1 của chu kỳ kinh =
                            ngày bắt đầu thấy kinh&#10089; vì ở thời điểm này phần vú mềm nhất, bạn sẽ dễ dàng tự khám
                            để phát hiện bất thường. Việc tự khám có thể dễ dàng thực hiện theo hướng dẫn ở hình dưới.
                        </p>
                    </div>

                    <div className="inline-block float-right">
                        <Link to={'/predict'} className="flex justify-end  h-[30px] my-3 group">
                            <p className="leading-[30px] mr-2 text-[18px] group-hover:text-blue-600">
                                Dự đoán bệnh ung thư vú
                            </p>
                            <FontAwesomeIcon
                                className="w-[20px] h-[30px] group-hover:text-blue-600"
                                icon={faArrowRight}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BreastCanner;
