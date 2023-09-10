import deliveryImage from "../assets/Illustration.png";
import { HeaderSuccess } from "../components/Success/HeaderSuccess";
import { SuccessSummary } from "../components/Success/SuccessSummary";

export const SuccessPage = () => {
    return (
        <section className="m-auto my-24 grid max-w-6xl grid-cols-catalog gap-8 px-6">
            <article>
                <HeaderSuccess />
                <main className="mt-10 flex w-full gap-24">
                    <SuccessSummary />
                    <div>
                        <img src={deliveryImage} width={492} height={293} />
                    </div>
                </main>
            </article>
        </section>
    );
};
