import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecundary } from "@/app/components/BannerSecundary";
import { categories } from "@/app/utils/categories";
export default function Dashboard() {
    return (
        <div className="container mx-auto">
            <BannerPrimary />

            <div className="p-2 text-blue ">
                <p className="text-2xl font-medium">Eventos em Destaque</p>
                <p className="text-base font-light">Se divirta com os principais eventos de Minas Gerais e do Brasil!</p>
            </div>

            <BannerSecundary />

            <div className="p-2 text-blue ">
                <p className="text-2xl font-medium">Navegue por tipo de evento</p>
                <p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
            </div>

            <div className="grid flex md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
                {categories.map((category) => {
                    return (
                        <div key={category.id} className="flex flex-col items-center justify-center cursor-pointer">
                            <img src={category.icon} alt="" className="rounded-full" />
                            <p>{category.name}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}