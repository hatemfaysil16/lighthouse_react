import React, { Component } from 'react';
import './Style.scss';
import axios from 'axios';

class Gallery extends Component{
    state={
        works:[],
    }
    componentDidMount(){
        axios.get("js/data.json").then ((e)=>{
            this.setState({
                works:e.data.body
            })
        })
    }

render(){

    const {works} = this.state;
    const workList = works.map((worktitle)=>{
        return(
            <div key={worktitle.id} className="gallery">
                <ul>
                    <li className="headers">{worktitle.header}</li>
                   
                    <li className="boody">{worktitle.header_body}</li>
                    <li>{worktitle.list_one}</li>
                    <li>{worktitle.list_two}</li>
                    <li>{worktitle.list_three}</li>
                    <li>{worktitle.list_foure}</li>
                    <li>{worktitle.list_five}</li>
                    <li>{worktitle.list_six}</li>
                    <li>{worktitle.list_seven}</li>
                    <li>{worktitle.list_eight}</li>
                    <li>{worktitle.list_nigh}</li>
                    <li>{worktitle.list_ten}</li>
                    <li>{worktitle.list_ten}</li>
                    <li>{worktitle.pargraphe}</li>




                </ul>
            </div>

        )
    })

    return(
        <div className="containers">
           <div className="counts">
           {workList}
           </div>
        </div>

    )
}
}

export default Gallery;









{/* <h1 >معلومات عن البرنامج</h1>


<ul><h2>company light house</h2>
    <li>	حســـــــــــــــابات</li>
    <li> 	مخــــــــازن </li>
    <li>	مبيـــــــــعات</li>
    <li>مشتريـــــات</li>
    <li>حسابـــــــات عمــلاء</li>
    <li>	حسابـــــــــات موردين</li>
    <li>مبيــــعات نقديه ومبيعات اجله</li>
    <li>	بيــــــــان حركه الاصناف </li>
    <li>شئـــــــــون عاملين </li>
      </ul>



  <ul ><h2>• الحسابات</h2>
    <li  >امكانيه عمل دليل حسابات قوي يوافق المعاير الدوليه ACCA  امكانيه التعديل او الاضافه عليه .</li>
    <li>. امكانيه عمل مراكز تكاليف .</li>
    <li>امكانيه عمل  سندات قبض و صرف ويتم ربطها بسهوله مع شاشات البيع و المشتريات1.</li>
    <li>امكانيه عمل سندات القيود لعمل القيود المحسابيه و التسويات </li>
    <li>امكانيه عمل  تقارير كشف حساب العملاء و الموردين و الحسابات العامه </li>
    <li>امكانيه عمل ميزان مراجعه عام و للعملاء و الموردين</li>
    <li>امكانيه عمل  قوائم ماليه </li>
    <li>امكانيه عمل التقارير الضريبيه </li>
    <li>امكانيه عمل  حساب العملات واستخدام اكثر من عمله وعمل حسابات الفوركس بشكل الي عند عمل الميزانيه او عمل الاغلاقات</li>
    <li>.امكانيه عمل فتره ماليه ويتم بعدها عمل اغلاق للقاعده وفتح سنه ماليه جديده لكي يكون كل سنه ماليه مستقله بزاتها وايمكانيه الرجوع للسنوات السابقه بسهوله . </li>
  </ul>

<img className="img_one" src="phote/logo1.png"/>

<img className="img_two" src="phote/erd.jpg"/>


  <ul><h2>. مراقبه المخزن </h2>
     <li>امكانيه معرفه ارصده المخازن بسهوله تامه - كرته صنف و معرفه بشكل اجمالي.</li>
     <li>امكانيه عمل جرد للاصناف .</li>
     <li>.امكانيه معرفه اصناف منتهيه الصلاحيه و اصناف خدميه و اصناف مخزنيه.</li>
     <li>.امكانيه إضافه اكثر من مخزن (مستودع) وتعريف اكثر من وحده للصنف .</li>
     <li>.امكانيه معرفه الاصناف الراكده و الاصناف الاكثر مبيعا.</li>
     <li>امكانيه معرفه الاصناف التي وصلت الي حد الطلب و الاصناف التي وصلت الي الحد الاقصي واعطاء اشعارات بها.</li>
  </ul>


  <ul><h2>. المبيعات </h2>
    <li>.امكانيه عمل فواتير المبيعات و طباعتها وشامل دفعات العميل داخل الفاتوره.</li>
    <li>.امكانيه عمل كل القيود المحاسبيه وحسابه مع المخزن كتكلفه مع المخازن دون عمل اي قيود محاسبيه .</li>
    <li>.امكانيه اعطائك الخصم المرجح وافضل سعر للبيع .</li>
    <li>.امكانيه التحكم الكامل في هامش ربحك ويكون سعر البيع موافق الي هامش الربح .</li>
    <li>.امكانيه معرفه ربحيه كل فاتوره ومعرفه ربحيه كل صنف في التقارير .</li>
    <li>يتميز البرنامج  اعطائك اشعارات لمعرفه استلام المتحصلات من العملاء.
      وجود اكثرمن وحدات للبيع لكل صنف حتى يتناسب مع محلات الجملة القطاعى
      </li>
  </ul>


  <ul><h2>. شئون العاملين </h2>
    <li>امكانيه تكويد موظفين .</li>
    <li>.امكانيه ادخال بينات الموظفين من تلفون و عنوان ورقم البطاقه و الصور و المستندات .</li>
    <li>.امكانيه ادخال مفردات الراتب للموظفين وطباعه كشف الرواتب بسهوله.</li>
  </ul>


  <p>           نظام النسخ الاحتياطي لقاعدة البيانات للحفاظ عليها من الفقد وسهولة  
    يتميز البرنامج بوجهه استخدام سهله تجعل من السهل على أي شخص استخدامها بدون خبرة سابقة
   وجود اكثر من شكل وتصميم لشاشة البيع يمكنك الاختيار بينهم اتتناسب مع نشاطك او مع الشاشات العادية او شاشات اللمس
   اختصارات من الكيبورد للوصول السريع إلى شاشتك المطلوبة مثل الاوفيس
   
   برنامج كامل متكامل مع دعم فنى طوال ايام الاسبوعي
    برنامج بيحقق المعادلة الصعبة ( قوة وتحكم وسهولة وبساطة) وبسعر خيالى
   فقط راسلنا على صفحتنا او اتصل بنا على الارقام الاتية :-
   اتصل بنا :  01000902055 -011485480299
   </p> */}












