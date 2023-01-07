import { Categories } from "./Categories";
import { Slider } from "./Slider";

import './Home.css'

export function Home() {
    return (
      <section className="home">
        <div className="container d_flex">
          <Categories/>
          <Slider/>
        </div>
      </section>
    );
}  