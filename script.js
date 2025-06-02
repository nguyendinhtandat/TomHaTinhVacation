let i1 = document.getElementById("info1")
let h1 = document.getElementById("heading1")
let button = document.getElementById("button")
let isVN = false
let cloudleft = document.getElementById("cloud-left")
let cloudright = document.getElementById("cloud-right")
let h2 = document.getElementById("heading2")
let h3 = document.getElementById("heading3")
let i2 = document.getElementById("info2")
let h4 = document.getElementById("heading4")
let i3 = document. getElementById("info3")
let h5 = document.getElementById("heading5")
let i4 = document.getElementById("info4")
let h6 = document.getElementById("heading6")
let i5 = document.getElementById("info5")
let h7 = document.getElementById("heading7")
let i6 = document.getElementById("info6")
let i7 = document.getElementById("info7")
let i8 = document.getElementById("info8")

alert("New feature of this website (Tính năng mới của trang web này): Translation available (Có phiên dịch)")
alert("And! Remember! This website is made by Nguyễn Đình Tấn Đạt (very safe to use)\nPhiên dịch: Và! Hãy nhớ rằng! Trang web này được tạo bởi Nguyễn Đình Tấn Đạt (Rất an toàn khi sử dụng)")
function translation(){
    if (isVN === false){
        button.textContent = "Translate to English";
        isVN = true;
        cloudleft.style.transform = "translate(-230px, -35px) scale(0.6)";
        cloudright.style.transform = "translate(975px, -320px) scale(0.6)";
        h1.textContent = "Chuyến đi của mình từ TP HCM đến Hà Tĩnh";
        i1.innerHTML = "Chào mọi người! Mình là Tấn Đạt đây.<br> Có lẽ bạn còn nhớ mình — thằng suy nghĩ miên man nhiều nhất trong lớp, đúng không? Ừ ừ, mình biết mà (hơi quê xíu hehe 😅).<br>Dù sao thì, như tiêu đề đã nói… Vâng! Mình đã đi từ TP Hồ Chí Minh về quê mình, Hà Tĩnh. Đỉnh chứ nhỉ?";
        h2.innerHTML = "Giới thiệu";
        h3.innerHTML = "Tại sao bạn lại đi?";
        i2.innerHTML = "Thực ra thì... ban đầu mình cũng không biết nửa (vì mẹ là người đưa mình đi mà sao mình biết 😐) — nhưng phải công nhận, sống ở đó thật sự rất, RẤT vui!";
        h4.innerHTML = "Trước khi khởi hành...";
        i3.innerHTML = "Mình đi Hà Tĩnh cùng mẹ. Hai mẹ con đợi ở sân bay quốc tế để đón họ hàng.<br>Hai mẹ con mình đặt vé bay đến Vinh và chờ đợi. Em trai mình đói và hỏi mẹ của em đó xin bánh mì. Mẹ của em đó bảo không, nhưng dì của anh em mình cho tiền. Em minh mua hai miếng bánh và chia sẽ cho mình ăn chung.<br>Trên máy bay, mình đã chụp một bức ảnh đẹp — nhìn những đám mây kìa!<br>Sau khi hạ cánh ở Vinh, cả nhà bắt xe van về quê bà ngoại.";
        h5.innerHTML = "Bạn đã tham gia những hoạt động gì ở đó?"
        i4.innerHTML = "Chúng mình dành phần lớn thời gian ở quê để thư giãn và chơi game.<br>Em mình và mình chơi bóng đá rất nhiều — em ấy thường thắng vì đã từng học chơi bóng và có rất nhiều kinh nghiệm hơn mình! (Thật ra… em ấy cũng tham gia một câu lạc bộ bóng đá nữa 😅).<br>Anh em mình cũng phụ giúp chăm sóc các em trai của mẹ em mình và mẹ của mình.<br>Có một khoảnh khắc rất xúc động khi chúng mình tham gia lễ cúng cuối cùng cho ông ngoại tại tang lễ. Buổi lễ yên tĩnh và đầy ý nghĩa.<br>Điều tuyệt nhất là chúng mình ở nhà dì mình (Bà Tứ) <br>Chúng mình có những buổi tối chơi game khuya đầy ắp tiếng cười, đồ ăn vặt và niềm vui.<br>À! Còn đây là vài bức ảnh về khung cảnh ở quê mình nè!";
        h6.innerHTML = "Bạn cảm thấy thế nào và nhớ gì trong chuyến đi?"
        i5.innerHTML = "Ở quê mình có lúc vui, lúc chán. Chúng mình chơi game, ăn vặt và tận hưởng sự yên tĩnh của làng quê. Nhưng… mình hơi sợ nhà vệ sinh tầng dưới vì không xả nước được XD (may là nhà trên vẫn dùng được mà hehe!).<br>Mình mặc dù không có nhiều kỉ niệm với ông ngoại cho lắm, nhưng mình vẫn sẽ luôn nhớ ông mãi trong tim.<br>Mình cũng nhớ lễ tổng kết năm học ở trường. Nhìn ảnh bạn bè nhận giải mà buồn ghê — ước gì mình cũng muốn được nhận giải như các bạn nhỉ..."
        h7.innerHTML = "Câu cuối cùng: Tại sao bạn lại làm blog này?"
        i6.innerHTML = "Mình tạo blog này để biến tất cả những cảm xúc của mình thành một điều gì đó ý nghĩa — không chỉ là kỷ niệm cho riêng mình, mà còn cho các bạn trong lớp, kể cả những bạn sau này có thể chuyển trường hay ra nước ngoài. Đây là một món quà nhỏ để lưu lại hình ảnh về một cậu học sinh có phần trầm lặng (mà thật ra thì cũng không hẳn vậy 😅), và hay suy nghĩ và luôn muốn chia sẻ câu chuyện của mình."
        i7.innerHTML = "Và trước khi kết thúc blog này, mình chỉ muốn nói rằng... Cảm ơn mọi người rất nhiều — kể cả cô giáo chủ nhiệm của chúng mình, <b>cô Hà Giang</b> (nếu cô có xem được trang blog này) vì đã dành thời gian đọc nó. Mình đã mất khoảng 3 ngày để hoàn thành dự án nho nhỏ này trong mùa hè! Mong rằng mọi người luôn vui vẻ và có một mùa hè thật tuyệt vời!<br><br>Cảm ơn mọi người vì đã đọc hết blog tuyệt vời này!<br>Nguyễn Đình Tấn Đạt"
        i8.innerHTML = "Một vài hình ảnh thêm cho bạn xem!"
    }
    else{
        button.textContent = "Dịch sang Tiếng Việt";
        isVN = false;
        h1.textContent = "My Trip from Ho Chi Minh to Ha Tinh";
        cloudleft.style.transform = "translate(-160px, -35px) scale(0.6)";
        cloudright.style.transform = "translate(900px, -320px) scale(0.6)";
        i1.innerHTML = "Hello guys! It's me, Tan Dat.<br> You probably remember me — the guy who overthinks the most in class, right? Yeah yeah, I know (pretty embarrassing actually 😅).<br> Anyway, just like the title says… yup, you heard that right! I traveled from Ho Chi Minh City to my hometown, Ha Tinh. Pretty cool, right?";
        h2.innerHTML = "Introduction";
        h3.innerHTML = "Why did you go there?";
        i2.innerHTML = "Honestly… I didn't even really know at first (since my mum was the one to bring me here in the first place 😐) — but to be fair, living here has been really, REALLY fun!";
        h4.innerHTML = "Before the journey starts..."
        i3.innerHTML = "I went to Ha Tinh with my mom. We waited at the international airport for my siblings.<br>We booked a flight to Vinh and waited. My little brother was hungry and asked his mom for a sandwich. She said no, but our aunt gave him some money. He bought two of them and shared it with me.<br>On the plane, I took a beautiful photo — look at the clouds!<br>After landing in Vinh, we took a family van to my grandmother's hometown.";
        h5.innerHTML = "What activities did you do there?";
        i4.innerHTML = "We spent most of our time in the countryside just relaxing and playing games.<br>My little brother and I played football a lot — he usually wins because he's been learning how to play and has more experience than me! (Well… he is also in a football club, so that helps too 😅).<br>We also helped take care of our mom's younger brothers.<br>There was one emotional moment when we held the final ceremony for our grandfather at the funeral. It was quiet and meaningful.<br>Best of all, we stayed at my auntie's house!<br>We had late-night game sessions filled with snacks, laughter, and fun.<br>Oh! And btw — here are a few pictures of the view from my countryside!";
        h6.innerHTML = "How did you feel, and what did you miss during this trip?";
        i5.innerHTML = "Being in my hometown has been a mix of fun and boring moments. We played games, ate snacks, and enjoyed the quiet countryside. Though… I was a bit scared of the downstairs bathroom since it doesn't flush XD (but at least the upstairs one works!).<br>I didn't have many memories with him, but I'll always remember him in my heart.<br>I did miss the end-of-year ceremony at school. Seeing my friends in the award photos made me a little sad — I wanted to be in one too...";
        h7.innerHTML = "Last question: Why did you make this blog anyway?"
        i6.innerHTML = "I created this blog to turn all those feelings into something meaningful — not just as a memory for myself, but also for my classmates, even those who might transfer schools or move abroad. It's a small gift to leave behind a piece of who I am — the quiet (well, not always 😅), thoughtful kid in class who just wanted to share a story.";
        i7.innerHTML = "And before I end this blog, I just wanna say that... Thank you... Everyone, including our teacher, <b>Ms. Ha Giang</b>, if you ever see this blog page for reading this, I spent like around 3 days on this small little project that I've made during this summer! Hope that everyone is always happy and has an awesome summer!<br><br>Thank you... Everyone for reading this amazing blog<br>Nguyen Dinh Tan Dat";
        i8.innerHTML = "Extra images for you to see!";
    }
}