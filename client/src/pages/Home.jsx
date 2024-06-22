import '../styles/home.css';
import { VideoBg } from '../components';
import { HomePart1, HomePart2, HomePart3, HomePart4 } from './homePageContents';

const Home = () => {
  return (
    <div className="landing-page m-0 p-0 border-none w-screen h-auto flex flex-col justify-center items-center">
     <div className='w-screen h-auto flex flex-col justify-center items-center'>
      <VideoBg />
      <p className="sm:text-2xl md:text-4xl lg:text-6xl font-bold absolute">
        Welcome to <span className="color-mainGreen font-bold">MeraVidya</span>
        !!
      </p>
     </div>
      <HomePart1/>
      <HomePart2/>
      <HomePart3/>
      <HomePart4/>
    </div>
  );
};

export default Home;
