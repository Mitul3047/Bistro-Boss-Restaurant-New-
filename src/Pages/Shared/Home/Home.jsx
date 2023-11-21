import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};


export default Home;