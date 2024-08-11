import InfoCards from "@/components/InfoCards";

export default function Drip() {
    return (
        <div>
            <div className="w-full relative h-[600px]">
                <img
                    src="/1.jpeg"
                    alt="pic"
                    className="absolute w-full h-full object-cover object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-semibold">Drip Irrigation</h1>
                    <h2 className="text-lg mt-4 text-center text-white w-[550px]">Drip irrigation is an efficient system that delivers water directly to plant roots through a network of pipes and emitters, reducing evaporation and runoff. </h2>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
                <h1 className="my-9 text-green-950 text-4xl font-semibold">
                Advantages of Drip irrigation
                </h1>
                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/2.jpeg" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Water Efficiency</div>
                    <div className="w-[600px] text-center"> It minimizes water waste by delivering water directly to the plant's root zone, reducing evaporation and runoff.</div>
                </div>
                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/3.jpeg" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Enhanced Plant Health
                    </div>
                    <div className="w-[600px] text-center"> Consistent moisture levels promote healthier plant growth and can lead to higher crop yields.</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/4.jpeg" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Reduced Weed Growth
                    </div>
                    <div className="w-[600px] text-center">By targeting specific areas, drip irrigation limits water exposure to weeds, reducing their growth.</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/5.jpeg" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Lower Disease Risk
                    </div>
                    <div className="w-[600px] text-center">Watering at the root level keeps foliage dry, reducing the risk of plant diseases caused by excess moisture on leaves.</div>
                </div>

                <div className="flex flex-col gap-5 items-center my-7">
                    <img src="/6.jpeg" alt="fresh" className="w-24 h-24"/>
                    <div className="text-3xl font-semibold">Flexibility and Scalability
                    </div>
                    <div className="w-[600px] text-center">The system can be easily adapted for different terrains and plant types, making it suitable for various agricultural settings.</div>
                </div>

           
            </div>

            <InfoCards/>
        </div>
    )
}