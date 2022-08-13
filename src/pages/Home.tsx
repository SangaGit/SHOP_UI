import Announcement from '../components/layout/announcement/Announcement';
import TopNavBar from '../components/layout/top-nav-bar/TopNavBar';
import Products from '../components/product/Products';
import Slider from '../components/slider/Slider';

const Home = () => {
	return (
		<div>
			<Announcement />
			<TopNavBar />
			<Slider />
			<Products />
		</div>
	);
};

export default Home;
