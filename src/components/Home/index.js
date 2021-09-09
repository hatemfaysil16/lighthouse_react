import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headers from './Headers';
import Body from './Body';
import Program from './Program';
import Footer from './Footer';
import Customers from '../Customers';
import Video from '../Home/Video';
import './Style.scss';



class  Home extends Component{
render(){
    return(
        <div className="containers">
            
            <div className="row">

                <div className="info col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <Headers/>
                    <Body/>
                    <Video/>
                    <Footer/>

                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                    <Program/>
                  

                    </div>

            </div>

        </div>
    )
}
}

export default Home;













// return(
//     <div className="containers">
//         {workList}
//         <div className="row">
//         <div className="col-lg-8 col-md-8 col-sm-8 col-8 ok">
//             <div className="row">
//             <div className="col-lg-4 col-md-4 col-sm-4 col-4">
//                 <div className="img-one"><img className="img-one" src='/phote/Card_Logo.png'/></div>
//                 <div className="img-two"><img className="img-two" src="/phote/erd.jpg"/></div>
//                 </div>
//             <div className="col-lg-8 col-md-8 col-sm-8 col-8">
//                 <div className="info-one large">
//                     <p>عتبر شركة فيرجينا سوف هاوس من احدى الشركات الرائدة والمتخصصه التى تعمل فى مجال تكنولوجيا المعلومات و تطوير البرمجيات وتقديم خدمات التطوير والحلول المتكامله فى شتى المجالات (التجارية – الصناعية – الاقتصاية – الزراعية ) وذلك من خلال احدث التقنيات البرمجية وفريق عمل متميز وتم استخدام اكثر من لغة فى برامجنا من لغات البرمجه المقدمة من شركة مايكروسوفت واستخدام احدث التقنيات والادوات التى تؤهلنا اخراج برامجنا فى صورة طيبه وقله اخطا المستخدمين فى ادخال البيانات مع وجود قواعد بيانات تسع كميات هائله من البيانات ، وتوفر الشركة لعملائها قواعد البيانات السحابيه المؤمنه تماما والتى تجعلك تستغنى عن وجود خادم خاص لقاعدة البيانات ويمكن للعملاء تشغيل البرنامج من اى مكان فى العالم تتوافر فيه خدمة الانترنت وتتميز شركتنا فى تقديم الدعم الفنى لعملاؤها طول ايام الاسبوع وعلى مدار الساعه بجانب هذه التقنيات قامت الشركة بتطوير بعض التقنيات والادوات الخاصه بها لتصل بالشركة الى اعلى مستويات تطوير البرمجيات وتلبية اجتاجات السوق التجارى .</p>
//                 </div>
//                 <div className="info-two">
//                     <h2 className="x-large">وتقدم شركة فيرجينا مجموعة من البرامج</h2>
//                     <ul className="large">
//                         <li>(ERP System) برنامج تخطيط موارد المؤسسات</li>
//                         <li>(ERP Hospital Managment) برنامج المؤسسات العلاجيه</li>
//                         <li>(ERP VSC) برنامج خدمة مراكز المركبات</li>
//                         <li>(POS) برنامج نقاط البيع</li>
//                         <li>(VSH Restaurant) برنامج ادارة المطاعم والكافيهات</li>
//                     </ul>
//                 </div>
//                 <div className="info-three">
//                     <h2 className="x-large">(ERP System)برنامج تخطيط موارد المؤسسات</h2>
//                     <div className="row">
//                         <div className="col-lg-12 col-md-12 col-sm-12 col-12 large">
//                             <p>
//                             هو برنامج يقوم بربط جميع المعلومات الخاصة بموارد المؤسسة بحيث تسير في مجرى واحد يستطيع متخذ القرار من خلاله أن يطلع علي مسار الحركات الخاصة بمؤسسته ويمكنه من معرفة وضع العمل في أي لحظة. اختصار كبير في تسجيل المعلومات بحيث تؤثر أي حركة داخل المؤسسة في أي ادارة أو منفذ بيع أو مخزن على باقي الادارات وتظهر في كافة التقارير ذات العلاقة وهو ما يعرف بالتكامل وهو من أهم خصائص أنظمة الموارد المؤسسية تتيح قاعدة البيانات الموحدة لنظام الموارد المؤسسية انشاء عدد غير محدود من التقارير والاحصاءات والتحليلات للمؤسسة ككل أو للقطاعات والادارات المختلفة وفي وجود فريق دعم فني قوي للبرنامج يمكن تحديث هذه التقارير لتتماشى مع متطلبات الادارة المتغيرة.
//                             </p>
//                         </div>
//                     </div>

//                 </div> 
//             </div>
//             </div>
//         </div>

//         <div className="col-lg-4 col-md-4 col-sm-4 col-4">

//             <div className="input-group">
//                 <input type="search"/>
//                 <button><i class="fas fa-search"></i></button>
//                 </div>

//                     <div className="text">
//                     <h2 className="x-large">OtherPrograms</h2>
//                     <ul className="x-litter">
//                         <li><Link to="/">VSH LB</Link></li>
//                         <li> <Link to="/">VSH LB PLUS</Link></li>
//                         <li><Link to="/">VSH MB</Link></li>
//                         <li><Link to="/">VSH MB PLUS</Link></li>
//                         <li><Link to="/">VSH SB</Link></li>
//                         <li> <Link to="/">VSH VSC</Link></li>
//                         <li><Link to="/">VSH HOSPITAL</Link></li>
//                     </ul>
//                 </div>

//             </div>
//         </div>
//     </div>
// )