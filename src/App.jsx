import { Route, Routes } from "react-router-dom";
import Careeer from "./component/Career";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Blog from "./component/Blog";
import PaymentForm from "./component/Payment";

import UG from "./component/UG";
import PG from "./component/PG";
import BCA from "./component/BCA";
import HR from "./component/HR";
import Market from "./component/Market";

import LLB from "./component/LLB";
import Phd from "./component/Phd";

import Commerce from "./component/Commerce";

import CA from "./component/CA";
import USA from "./component/USA";
import UK from "./component/UK";
import Canada from "./component/Canada";
import Australia from "./component/Australia";
import Germany from "./component/Germany";
import Scholarship from "./component/Scholarship";
import Loan from "./component/Loan";
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
import BE from "./component/BE";
import BArch from "./component/BArch";
import BPlan from "./component/BPlan";

import ME from "./component/ME";
import MBA from "./component/MBA";

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
import AddStudyAbroad from "./admin/pages/AddStudyAbroad";
import MSUSA from "./component/MSUSA";
import MSUK from "./component/MSUK";
import MSCanada from "./component/MSCanada";
import MSGermany from "./component/MSGermany";
import MSIreland from "./component/MSIreland";
import MSAustralia from "./component/MSAustralia";
import MBAUSA from "./component/MBAUSA";
import MBAUK from "./component/MBAUK";
import MBACanada from "./component/MBACanada";
import MBAGermany from "./component/MBAGermany";
import MBAIreland from "./component/MBAIreland";
import MBAAustralia from "./component/MBAAustralia";
import MBBSGeorgia from "./component/MBBSGeorgia";
import MBBSRussia from "./component/MBBSRussia";
import MBBSUzbekistan from "./component/MBBSUzbekistan";
import MBBSKazakhstan from "./component/MBBSKazakhstan";
import MBBSKyrgyzstan from "./component/MBBSKyrgyzstan";
import MBBSnepal from "./component/MBBSnepal";
import GMAT from "./component/GMAT";
import GMATQuiz from "./component/GMATQuiz";
import GRE from "./component/GRE";
import GREQuiz from "./component/GREQuiz";
import GRETest from "./component/GRETest";
import SAT from "./component/SAT";
import SATQuiz from "./component/SATQuiz";

import IELTS from "./component/IELTS";
import TOEFL from "./component/TOEFL";
import USMLE from "./component/USMLE";
import AdmissionCounselling from "./component/AdmissionCounselling";
import NeetCounselling from "./component/NeetCounselling";
import EducationalLoan from "./component/EducationalLoan";
import PostAdmissionServices from "./component/PostAdmissionServices";
import BeyondBlogs from "./component/BeyondBlogs";
import BHMS from "./component/BHMS";
import BDS from "./component/BDS";
import BBA from "./component/BBA";
import BMS from "./component/BMS";
import Bcom from "./component/Bcom";
import BTech from "./component/BTech";
import BA from "./component/BA";
import Mcom from "./component/Mcom";
import MCA from "./component/MCA";
import MTech from "./component/MTech";
import MA from "./component/MA";
import Medical from "./component/Medical";
import Management from "./component/Management";
import Engineering from "./component/Engineering";
import Humanities from "./component/Humanities";
import MedicalPG from "./component/MedicalPG";
import ManagementPG from "./component/ManagementPG";
import EngineeringPG from "./component/EngineeringPG";
import HumanitiesPG from "./component/HumanitiesPG";

import TopMedicalCollegesIndia from "./component/TopMedicalCollegesIndia";
import TopManagementCollegesIndia from "./component/TopManagementCollegesIndia";

import TopEngineeringCollegesIndia from "./component/TopEngineeringCollegesIndia";

import TopHumanitiesCollegesIndia from "./component/TopHumanitiesCollegesIndia";
import ScrollToTop from "./component/ScrollToTop";
import ScrollTopButton from "./component/ScrollTopButton";
import FloatingSidebar from "./component/FloatingSidebar";