//    <ul><h2>company light house</h2>
//    <li>	حســـــــــــــــابات</li>
//    <li> 	مخــــــــازن </li>
//    <li>	مبيـــــــــعات</li>
//    <li>مشتريـــــات</li>
//    <li>حسابـــــــات عمــلاء</li>
//    <li>	حسابـــــــــات موردين</li>
//    <li>مبيــــعات نقديه ومبيعات اجله</li>
//    <li>	بيــــــــان حركه الاصناف </li>
//    <li>شئـــــــــون عاملين </li>
//      </ul>



// <h1 >معلومات عن البرنامج</h1>



// <ul><h2>  وتقدم شركة منارة مجموعة من البرامج</h2>
//  <li>   برنامج تخطيط موارد المؤسسات</li>
//  <li>   برنامج المؤسسات العلاجيه</li>
//  <li>  برنامج خدمة مراكز المركبات </li>
//  <li>  برنامج نقاط البيع </li>
//  <li>  برنامج ادارة المطاعم والكافيهات </li>
// </ul>





//  <ul ><h2>• الحسابات</h2>
//    <li  >امكانيه عمل دليل حسابات قوي يوافق المعاير الدوليه ACCA  امكانيه التعديل او الاضافه عليه .</li>
//    <li>. امكانيه عمل مراكز تكاليف .</li>
//    <li>امكانيه عمل  سندات قبض و صرف ويتم ربطها بسهوله مع شاشات البيع و المشتريات 1.</li>
//    <li>امكانيه عمل سندات القيود لعمل القيود المحسابيه و التسويات </li>
//    <li>امكانيه عمل  تقارير كشف حساب العملاء و الموردين و الحسابات العامه </li>
//    <li>امكانيه عمل ميزان مراجعه عام و للعملاء و الموردين</li>
//    <li>امكانيه عمل  قوائم ماليه </li>
//    <li>امكانيه عمل التقارير الضريبيه </li>
//    <li>امكانيه عمل  حساب العملات واستخدام اكثر من عمله وعمل حسابات الفوركس بشكل الي عند عمل الميزانيه او عمل الاغلاقات</li>
//    <li>.امكانيه عمل فتره ماليه ويتم بعدها عمل اغلاق للقاعده وفتح سنه ماليه جديده لكي يكون كل سنه ماليه مستقله بزاتها وايمكانيه الرجوع للسنوات السابقه بسهوله . </li>
//  </ul>
 

