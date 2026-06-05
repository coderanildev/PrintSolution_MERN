import Layout from "../components/Layout";

import BannerSection from "../components/home/BannerSection";
import ProductSection from "../components/home/ProductSection";
import InstagramSection from "../components/home/InstagramSection";
import NewArrival from "../components/home/NewArrival";
import DealSection from "../components/home/DealSection";

function Home() {
return (
<Layout>
    <BannerSection />
    <InstagramSection />
    <ProductSection />
  
    <DealSection />
    <NewArrival />
</Layout>
)
}

export default Home;