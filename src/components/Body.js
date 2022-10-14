// src/pages/body.jsx

// assuming that we have a data source
// for the contents of the page
import React from "react";
import "../styles/body.css";
import CloudAce from "../assets/Cloud ace.jpg";
import Dazone from "../assets/Dazone.png";
import Daichi from "../assets/logo-dai-ichi-life.png";
import Navigo from "../assets/Navigo.jpg";
import S from "../assets/S.jpg";


function Body() {
  return (
    <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <link rel="stylesheet" href="body.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <title>TÌM VIỆC LÀM IT?</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href />

          <body>
          <div className="FirstPage">
            <img style={{width: '1600px', height: '100px'}} src="data:image/png;base64,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" />
            <div style={{marginLeft: '30px'}}>
              <li>Cong viec IT</li>
              <li>Cong ty IT</li>
              <li>Blog</li>
              <li>Dien dan</li>
              <li>Viec lam goi y</li>
            </div>
            <button>subcribe</button>
            <div style={{marginLeft: '30px'}}>
              <li>talent story</li>
              <li>Developer 's Life</li>
              <li>Interview tips</li>
              <li>Tech News</li>
              <li>hello</li>
            </div>
            <h1>Quen ngay luong ngan do</h1>
            <p>14/05/2018 | 2,580 views</p>
            <img style={{width: '1600px', height: '900px'}} src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png" />
            <p>Bài viết là lời khuyên từ Jeff Atwood - người sáng lập và kiêm Giám đốc điều hành (CEO) của trang web hỏi đáp uy tín Stack Overflow và cũng là đồng sáng lập
              của Stack Exchange và Discourse.
              Việc tạo ra một portfolio - một tuyển tập những công việc mà bạn đã làm - là điều hết sức quan trọng. Nhiều nhà tuyển dụng sẽ xem xét portfolio trước khi quan tâm
              đến việc bạn có phù hợp với công việc hay không. Hãy dành một lượng thời gian thích hợp để xây dựng riêng cho mình một portfolio thật ấn tượng với nhà tuyển
              dụng – nó sẽ thực sự đáng giá đấy.
              Khi tôi phỏng vấn các lập trình viên, họ hiếm khi đem các sản phẩm hay dự án nào từ công việc của mình ra trình bày. Điều này làm tôi cảm thấy khó xử. Tôi thấy ai
              cũng sử dụng những mẫu hồ sơ làm sẵn giống hệt nhau, với đầy rẫy những câu chữ hào nhoáng. Nào là sáng lập, chiến lược, kiến trúc blah blah. Thực chất, việc
              trình bày sản phẩm cụ thể sẽ mang lại kết quả hấp dẫn hơn rất nhiều.
              Đừng chỉ gật gù với điều tôi vừa nói, hãy áp dụng chúng ngay cho bản thân bạn. Sau đây là một vài mẫu portfolio để bạn tham khảo:</p>
            <div style={{marginLeft: '30px'}}>
              <li>IT</li>
              <li>Software</li>
              <li>Backend</li>
              <li>Fontend</li>
              <li>Backend</li>
            </div>
            <p>Bạn không nhất thiết phải phát triển một ứng dụng hoặc một trang web hoành tráng nào đó thì mới liệt kê nó vào portfolio của mình. Là một người trong ngành, tôi
              có thể đánh giá được vẻ đẹp của một ứng dụng console được thiết kế tốt, hoặc một applet thông minh mà hầu như không có bất kỳ một interface nào. Nếu bạn đã
              viết ra những đoạn code mà bạn đặc biệt cảm thấy hãnh diện vì nó, hãy để nhà tuyển dụng được thấy chúng.
              Portfolio rất quan trọng, nhưng điều quan trọng hơn đó là bạn phải cảm thấy hào hứng về cái mà bạn đã làm. Hãy dành thời gian để làm nổi bật những thứ hay ho
              đó và mang chúng theo trong buổi phỏng vấn tuyển dụng. Điều đó sẽ giúp bạn có lợi thế hơn hẳn so với tất cả những ứng viên khác mà tôi đã từng phỏng vấn.
              Trên tất cả, nếu bạn có thể truyền đạt một cách hiệu quả và chính xác với tôi về những điều thú vị và thách thức trong những dự án trước đây của mình, thì vâng –
              chú hãy về đội của anh. Hoặc ít ra thì, chúng ta hãy làm việc cùng nhau để xây dựng nên một cái gì đó thật tuyệt vời.</p>
            <h2>Tim Viec IT</h2>
          </div>
          <div className="Headering">
            <header><i>Theo Lập trình &amp; Cuộc sống</i></header>
            <h1>TÌM VIỆC LÀM IT?</h1>
            <p>____</p>
          </div>
          <div className="content">
            <p>1.<img src={Daichi} alt="dai ichi life" title="dai ichi life" width="100x" height="50px" /></p>
            <div className="Detail">
              <ul>
                <h3>IT Cobol Officier</h3>
                <p>Hồ Chí Minh</p>
                <p>Thương lượng</p>
              </ul>
            </div>
            <div className="Dazone">
              <p>2.<img src={Dazone} alt="Dazone" title="Dazone" width="200px" height="160x" /></p>
              <div className="Detail">
                <ul>
                  <h3>[$500 - $2500] Android Developer (Korean Company)</h3>
                  <p>Hồ Chí Minh</p>
                  <p>$500 - $2,500</p>
                </ul>
              </div>
            </div>
            <div className="CloudAce">
              <p>3.<img src={CloudAce} alt="Cloud ace" title="Cloud ace" width="100x" height="90px" /></p>
              <div className="Detail">
                <ul>
                  <h3>Sales Executive</h3>
                  <p>Hà Nội | Hồ Chí Minh</p>
                  <p>$500 - $1,500</p>
                </ul>
              </div>
            </div>
            <div className="Navigo">
              <p>4.<img src={Navigo}alt="Navigo" title="Navigo" width="100x" height="90px" /></p>
              <div className="Detail">
                <ul>
                  <h3>Junior Quality Control Engineer</h3>
                  <p>Hồ Chí Minh</p>
                  <p>Thương lượng</p>
                </ul>
              </div>
            </div>
            <div className="S">
              <p>5.<img src={S} alt="S" title="S" width="90px" height="90px" /></p>
              <div className="Detail">
                <ul>
                  <h3>Technical Sales Specialist</h3>
                  <p>Hà Nội</p>
                  <p>Thương lượng</p>
                </ul>
              </div>
            </div>
          </div>
          <header style={{padding: '2rem'}}><b>Việc làm theo Kỹ Năng Việc làm theo Chức Vụ Việc làm theo Công Ty Việc làm theo Địa Điểm</b></header>
          <div className="BigContentBot" style={{display: 'flex'}}>
            <div className="ContentBot">
              <p>Việc làm Java</p>
              <p>Việc làm PHP</p>
              <p>Việc làm MySQL</p>
              <p>Việc làm Android</p>
              <p>Việc làm iOS</p>
            </div>
            <div className="ContentBot">
              <p>Project Manager</p>
              <p>Tester QA QC</p>
              <p>Senior Developer</p>
              <p>Software Engineer</p>
              <p />
            </div>
            <div className="ContentBot">
              <p>FPT Software</p>
              <p>Evolable Asia</p>
              <p>Fossil</p>
              <p>Axon Active</p>
              <p>KMS Technology</p>
            </div>
            <div className="ContentBot">
              <p>Hồ Chí Minh</p>
              <p>Hà Nội</p>
              <p>Đà Nẵng</p>
              <p />
              <p />
            </div>
          </div>  
          <div className="ContentBot">
            <p>Copyright © 2020</p>
            <p>    Học, học nữa, học mãi. <cite>— Lê-nin</cite></p>
            <p /><address>KP6, Linh Trung, Thủ Đức, HCM.</address><p />
          </div>
          </body>
        </div>
  );
}

export default Body;
