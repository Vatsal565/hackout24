import InfoCards from "@/components/InfoCards";

export default function VerticalFarming() {
    return (
        <div>
            <div className="w-full relative h-[600px]">
                <img
                    src="/verticalFarming.webp"
                    alt="pic"
                    className="absolute w-full h-full object-cover object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Choose Your Vertical Farming Technology</h1>
                    <h2 className="text-lg mt-4 text-center text-white w-[550px]">Explore cutting-edge vertical farming systems with full-service support for cost-effective commercial
                        production of fresh and healthy foods</h2>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
                <h1 className="my-9 text-green-950 text-4xl font-semibold">
                Advantages of Vertical Farm technologies
                </h1>
                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/always_fresh.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Always-fresh produce</div>
                    <div className="w-[600px] text-center">Vertical farms can be situated in urban areas so that produce can be delivered to retailers and consumers when it`&apos;`s at its freshest</div>
                </div>
                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/pesticides_free.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Pesticide-free
                    </div>
                    <div className="w-[600px] text-center">The closed air cycle and controlled microclimate inside the farm avoid the use of non-biological pesticides, herbicides and acaricides</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/fast_scaling.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Fast scaling
                    </div>
                    <div className="w-[600px] text-center">Farms can be built in any configuration from 500 to more than 20 000 sq.m. It takes just weeks to design, build, and start growing</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/saving_space.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Saving space
                    </div>
                    <div className="w-[600px] text-center">Vertical tiers maximize space. With no need for soil, farms can be installed in industrial premises, warehouses and workshops</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/eco_friendly.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Environmental friendliness
                    </div>
                    <div className="w-[600px] text-center">Short supply chains drastically reduce carbon footprints, and controlled environment agriculture methods don`&apos;`t impact the ecology</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/cost_savings.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Cost savings
                    </div>
                    <div className="w-[600px] text-center">Production, processing, warehousing and storage in one location cuts expenditure. With iFarm Growtune software, no highly-qualified employees are needed</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/easy_cultivation.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Easy cultivation
                    </div>
                    <div className="w-[600px] text-center">Process automation and farm management software reduces the risks of a vertical farming business and maximizes yields</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/water_saving.png" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Water saving
                    </div>
                    <div className="w-[600px] text-center">iFarm vertical farms consume 90-95% less water than traditional agriculture and translucent greenhouses</div>
                </div>
            </div>

            <InfoCards/>
        </div>
    )
}
