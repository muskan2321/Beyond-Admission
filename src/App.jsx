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


import BCA from "./component/BCA";


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


import { GiEnergise } from "react-icons/gi";

import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Dashboard from "./component/pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import AboutGMAT from "./component/AboutGMAT";
import GMATScores from "./component/GMATScores";
import GMATDeliverables from "./component/GMATDeliverables";
import AboutGRE from "./component/AboutGRE";
import GREScores from "./component/GREScores";
import GREDeliverables from "./component/GREDeliverables";
import AboutSAT from "./component/AboutSAT";
import SATScores from "./component/SATScores";
import SATDeliverables from "./component/SATDeliverables";
import AboutIELTS from "./component/AboutIELTS";
import IELTSScores from "./component/IELTSScores";
import IELTSDeliverables from "./component/IELTSDeliverables";
import AboutTOEFL from "./component/AboutTOEFL";
import TOEFLScores from "./component/TOEFLScores";
import TOEFLDeliverables from "./component/TOEFLDeliverables";
import AboutUSMLE from "./component/AboutUSMLE";
import USMLEScores from "./component/USMLEScores";
import USMLEDeliverables from "./component/USMLEDeliverables";
import BTech from "./component/BTech";
import BE from "./component/BE";
import BArch from "./component/BArch";
import BPlan from "./component/BPlan";
import BBA from "./component/BBA";
import BMS from "./component/BMS";
import BDS from "./component/BDS";
import BAMS from "./component/BAMS";
import BHMS from "./component/BHMS";
import MTech from "./component/MTech";
import ME from "./component/ME";
import MBA from "./component/MBA";
import MCA from "./component/MCA";
import MDS from "./component/MDS";
import MAMS from "./component/MAMS";
import MHMS from "./component/MHMS";
import MD from "./component/MD";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import Users from "./admin/pages/Users";
import Universities from "./admin/pages/Universities";
import Course from "./admin/pages/Course";
import Blogs from "./admin/pages/Blogs";
import Contacts from "./admin/pages/Contacts";
import AdminNavbar from "./admin/pages/AdminNavbar";
import PageCategory from "./admin/pages/PageCategory";
import PageSubCategory from "./admin/pages/PageSubCategory";
import PageSubSubCategory from "./admin/pages/PageSubSubCategory";
import Pages from "./admin/pages/Pages";
import DynamicPage from "./component/DynamicPage";
import StudyUSA from "./component/StudyUSA";
import StudyUK from "./component/StudyUK";
import StudyCanada from "./component/StudyCanada";
import StudyAustralia from "./component/StudyAustralia";
import StudyGermany from "./component/StudyGermany";
import StudyIreland from "./component/StudyIreland";
import StudyUGUSA from "./component/StudyUGUSA";
import StudyUGUK from "./component/StudyUGUK";
import StudyUGGermany from "./component/StudyUGGermany";
import StudyUGIreland from "./component/StudyUGIreland";
import StudyUGAustralia from "./component/StudyUGAustralia";
import StudyUGCanada from "./component/StudyUGCanada";





