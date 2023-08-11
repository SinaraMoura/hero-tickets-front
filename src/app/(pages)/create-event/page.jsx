import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
    return (
        <div className="container m-auto">
            <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
                <div className="mb-4 pr-6 border-r-2 border-[#61d9de]">
                    <div className="mb-4">
                        <p className="text-blue text-2xl font-medium ">Adicionar Eventos</p>
                        <p className="text-blue text-base font-light ">Crie o seu próprio evento da maneira que você preferir! :)</p>
                    </div>

                    <Input
                        type="text"
                        title="Título"
                        placeholder="Insira o nome do seu evento"
                    />

                    <Input
                        type="text"
                        title="Endereço"
                        placeholder="Insira o endereço do seu evento"
                    />

                    <Input
                        type="text"
                        title="Cupom"
                        placeholder="Insira o código"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            type="date"
                            title="Data"
                            placeholder="dd/mm/aaaa"
                        />

                        <Input
                            type="number"
                            title="Horário"
                            placeholder="hh:mm"
                        />
                    </div>

                    <p className="text-blue text-base font-medium mb-4 ">
                        Categoria do Evento
                    </p>
                    <div className="grid grid-cols-5 gap-1">
                        {categories.map((category) => {
                            return (
                                <div key={category.id} className="text-blue" >
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                    />
                                    <label htmlFor="">{category.name}</label>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-4">
                        <p className="text-blue text-base font-medium mb-4 ">Valor</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Caso seu evento seja gratuito, o campo deverá ficar vazio.
                            Caso haja mais de um setor, basta adicionar a seção.
                            Se houver cupom promocional, basta colocar o código no campo “cupom”.
                        </p>
                        <div className="grid grid-cols-5 gap-2">
                            <Input
                                type="number"
                                title="Preço"
                                placeholder="R$0,00"
                                className="col-span-2"
                            />
                            <Input
                                type="text"
                                title="Setor"
                                placeholder="Insira o nome do setor"
                                className="col-span-3"
                            />

                            <Input
                                type="textarea"
                                title="Descrição"
                                placeholder="Insira o nome do setor"
                                className="col-span-5"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4 ml-4">
                    <p className="text-blue text-2xl font-medium ">Área Criativa</p>
                    <p className="text-blue text-base font-light ">Adicione as imagens referentes ao seu evento!</p>

                    <div className="my-4 text-base font-medium">
                        <p className="text-blue ">Banner</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Insira um banner no formato 336x280
                        </p>
                        <div className="w-full  h-28 bg-zinc-300 rounded-3xl shadow">
                            <InputFile />
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-blue  text-base font-medium">Flyers</p>
                        <p className="text-neutral-500 text-sm font-light">
                            Insira até três flyers
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-full  h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>
                            <div className="w-full  h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>
                            <div className="w-full  h-28 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-blue  text-base font-medium">Mapa do Evento</p>
                            <p className="text-neutral-500 text-sm font-light">
                                Insira o Mapa do Evento indicando os setores
                            </p>
                            <div className="w-full  h-56 bg-zinc-300 rounded-3xl shadow">
                                <InputFile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}