// <img className="img_one" src="phote/logo1.png"/>

// <img className="img_two" src="phote/erd.jpg"/>



//  <ul><h2>. مراقبه المخزن </h2>
//     <li>امكانيه معرفه ارصده المخازن بسهوله تامه - كرته صنف و معرفه بشكل اجمالي.</li>
//     <li>امكانيه عمل جرد للاصناف .</li>
//     <li>.امكانيه معرفه اصناف منتهيه الصلاحيه و اصناف خدميه و اصناف مخزنيه.</li>
//     <li>.امكانيه إضافه اكثر من مخزن (مستودع) وتعريف اكثر من وحده للصنف .</li>
//     <li>.امكانيه معرفه الاصناف الراكده و الاصناف الاكثر مبيعا.</li>
//     <li>امكانيه معرفه الاصناف التي وصلت الي حد الطلب و الاصناف التي وصلت الي الحد الاقصي واعطاء اشعارات بها.</li>
//  </ul>














//  <ul><h2>. المبيعات </h2>
//    <li>.امكانيه عمل فواتير المبيعات و طباعتها وشامل دفعات العميل داخل الفاتوره.</li>
//    <li>.امكانيه عمل كل القيود المحاسبيه وحسابه مع المخزن كتكلفه مع المخازن دون عمل اي قيود محاسبيه .</li>
//    <li>.امكانيه اعطائك الخصم المرجح وافضل سعر للبيع .</li>
//    <li>.امكانيه التحكم الكامل في هامش ربحك ويكون سعر البيع موافق الي هامش الربح .</li>
//    <li>.امكانيه معرفه ربحيه كل فاتوره ومعرفه ربحيه كل صنف في التقارير .</li>
//    <li>يتميز البرنامج  اعطائك اشعارات لمعرفه استلام المتحصلات من العملاء.وجود اكثرمن وحدات للبيع لكل صنف حتى يتناسب مع محلات الجملة القطاعى
//      </li>
//  </ul>


//  <ul><h2>. شئون العاملين </h2>
//    <li>امكانيه تكويد موظفين .</li>
//    <li>.امكانيه ادخال بينات الموظفين من تلفون و عنوان ورقم البطاقه و الصور و المستندات .</li>
//    <li>.امكانيه ادخال مفردات الراتب للموظفين وطباعه كشف الرواتب بسهوله.</li>
//  </ul>


//  <p>  
//               نظام النسخ الاحتياطي لقاعدة البيانات للحفاظ عليها من الفقد وسهولة  
//    يتميز البرنامج بوجهه استخدام سهله تجعل من السهل على أي شخص استخدامها بدون خبرة سابقة
//   وجود اكثر من شكل وتصميم لشاشة البيع يمكنك الاختيار بينهم اتتناسب مع نشاطك او مع الشاشات العادية او شاشات اللمس
//   اختصارات من الكيبورد للوصول السريع إلى شاشتك المطلوبة مثل الاوفيس
  
//   برنامج كامل متكامل مع دعم فنى طوال ايام الاسبوعي
//    برنامج بيحقق المعادلة الصعبة ( قوة وتحكم وسهولة وبساطة) وبسعر خيالى
//   فقط راسلنا على صفحتنا او اتصل بنا على الارقام الاتية :-
//   اتصل بنا :  01000902055 -011485480299
//   </p>