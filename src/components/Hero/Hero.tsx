import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeImage from "../../assets/coffe.png";

export const Hero = () => {
    return (
        <section className="grid justify-items-center lg:justify-items-stretch lg:flex gap-14 max-w-6xl px-8 m-auto my-24">
            <div>
                <h1 className="text-5xl text-base-title">
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className="text-xl mt-4 text-base-subtitle">
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </p>
                <div className="grid sm:grid-cols-2 gap-y-5 mt-16">
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center p-2 rounded-full text-base-white bg-yellow-dark">
                            <ShoppingCart weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Compra simples e segura
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center p-2 rounded-full text-base-white bg-base-text">
                            <Package weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Embalagem mantém o café intacto
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center p-2 rounded-full text-base-white bg-yellow">
                            <Timer weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Entrega rápida e rastreada
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center p-2 rounded-full text-base-white bg-purple-dark">
                            <Coffee weight="fill" />
                        </div>
                        <p className="text-base-text">
                            O café chega fresquinho até você
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full max-w-md">
                <img className="" src={coffeImage} alt="" />
            </div>
        </section>
    );
};
