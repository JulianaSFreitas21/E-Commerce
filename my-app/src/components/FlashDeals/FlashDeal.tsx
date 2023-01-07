import { FlashCard } from "./FlashCard";
import  bolt  from "../../common/assets/icons/bolt-solid.svg";

export function FlashDeals(){
    return(
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <img src={bolt} alt="bolt" />
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard/>
                </div>
            </section>
        </>
    )
}