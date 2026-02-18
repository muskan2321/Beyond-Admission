import { Route, Routes } from "react-router-dom";
import Careeer from "./component/Career";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Blog from "./component/Blog";
import PaymentForm from "./component/Payment";
import Medical from "./component/Medical";
import Mbbs from "./component/mbbs";
import UG from "./component/UG";
import PG from "./component/PG";
import MD from "./component/MD";
import BTech from "./component/BTech";
import BCA from "./component/BCA";
import MTech from "./component/MTech";
import MCA from "./component/MCA";
import BBA from "./component/BBA";
import MBA from "./component/MBA";
import HR from "./component/HR";
import Market from "./component/Market";
import BA from "./component/BA";
import LLB from "./component/LLB";
import Phd from "./component/Phd";
import MA from "./component/MA";
import Commerce from "./component/Commerce";
import Bcom from "./component/Bcom";
import Mcom from "./component/Mcom";
import CA from "./component/CA";
import USA from "./component/USA";
import UK from "./component/UK";
import Canada from "./component/Canada";
import Australia from "./component/Australia";
import Germany from "./component/Germany";
import Scholarship from "./component/Scholarship";
import Loan from "./component/Loan";
import IELTS from "./component/Ielts";
import TOEFL from "./component/TOEFL";
import GRE from "./component/GRE";
import GMAT from "./component/GMAT";
import Visa from "./component/Visa";
import LMS from "./component/LMS";
import CRM from "./component/CRM";
import ERP from "./component/ERP";
import CompanyAbout from "./component/CompanyAbout";
import CompanyOpportunities from "./component/CompanyOpportunities";
import International from "./component/International";
import National from "./component/National";
import State from "./component/State";
import BTechCounselling from "./component/BtechCounselling";
import MedicalCounselling from "./component/MedicalCounselling";
import { GiEnergise } from "react-icons/gi";
import General from "./component/General";
import MTechCounselling from "./component/MTechCounselling";
import MedicalPgCounselling from "./component/MedicalPgCounselling";

function App(){
  return(
    <>
      <Routes>
           <Route path="/" element={<Careeer/>} > 
              <Route index element={<Home />}/>
              < Route path="about" element={<About />}/>
              < Route path="contact" element={<Contact />}/>
              < Route path="courses" element={<Courses />}/>
              < Route path="services" element={<Services />}/>
              < Route path="blog" element={<Blog />}/>
                < Route path="payment" element={<PaymentForm />}/>
                < Route path="medical" element={<Medical />}/>
                < Route path="medical/mbbs" element={<Mbbs />}/>
                < Route path="medical/ug" element={<UG />}/>
                < Route path="medical/pg" element={<PG />}/>
                 < Route path="medical/md-ms" element={<MD />}/>
                < Route path="engineering/b-tech" element={<BTech />}/>
                < Route path="engineering/bca" element={<BCA />}/>
                < Route path="engineering/m-tech" element={<MTech />}/>
                < Route path="engineering/mca" element={<MCA />}/>
                < Route path="management/bba" element={<BBA />}/>
                < Route path="management/mba" element={<MBA />}/>
                < Route path="management/hr" element={<HR />}/>
                < Route path="management/marketing" element={<Market />}/>
                < Route path="humanities-law/ba" element={<BA />}/>
                < Route path="humanities-law/llb" element={<LLB />}/>
                < Route path="humanities-law/phd" element={<Phd />}/>
                < Route path="humanities-law/ma" element={<MA />}/>
                < Route path="humanities-law/commerce" element={<Commerce />}/>
                < Route path="finance/b-com" element={<Bcom />}/>
                < Route path="finance/m-com" element={<Mcom />}/>
                < Route path="finance/ca" element={<CA />}/>              
                < Route path="more/law/llb" element={<LLB />}/>
                < Route path="more/commerce/bcom" element={<Bcom />}/>
                < Route path="more/commerce/mcom" element={<Mcom />}/>
                < Route path="more/commerce/ca" element={<CA />}/>
                < Route path="more/it/bca" element={<BCA />}/>
                < Route path="more/it/mca" element={<MCA />}/>
                < Route path="more/arts/ba" element={<BA />}/>
                < Route path="more/arts/ma" element={<MA />}/>
               
               

      <Route path="/branch/international" element={<International />} />
      <Route path="/branch/national" element={<National />} />
      <Route path="/branch/state" element={<State />} />
    
      <Route path="/companies/about" element={<CompanyAbout />} />
      <Route path="/companies/opportunities" element={<CompanyOpportunities />} />


      <Route path="/tech-solutions/lms" element={<LMS />} />
      <Route path="/tech-solutions/crm" element={<CRM />} />
      <Route path="/tech-solutions/erp" element={<ERP />} />
      

      <Route path="/abroad/countries/usa" element={<USA />} />
      <Route path="/abroad/countries/uk" element={<UK />} />
      <Route path="/abroad/countries/canada" element={<Canada />} />
      <Route path="/abroad/countries/australia" element={<Australia />} />
      <Route path="/abroad/countries/germany" element={<Germany />} />

      <Route path="/counselling/b-tech" element={<BTechCounselling />} />
      <Route path="/counselling/medical" element={<MedicalCounselling />} />
      <Route path="/counselling/general" element={<General />} />

      <Route path="/counselling/m-tech" element={<MTechCounselling />} />
      <Route path="/counselling/medical-pg" element={<MedicalPgCounselling />} />

      <Route path="/abroad/exams/ielts" element={<IELTS />} />
      <Route path="/abroad/exams/toefl" element={<TOEFL />} />
      <Route path="/abroad/exams/gre" element={<GRE />} />
      <Route path="/abroad/exams/gmat" element={<GMAT />} />

       <Route path="/abroad/visa-support" element={<Visa />} />         

      <Route path="/abroad/financial/education-loans" element={<Loan />} />
      <Route path="/abroad/financial/scholarships" element={<Scholarship />} />

      



           </Route>
      </Routes>
    </>
  )
}
export default App;