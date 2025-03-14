import { IArticle } from "@/types/mock";

export const mockArticles: IArticle[] = [
    {
        id: '1',
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: 'product_manager',
        owner: 'FOSO Creator',
        createdAt: '13/03/2025',
        updateAt: '13/03/2025',
        sections: [
            {
                type: "image",
                src: "/images/detail1.png",
                alt: "Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này.",
            },
            {
                type: "heading",
                level: 2,
                content: "1. Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được biết đến là mô hình quản trị tinh gọn sản xuất. Nguồn gốc của quy trình 5S đến từ Nhật Bản...",
            },
            {
                type: "list",
                items: [
                    "Seiri (Ngăn nắp)",
                    "Seiton (Sắp xếp)",
                    "Seiso (Sạch sẽ)",
                    "Seiketsu (Tiêu chuẩn hóa)",
                    "Shitsuke (Tự giác)",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "2. Lợi ích quy trình 5S đem lại",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S giúp môi trường làm việc ngăn nắp hơn, loại bỏ sự lãng phí và tăng hiệu suất công việc...",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Tại sao doanh nghiệp cần quy trình 5S?",
            },
            {
                type: "heading",
                level: 2,
                content: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            },
            {
                type: "text",
                content:
                    "5S giúp doanh nghiệp tối ưu không gian làm việc, nâng cao năng suất và giảm chi phí quản lý...",
            },
            {
                type: "heading",
                level: 3,
                content: "3.1 Cải thiện rõ nét môi trường làm việc",
            },
            {
                type: "text",
                content:
                    "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.2 Tiết kiệm thời gian đáng kể",
            },
            {
                type: "text",
                content:
                    "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.3 Tăng năng suất làm việc",
            },
            {
                type: "text",
                content:
                    "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.4 Tiết kiệm chi phí",
            },
            {
                type: "text",
                content:
                    "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.5 Tăng chất lượng sản phẩm",
            },
            {
                type: "text",
                content:
                    "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Quy trình 5s gồm các bước",
            },
            {
                type: "heading",
                level: 2,
                content: "4. Quy trình 5S gồm các bước",
            },
            {
                type: "text",
                content:
                    "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
            },
            {
                type: "heading",
                level: 3,
                content: "4.1 Seiri (Ngăn nắp)",
            },
            {
                type: "text",
                content:
                    "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.2 Seiton (Sắp xếp)",
            },
            {
                type: "text",
                content:
                    "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.3 Seiso (Vệ sinh)",
            },
            {
                type: "text",
                content:
                    "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.4 Seiketsu (Tiêu chuẩn hóa)",
            },
            {
                type: "text",
                content:
                    "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.5 Shitsuke (Kỷ luật)",
            },
            {
                type: "text",
                content:
                    "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
            },
            {
                type: "image",
                src: "/images/4.png",
                alt: "Các bước thực hiện quy trình 5s",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "5. Quy trình được thực hiện như sau:",
            },
            {
                type: "text",
                content:
                    "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.1 Giai đoạn chuẩn bị",
            },
            {
                type: "text",
                content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng và điều hành và quản lý quá trình thực hiện quy trình 5S...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.2 Triển khai rộng rãi",
            },
            {
                type: "text",
                content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            },
            {
                type: "text",
                content: "Đây là bước cho thấy mọi người không thể thiếu trong các bước của quy trình...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.4 Sàng lọc, sắp xếp và đánh giá",
            },
            {
                type: "text",
                content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.5 Đánh giá",
            },
            {
                type: "text",
                content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình...",
            },
            {
                type: "heading",
                level: 2,
                content: "6. Quy trình 5S có giống với Kaizen?",
            },
            {
                type: "text",
                content:
                    "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
            },
            {
                type: "text",
                content:
                    "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
            },
            {
                type: "text",
                content:
                    "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ",
            },
            {
                type: "text",
                content:
                    "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.  ",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "7. Đối tượng nào nên áp dụng 5S?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
            },
            {
                type: "text",
                content:
                    "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các yếu tố tạo nên thành công cho quy trình 5S",
            }, {
                type: "heading",
                level: 2,
                content: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            },
            {
                type: "text",
                content:
                    "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
            },
            {
                type: "list",
                items: [
                    "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
                    "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ",
                    "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",

                ],
            }, {
                type: "text",
                content:
                    "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
            },
        ],
    }, {
        id: '2',
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: 'product_manager',
        owner: 'FOSO Creator',
        createdAt: '13/03/2025',
        updateAt: '13/03/2025',
        sections: [
            {
                type: "image",
                src: "/images/detail1.png",
                alt: "Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này.",
            },
            {
                type: "heading",
                level: 2,
                content: "1. Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được biết đến là mô hình quản trị tinh gọn sản xuất. Nguồn gốc của quy trình 5S đến từ Nhật Bản...",
            },
            {
                type: "list",
                items: [
                    "Seiri (Ngăn nắp)",
                    "Seiton (Sắp xếp)",
                    "Seiso (Sạch sẽ)",
                    "Seiketsu (Tiêu chuẩn hóa)",
                    "Shitsuke (Tự giác)",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "2. Lợi ích quy trình 5S đem lại",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S giúp môi trường làm việc ngăn nắp hơn, loại bỏ sự lãng phí và tăng hiệu suất công việc...",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Tại sao doanh nghiệp cần quy trình 5S?",
            },
            {
                type: "heading",
                level: 2,
                content: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            },
            {
                type: "text",
                content:
                    "5S giúp doanh nghiệp tối ưu không gian làm việc, nâng cao năng suất và giảm chi phí quản lý...",
            },
            {
                type: "heading",
                level: 3,
                content: "3.1 Cải thiện rõ nét môi trường làm việc",
            },
            {
                type: "text",
                content:
                    "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.2 Tiết kiệm thời gian đáng kể",
            },
            {
                type: "text",
                content:
                    "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.3 Tăng năng suất làm việc",
            },
            {
                type: "text",
                content:
                    "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.4 Tiết kiệm chi phí",
            },
            {
                type: "text",
                content:
                    "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.5 Tăng chất lượng sản phẩm",
            },
            {
                type: "text",
                content:
                    "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Quy trình 5s gồm các bước",
            },
            {
                type: "heading",
                level: 2,
                content: "4. Quy trình 5S gồm các bước",
            },
            {
                type: "text",
                content:
                    "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
            },
            {
                type: "heading",
                level: 3,
                content: "4.1 Seiri (Ngăn nắp)",
            },
            {
                type: "text",
                content:
                    "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.2 Seiton (Sắp xếp)",
            },
            {
                type: "text",
                content:
                    "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.3 Seiso (Vệ sinh)",
            },
            {
                type: "text",
                content:
                    "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.4 Seiketsu (Tiêu chuẩn hóa)",
            },
            {
                type: "text",
                content:
                    "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.5 Shitsuke (Kỷ luật)",
            },
            {
                type: "text",
                content:
                    "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các bước thực hiện quy trình 5s",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "5. Quy trình được thực hiện như sau:",
            },
            {
                type: "text",
                content:
                    "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.1 Giai đoạn chuẩn bị",
            },
            {
                type: "text",
                content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng và điều hành và quản lý quá trình thực hiện quy trình 5S...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.2 Triển khai rộng rãi",
            },
            {
                type: "text",
                content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            },
            {
                type: "text",
                content: "Đây là bước cho thấy mọi người không thể thiếu trong các bước của quy trình...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.4 Sàng lọc, sắp xếp và đánh giá",
            },
            {
                type: "text",
                content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.5 Đánh giá",
            },
            {
                type: "text",
                content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình...",
            },
            {
                type: "heading",
                level: 2,
                content: "6. Quy trình 5S có giống với Kaizen?",
            },
            {
                type: "text",
                content:
                    "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
            },
            {
                type: "text",
                content:
                    "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
            },
            {
                type: "text",
                content:
                    "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ",
            },
            {
                type: "text",
                content:
                    "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.  ",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "7. Đối tượng nào nên áp dụng 5S?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
            },
            {
                type: "text",
                content:
                    "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các yếu tố tạo nên thành công cho quy trình 5S",
            }, {
                type: "heading",
                level: 2,
                content: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            },
            {
                type: "text",
                content:
                    "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
            },
            {
                type: "list",
                items: [
                    "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
                    "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ",
                    "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",

                ],
            }, {
                type: "text",
                content:
                    "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
            },
        ],
    }, {
        id: '3',
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: 'product_manager',
        owner: 'FOSO Creator',
        createdAt: '13/03/2025',
        updateAt: '13/03/2025',
        sections: [
            {
                type: "image",
                src: "/images/detail1.png",
                alt: "Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này.",
            },
            {
                type: "heading",
                level: 2,
                content: "1. Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được biết đến là mô hình quản trị tinh gọn sản xuất. Nguồn gốc của quy trình 5S đến từ Nhật Bản...",
            },
            {
                type: "list",
                items: [
                    "Seiri (Ngăn nắp)",
                    "Seiton (Sắp xếp)",
                    "Seiso (Sạch sẽ)",
                    "Seiketsu (Tiêu chuẩn hóa)",
                    "Shitsuke (Tự giác)",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "2. Lợi ích quy trình 5S đem lại",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S giúp môi trường làm việc ngăn nắp hơn, loại bỏ sự lãng phí và tăng hiệu suất công việc...",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Tại sao doanh nghiệp cần quy trình 5S?",
            },
            {
                type: "heading",
                level: 2,
                content: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            },
            {
                type: "text",
                content:
                    "5S giúp doanh nghiệp tối ưu không gian làm việc, nâng cao năng suất và giảm chi phí quản lý...",
            },
            {
                type: "heading",
                level: 3,
                content: "3.1 Cải thiện rõ nét môi trường làm việc",
            },
            {
                type: "text",
                content:
                    "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.2 Tiết kiệm thời gian đáng kể",
            },
            {
                type: "text",
                content:
                    "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.3 Tăng năng suất làm việc",
            },
            {
                type: "text",
                content:
                    "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.4 Tiết kiệm chi phí",
            },
            {
                type: "text",
                content:
                    "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.5 Tăng chất lượng sản phẩm",
            },
            {
                type: "text",
                content:
                    "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Quy trình 5s gồm các bước",
            },
            {
                type: "heading",
                level: 2,
                content: "4. Quy trình 5S gồm các bước",
            },
            {
                type: "text",
                content:
                    "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
            },
            {
                type: "heading",
                level: 3,
                content: "4.1 Seiri (Ngăn nắp)",
            },
            {
                type: "text",
                content:
                    "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.2 Seiton (Sắp xếp)",
            },
            {
                type: "text",
                content:
                    "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.3 Seiso (Vệ sinh)",
            },
            {
                type: "text",
                content:
                    "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.4 Seiketsu (Tiêu chuẩn hóa)",
            },
            {
                type: "text",
                content:
                    "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.5 Shitsuke (Kỷ luật)",
            },
            {
                type: "text",
                content:
                    "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các bước thực hiện quy trình 5s",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "5. Quy trình được thực hiện như sau:",
            },
            {
                type: "text",
                content:
                    "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.1 Giai đoạn chuẩn bị",
            },
            {
                type: "text",
                content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng và điều hành và quản lý quá trình thực hiện quy trình 5S...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.2 Triển khai rộng rãi",
            },
            {
                type: "text",
                content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            },
            {
                type: "text",
                content: "Đây là bước cho thấy mọi người không thể thiếu trong các bước của quy trình...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.4 Sàng lọc, sắp xếp và đánh giá",
            },
            {
                type: "text",
                content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.5 Đánh giá",
            },
            {
                type: "text",
                content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình...",
            },
            {
                type: "heading",
                level: 2,
                content: "6. Quy trình 5S có giống với Kaizen?",
            },
            {
                type: "text",
                content:
                    "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
            },
            {
                type: "text",
                content:
                    "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
            },
            {
                type: "text",
                content:
                    "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ",
            },
            {
                type: "text",
                content:
                    "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.  ",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "7. Đối tượng nào nên áp dụng 5S?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
            },
            {
                type: "text",
                content:
                    "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các yếu tố tạo nên thành công cho quy trình 5S",
            }, {
                type: "heading",
                level: 2,
                content: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            },
            {
                type: "text",
                content:
                    "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
            },
            {
                type: "list",
                items: [
                    "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
                    "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ",
                    "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",

                ],
            }, {
                type: "text",
                content:
                    "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
            },
        ],
    }, {
        id: '4',
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: 'product_manager',
        owner: 'FOSO Creator',
        createdAt: '13/03/2025',
        updateAt: '13/03/2025',
        sections: [
            {
                type: "image",
                src: "/images/detail1.png",
                alt: "Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này.",
            },
            {
                type: "heading",
                level: 2,
                content: "1. Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được biết đến là mô hình quản trị tinh gọn sản xuất. Nguồn gốc của quy trình 5S đến từ Nhật Bản...",
            },
            {
                type: "list",
                items: [
                    "Seiri (Ngăn nắp)",
                    "Seiton (Sắp xếp)",
                    "Seiso (Sạch sẽ)",
                    "Seiketsu (Tiêu chuẩn hóa)",
                    "Shitsuke (Tự giác)",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "2. Lợi ích quy trình 5S đem lại",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S giúp môi trường làm việc ngăn nắp hơn, loại bỏ sự lãng phí và tăng hiệu suất công việc...",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Tại sao doanh nghiệp cần quy trình 5S?",
            },
            {
                type: "heading",
                level: 2,
                content: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            },
            {
                type: "text",
                content:
                    "5S giúp doanh nghiệp tối ưu không gian làm việc, nâng cao năng suất và giảm chi phí quản lý...",
            },
            {
                type: "heading",
                level: 3,
                content: "3.1 Cải thiện rõ nét môi trường làm việc",
            },
            {
                type: "text",
                content:
                    "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.2 Tiết kiệm thời gian đáng kể",
            },
            {
                type: "text",
                content:
                    "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.3 Tăng năng suất làm việc",
            },
            {
                type: "text",
                content:
                    "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.4 Tiết kiệm chi phí",
            },
            {
                type: "text",
                content:
                    "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.5 Tăng chất lượng sản phẩm",
            },
            {
                type: "text",
                content:
                    "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Quy trình 5s gồm các bước",
            },
            {
                type: "heading",
                level: 2,
                content: "4. Quy trình 5S gồm các bước",
            },
            {
                type: "text",
                content:
                    "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
            },
            {
                type: "heading",
                level: 3,
                content: "4.1 Seiri (Ngăn nắp)",
            },
            {
                type: "text",
                content:
                    "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.2 Seiton (Sắp xếp)",
            },
            {
                type: "text",
                content:
                    "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.3 Seiso (Vệ sinh)",
            },
            {
                type: "text",
                content:
                    "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.4 Seiketsu (Tiêu chuẩn hóa)",
            },
            {
                type: "text",
                content:
                    "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.5 Shitsuke (Kỷ luật)",
            },
            {
                type: "text",
                content:
                    "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các bước thực hiện quy trình 5s",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "5. Quy trình được thực hiện như sau:",
            },
            {
                type: "text",
                content:
                    "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.1 Giai đoạn chuẩn bị",
            },
            {
                type: "text",
                content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng và điều hành và quản lý quá trình thực hiện quy trình 5S...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.2 Triển khai rộng rãi",
            },
            {
                type: "text",
                content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            },
            {
                type: "text",
                content: "Đây là bước cho thấy mọi người không thể thiếu trong các bước của quy trình...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.4 Sàng lọc, sắp xếp và đánh giá",
            },
            {
                type: "text",
                content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.5 Đánh giá",
            },
            {
                type: "text",
                content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình...",
            },
            {
                type: "heading",
                level: 2,
                content: "6. Quy trình 5S có giống với Kaizen?",
            },
            {
                type: "text",
                content:
                    "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
            },
            {
                type: "text",
                content:
                    "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
            },
            {
                type: "text",
                content:
                    "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ",
            },
            {
                type: "text",
                content:
                    "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.  ",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "7. Đối tượng nào nên áp dụng 5S?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
            },
            {
                type: "text",
                content:
                    "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các yếu tố tạo nên thành công cho quy trình 5S",
            }, {
                type: "heading",
                level: 2,
                content: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            },
            {
                type: "text",
                content:
                    "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
            },
            {
                type: "list",
                items: [
                    "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
                    "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ",
                    "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",

                ],
            }, {
                type: "text",
                content:
                    "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
            },
        ],
    }, {
        id: '5',
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: 'product_manager',
        owner: 'FOSO Creator',
        createdAt: '13/03/2025',
        updateAt: '13/03/2025',
        sections: [
            {
                type: "image",
                src: "/images/detail1.png",
                alt: "Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này.",
            },
            {
                type: "heading",
                level: 2,
                content: "1. Quy trình 5S là gì?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được biết đến là mô hình quản trị tinh gọn sản xuất. Nguồn gốc của quy trình 5S đến từ Nhật Bản...",
            },
            {
                type: "list",
                items: [
                    "Seiri (Ngăn nắp)",
                    "Seiton (Sắp xếp)",
                    "Seiso (Sạch sẽ)",
                    "Seiketsu (Tiêu chuẩn hóa)",
                    "Shitsuke (Tự giác)",
                ],
            },
            {
                type: "heading",
                level: 2,
                content: "2. Lợi ích quy trình 5S đem lại",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S giúp môi trường làm việc ngăn nắp hơn, loại bỏ sự lãng phí và tăng hiệu suất công việc...",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Tại sao doanh nghiệp cần quy trình 5S?",
            },
            {
                type: "heading",
                level: 2,
                content: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            },
            {
                type: "text",
                content:
                    "5S giúp doanh nghiệp tối ưu không gian làm việc, nâng cao năng suất và giảm chi phí quản lý...",
            },
            {
                type: "heading",
                level: 3,
                content: "3.1 Cải thiện rõ nét môi trường làm việc",
            },
            {
                type: "text",
                content:
                    "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.2 Tiết kiệm thời gian đáng kể",
            },
            {
                type: "text",
                content:
                    "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.3 Tăng năng suất làm việc",
            },
            {
                type: "text",
                content:
                    "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.4 Tiết kiệm chi phí",
            },
            {
                type: "text",
                content:
                    "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
            },
            {
                type: "heading",
                level: 3,
                content: "3.5 Tăng chất lượng sản phẩm",
            },
            {
                type: "text",
                content:
                    "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Quy trình 5s gồm các bước",
            },
            {
                type: "heading",
                level: 2,
                content: "4. Quy trình 5S gồm các bước",
            },
            {
                type: "text",
                content:
                    "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
            },
            {
                type: "heading",
                level: 3,
                content: "4.1 Seiri (Ngăn nắp)",
            },
            {
                type: "text",
                content:
                    "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.2 Seiton (Sắp xếp)",
            },
            {
                type: "text",
                content:
                    "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.3 Seiso (Vệ sinh)",
            },
            {
                type: "text",
                content:
                    "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.4 Seiketsu (Tiêu chuẩn hóa)",
            },
            {
                type: "text",
                content:
                    "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
            },
            {
                type: "heading",
                level: 3,
                content: "4.5 Shitsuke (Kỷ luật)",
            },
            {
                type: "text",
                content:
                    "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một thói quen kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các bước thực hiện quy trình 5s",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "5. Quy trình được thực hiện như sau:",
            },
            {
                type: "text",
                content:
                    "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.1 Giai đoạn chuẩn bị",
            },
            {
                type: "text",
                content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng và điều hành và quản lý quá trình thực hiện quy trình 5S...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.2 Triển khai rộng rãi",
            },
            {
                type: "text",
                content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
            },
            {
                type: "text",
                content: "Đây là bước cho thấy mọi người không thể thiếu trong các bước của quy trình...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.4 Sàng lọc, sắp xếp và đánh giá",
            },
            {
                type: "text",
                content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp...",
            },
            {
                type: "heading",
                level: 3,
                content: "5.5 Đánh giá",
            },
            {
                type: "text",
                content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình...",
            },
            {
                type: "heading",
                level: 2,
                content: "6. Quy trình 5S có giống với Kaizen?",
            },
            {
                type: "text",
                content:
                    "Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.",
            },
            {
                type: "text",
                content:
                    "Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.",
            },
            {
                type: "text",
                content:
                    "Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. ",
            },
            {
                type: "text",
                content:
                    "Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.  ",
            }
            ,
            {
                type: "heading",
                level: 2,
                content: "7. Đối tượng nào nên áp dụng 5S?",
            },
            {
                type: "text",
                content:
                    "Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.",
            },
            {
                type: "text",
                content:
                    "Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.",
            },
            {
                type: "image",
                src: "/images/detail2.png",
                alt: "Các yếu tố tạo nên thành công cho quy trình 5S",
            }, {
                type: "heading",
                level: 2,
                content: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
            },
            {
                type: "text",
                content:
                    "Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:",
            },
            {
                type: "list",
                items: [
                    "Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.",
                    "Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S. ",
                    "Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.",

                ],
            }, {
                type: "text",
                content:
                    "Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.",
            },
        ],
    }
];