function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Careeer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="courses" element={<Courses />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="medical" element={<Medical />} />
          <Route path="medical/mbbs" element={<Mbbs />} />
          <Route path="medical/ug" element={<UG />} />
          <Route path="medical/pg" element={<PG />} />
          <Route path="medical/md-ms" element={<MD />} />
          <Route path="engineering/b-tech" element={<BTech />} />
          <Route path="engineering/bca" element={<BCA />} />
          <Route path="engineering/m-tech" element={<MTech />} />
          <Route path="engineering/mca" element={<MCA />} />
          <Route path="management/mba" element={<MBA />} />
          <Route path="management/hr" element={<HR />} />
          <Route path="management/marketing" element={<Market />} />
          <Route path="humanities-law/ba" element={<BA />} />
          <Route path="humanities-law/llb" element={<LLB />} />
          <Route path="humanities-law/phd" element={<Phd />} />
          <Route path="humanities-law/ma" element={<MA />} />
          <Route path="humanities-law/commerce" element={<Commerce />} />
          <Route path="finance/b-com" element={<Bcom />} />
          <Route path="finance/m-com" element={<Mcom />} />
          <Route path="finance/ca" element={<CA />} />
          <Route path="more/law/llb" element={<LLB />} />
          <Route path="more/commerce/bcom" element={<Bcom />} />
          <Route path="more/commerce/mcom" element={<Mcom />} />
          <Route path="more/commerce/ca" element={<CA />} />
          <Route path="more/it/bca" element={<BCA />} />
          <Route path="more/it/mca" element={<MCA />} />
          <Route path="more/arts/ba" element={<BA />} />
          <Route path="more/arts/ma" element={<MA />} />

          <Route path="/test-prep/gmat/about" element={<AboutGMAT />} />
          <Route path="/test-prep/gmat/scores" element={<GMATScores />} />
          <Route
            path="/test-prep/gmat/deliverables"
            element={<GMATDeliverables />}
          />

          <Route path="/test-prep/gre/about" element={<AboutGRE />} />
          <Route path="/test-prep/gre/scores" element={<GREScores />} />
          <Route
            path="/test-prep/gre/deliverables"
            element={<GREDeliverables />}
          />

          <Route path="/test-prep/sat/about" element={<AboutSAT />} />
          <Route path="/test-prep/sat/scores" element={<SATScores />} />
          <Route
            path="/test-prep/sat/deliverables"
            element={<SATDeliverables />}
          />

          <Route path="/abroad/exams/ielts/about" element={<AboutIELTS />} />
          <Route path="/abroad/exams/ielts/scores" element={<IELTSScores />} />
          <Route
            path="/abroad/exams/ielts/deliverables"
            element={<IELTSDeliverables />}
          />

          <Route path="/abroad/exams/toefl/about" element={<AboutTOEFL />} />
          <Route path="/abroad/exams/toefl/scores" element={<TOEFLScores />} />
          <Route
            path="/abroad/exams/toefl/deliverables"
            element={<TOEFLDeliverables />}
          />

          <Route path="/test-prep/usmle/about" element={<AboutUSMLE />} />
          <Route path="/test-prep/usmle/scores" element={<USMLEScores />} />
          <Route
            path="/test-prep/usmle/deliverables"
            element={<USMLEDeliverables />}
          />

          <Route
            path="/study-india/ug/engineering/b-tech"
            element={<BTech />}
          />
          <Route path="/study-india/ug/engineering/b-e" element={<BE />} />
          <Route
            path="/study-india/ug/engineering/b-arch"
            element={<BArch />}
          />
          <Route
            path="/study-india/ug/engineering/b-plan"
            element={<BPlan />}
          />
          <Route path="/study-india/ug/management/bba" element={<BBA />} />
          <Route path="/study-india/ug/management/bms" element={<BMS />} />
          <Route path="/study-india/ug/medical/bds" element={<BDS />} />
          <Route path="/study-india/ug/medical/bams" element={<BAMS />} />
          <Route path="/study-india/ug/medical/bhms" element={<BHMS />} />
          <Route
            path="/study-india/pg/engineering/m-tech"
            element={<MTech />}
          />
          <Route path="/study-india/pg/engineering/m-e" element={<ME />} />
          <Route path="/study-india/pg/management/mba" element={<MBA />} />
          <Route path="/study-india/pg/management/mca" element={<MCA />} />
          <Route path="/study-india/pg/medical/mds" element={<MDS />} />
          <Route path="/study-india/pg/medical/mams" element={<MAMS />} />
          <Route path="/study-india/pg/medical/mhms" element={<MHMS />} />
          <Route path="/study-india/pg/medical/md-ms" element={<MD />} />

          <Route path="/abroad/countries/usa" element={<USA />} />
          <Route path="/abroad/countries/uk" element={<UK />} />
          <Route path="/abroad/countries/canada" element={<Canada />} />
          <Route path="/abroad/countries/australia" element={<Australia />} />
          <Route path="/abroad/countries/germany" element={<Germany />} />

          <Route path="/abroad/exams/ielts" element={<IELTS />} />
          <Route path="/abroad/exams/toefl" element={<TOEFL />} />
          <Route path="/abroad/exams/gre" element={<GRE />} />
          <Route path="/abroad/exams/gmat" element={<GMAT />} />

          <Route path="/abroad/visa-support" element={<Visa />} />

          <Route path="/abroad/financial/education-loans" element={<Loan />} />
          <Route
            path="/abroad/financial/scholarships"
            element={<Scholarship />}
          />
          <Route path="/page/:slug" element={<DynamicPage />} />

          <Route path="/study-usa" element={<StudyUSA />} />
          <Route path="/study-uk" element={<StudyUK />} />
          <Route path="/study-canada" element={<StudyCanada />} />
          <Route path="/study-australia" element={<StudyAustralia />} />
          <Route path="/study-germany" element={<StudyGermany />} />
          <Route path="/study-ireland" element={<StudyIreland />} />

          <Route path="/study-ug-usa" element={<StudyUGUSA />} />
          <Route path="/study-ug-uk" element={<StudyUGUK />} />
          <Route path="/study-ug-germany" element={<StudyUGGermany />} />
          <Route path="/study-ug-ireland" element={<StudyUGIreland />} />
          <Route path="/study-ug-australia" element={<StudyUGAustralia />} />
          <Route path="/study-ug-canada" element={<StudyUGCanada />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="universities" element={<Universities />} />
          <Route path="courses" element={<Course />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="navbars" element={<AdminNavbar />} />
          <Route path="categories" element={<PageCategory />} />
          <Route path="sub-categories" element={<PageSubCategory />} />
          <Route path="sub-sub-categories" element={<PageSubSubCategory />} />
          <Route path="pages" element={<Pages />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;