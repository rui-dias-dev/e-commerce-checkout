import { Catalog } from "../components/Catalog/Catalog";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";

export const Home = () => {
    return (
        <section>
            <Header />
            <Hero />
            <Catalog />
        </section>
    );
};