function App(){
  return (
    <>
      <ScrollToTop />
      <ScrollTopButton />
      <FloatingSidebar />
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
          <Route path="medical/ug" element={<UG />} />
          <Route path="medical/pg" element={<PG />} />
          <Route path="medical/md-ms" element={<MD />} />
          <Route path="engineering/b-tech" element={<BTech />} />
          <Route path="engineering/bca" element={<BCA />} />
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
          {/* <Route path="/test-prep/gmat/about" element={<AboutGMAT />} />
          <Route path="/test-prep/gmat/scores" element={<GMATScores />} />
          <Route
            path="/test-prep/gmat/deliverables"
            element={<GMATDeliverables />}
          /> */}
          {/* <Route path="/test-prep/gre/about" element={<AboutGRE />} />
          <Route path="/test-prep/gre/scores" element={<GREScores />} />
          <Route
            path="/test-prep/gre/deliverables"
            element={<GREDeliverables />}
          /> */}
          {/* <Route path="/test-prep/sat/about" element={<AboutSAT />} />
          <Route path="/test-prep/sat/scores" element={<SATScores />} />
          <Route
            path="/test-prep/sat/deliverables"
            element={<SATDeliverables />}
          /> */}
          {/* <Route path="/abroad/exams/ielts/about" element={<AboutIELTS />} />
          <Route path="/abroad/exams/ielts/scores" element={<IELTSScores />} />
          <Route
            path="/abroad/exams/ielts/deliverables"
            element={<IELTSDeliverables />}
          /> */}
          {/* <Route path="/abroad/exams/toefl/about" element={<AboutTOEFL />} />
          <Route path="/abroad/exams/toefl/scores" element={<TOEFLScores />} />
          <Route
            path="/abroad/exams/toefl/deliverables"
            element={<TOEFLDeliverables />}
          /> */}
          {/* <Route path="/test-prep/usmle/about" element={<AboutUSMLE />} />
          <Route path="/test-prep/usmle/scores" element={<USMLEScores />} />
          <Route
            path="/test-prep/usmle/deliverables"
            element={<USMLEDeliverables />}
          /> */}
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
          <Route path="/study/:slug" element={<DynamicPage />} />
          {/* STUDY IN ABROAD */}
          <Route path="/study-usa" element={<StudyUSA />} />
          <Route path="/study-uk" element={<StudyUK />} />
          <Route path="/study-canada" element={<StudyCanada />} />
          <Route path="/study-australia" element={<StudyAustralia />} />
          <Route path="/study-germany" element={<StudyGermany />} />
          <Route path="/study-ireland" element={<StudyIreland />} />

          {/* UG IN ABROAD */}
          <Route path="/ug-usa" element={<StudyUGUSA />} />
          <Route path="/ug-uk" element={<StudyUGUK />} />
          <Route path="/ug-germany" element={<StudyUGGermany />} />
          <Route path="/ug-ireland" element={<StudyUGIreland />} />
          <Route path="/ug-australia" element={<StudyUGAustralia />} />
          <Route path="/ug-canada" element={<StudyUGCanada />} />

          {/* MS IN ABROAD */}
          <Route path="/ms-usa" element={<MSUSA />} />
          <Route path="/ms-uk" element={<MSUK />} />
          <Route path="/ms-canada" element={<MSCanada />} />
          <Route path="/ms-germany" element={<MSGermany />} />
          <Route path="/ms-ireland" element={<MSIreland />} />
          <Route path="/ms-australia" element={<MSAustralia />} />

          {/* MBA IN ABROAD */}
          <Route path="/mba-usa" element={<MBAUSA />} />
          <Route path="/mba-uk" element={<MBAUK />} />
          <Route path="/mba-canada" element={<MBACanada />} />
          <Route path="/mba-germany" element={<MBAGermany />} />
          <Route path="/mba-ireland" element={<MBAIreland />} />
          <Route path="/mba-australia" element={<MBAAustralia />} />

          {/* MBBS IN ABROAD */}
          <Route path="/mbbs-georgia" element={<MBBSGeorgia />} />
          <Route path="/mbbs-russia" element={<MBBSRussia />} />
          <Route path="/mbbs-uzbekistan" element={<MBBSUzbekistan />} />
          <Route path="/mbbs-kazakhstan" element={<MBBSKazakhstan />} />
          <Route path="/mbbs-kyrgyzstan" element={<MBBSKyrgyzstan />} />
          <Route path="/mbbs-nepal" element={<MBBSnepal />} />

          {/* TEST-PREP */}
          <Route path="/gmat" element={<GMAT />} />
          <Route path="/gmat-quiz" element={<GMATQuiz />} />
          <Route path="/gre" element={<GRE />} />
          <Route path="/gre-quiz" element={<GREQuiz />} />
          <Route path="/gre-test" element={<GRETest />} />
          <Route path="/sat" element={<SAT />} />
          <Route path="/sat-quiz" element={<SATQuiz />} />
          <Route path="/ielts" element={<IELTS />} />
          <Route path="/toefl" element={<TOEFL />} />
          <Route path="/usmle" element={<USMLE />} />

          {/* study in India UG */}
          <Route path="/ug-medical" element={<Medical />} />
          <Route path="/ug-management" element={<Management />} />
          <Route path="/ug-engineering" element={<Engineering />} />
          <Route path="/ug-humanities" element={<Humanities />} />

          {/* study in India PG */}
          <Route path="/pg-medical" element={<MedicalPG />} />
          <Route path="/pg-management" element={<ManagementPG />} />
          <Route path="/pg-engineering" element={<EngineeringPG />} />
          <Route path="/pg-humanities" element={<HumanitiesPG />} />

          {/* top college */}
          <Route
            path="/top-medical-colleges-india"
            element={<TopMedicalCollegesIndia />}
          />
          <Route
            path="/top-management-colleges-india"
            element={<TopManagementCollegesIndia />}
          />
          <Route
            path="/top-engineering-colleges-india"
            element={<TopEngineeringCollegesIndia />}
          />
          <Route
            path="/top-humanities-colleges-india"
            element={<TopHumanitiesCollegesIndia />}
          />
          <Route
            path="/admission-counselling"
            element={<AdmissionCounselling />}
          />
          <Route path="/neet-counselling" element={<NeetCounselling />} />
          <Route path="/educational-loan" element={<EducationalLoan />} />
          <Route
            path="/post-admission-services"
            element={<PostAdmissionServices />}
          />
          <Route path="/beyond-blogs" element={<BeyondBlogs />} />
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
          <Route path="add-study" element={<AddStudyAbroad />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;