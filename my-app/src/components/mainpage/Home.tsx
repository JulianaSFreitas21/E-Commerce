import { Categories } from "./Categories";
import { SlideCard } from "./SlideCard";

export function Home() {
    return (
      <section className="home">
        <div className="container d_flex">
          <Categories/>
          <SlideCard/>
        </div>
      </section>
    );
}  