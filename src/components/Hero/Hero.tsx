import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeImage from "../../assets/coffe.png";

export const Hero = () => {
    return (
        <section className="m-auto my-24 grid max-w-6xl justify-items-center gap-14 px-8 lg:flex lg:justify-items-stretch">
            <div>
                <h1 className="text-5xl text-base-title">
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className="mt-4 text-xl text-base-subtitle">
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </p>
                <div className="mt-16 grid gap-y-5 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-yellow-dark p-2 text-base-white">
                            <ShoppingCart weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Compra simples e segura
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-base-text p-2 text-base-white">
                            <Package weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Embalagem mantém o café intacto
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-yellow p-2 text-base-white">
                            <Timer weight="fill" />
                        </div>
                        <p className="text-base-text">
                            Entrega rápida e rastreada
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-full bg-purple-dark p-2 text-base-white">
                            <Coffee weight="fill" />
                        </div>
                        <p className="text-base-text">
                            O café chega fresquinho até você
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full max-w-md">
                <img className="" src={coffeImage} width={"100%"} height={"100%"} alt="" />
            </div>
        </section>
    );
};
