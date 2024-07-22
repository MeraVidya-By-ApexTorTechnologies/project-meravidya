import './App.css';
import { Header, Footer, VideoBg } from './components';
import { Home, About, SignUp,  FindATutor, Courses, SignIn, JoinAsTutor, NotFound} from './pages';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import Services from './services';
import InductionCall from './inductioncall';
import Blogslist from './Blogslist';
import TutorDashboard from './TutorDashboard';
import PackagePage from './PackagePage';
import StudentManagement from './StudentManagement';
import ClassManagement from './ClassManagement';
import AssignmentsAssessments from './AssignmentsAssessments';
import UpcomingClasses from './UpcomingClasses';
import StudentProfile from './StudentProfile';
import Assignments from './Assignments';
import Settings from './Settings';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationSettings';
import Contact from './contact';
import Tutors from './tutors';
import LearningTools from './learningtools';



function App() {
  return (
    <div className="max-w-screen overflow-hidden">
      <div id="goToTop" />
      <Header />
    
      {/* to balance the space occupied by navbar on the page, with out overlap */}
      <div className='h-[10vh]  lg:h-[12vh] bg-[#030012]' />
      
      <div className="min-h-screen bg-[#030012] text-white">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogslist" element={<Blogslist />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/induction-call" element={<InductionCall />} />
          <Route path="/learning-tools" element={<LearningTools />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/Tutordashboard" element={<TutorDashboard />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
          <Route path="/Assignments" element={<Assignments />} />
          <Route path="/ClassManagement" element={<ClassManagement />} />
          <Route path="/StudentManagement" element={<StudentManagement />} />     
          <Route path="/AssignmentsAssessments" element={<AssignmentsAssessments />} /> 
          <Route path="/settings/profile" element={<ProfileSettings />} />
          <Route path="/settings/account" element={<AccountSettings />} />
          <Route path="/settings/notifications" element={<NotificationSettings />} />
          <Route path="/PackagePage" element={<PackagePage />} />
      
          <Route path="/settings" element={<Settings />} />
          <Route path="/find-a-tutor" element={<FindATutor />} />
          <Route path="/join-as-tutor" element={<JoinAsTutor />} />
          <Route path="/UpcomingClasses" element={<UpcomingClasses />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/courses" element={<Courses />} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
