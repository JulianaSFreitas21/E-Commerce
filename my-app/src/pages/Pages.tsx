import { Annocument } from "../components/annocument/Annocument";
import { Discount } from "../components/discout/Discount";
import { FlashDeals } from "../components/FlashDeals/FlashDeal";
import { Home } from "../components/mainpage/Home";
import { NewArrivals } from "../components/newarrivals/NewArrivals";
import { Shop } from "../components/shops/Shop";
import { TopCate } from "../components/top/TopCate";
import { Wrapper } from "../components/wrapper/Wrapper";

export function Pages() {
    return (
      <>
        <Home/>
        <FlashDeals/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop/>
        <Annocument/>
        <Wrapper/>
      </>
    );
}  