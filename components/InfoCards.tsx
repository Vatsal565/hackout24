
'use client'


export default function InfoCards() {
  const info = [
    {
      id: "1",
      photo: "/leafy_greens.jpg",
      name: "Leafy Greens",
      data : "Grow fresh salads and herbs with Nutrient Film Technique hydroponics. This automated, scalable system efficiently cultivates a wide variety of crops."
    },
    {
      id: "2",
      photo: "/stackgrow.jpg",
      name: "StackGrow",
      data : "Fully-automated hydroponic vertical farming solution for salads and herbs. Enables ultimate plant density and energy savings, with the minimum manual labor."
    },
    {
      id: "3",
      photo: "/microgreens.jpg",
      name: "Microgreens",
      data : "Cultivate microgreens at industrial scale with a vertical farming technology based on the Flood & Drain irrigation method, and get up to 55 harvests per year."
    },
    {
      id: "4",
      photo: "/berries.jpg",
      name: "Growtune software",
      data : "SaaS Platform for managing automated vertical farms, allowing you to achieve high-quality yield at predictable terms and reduce the cost of produce."
    },
    {
      id: "5",
      photo: "/growtune_software.jpg",
      name: "Berries",
      data : "Grow full-flavored strawberries year round on a vertical farm using drip irrigation and pollination with bumblebees."
    },
    {
      id: "6",
      photo: "/veggies.jpeg",
      name: "Veggies",
      data : "iFarm Automated farm system for commercial cultivation of vegetables in controlled environment."
    },
    {
      id: "7",
      photo: "/container.jpeg",
      name: "Container",
      data : "Compactly packed iFarm Leafy Greens system for hyperlocal production of salads and herbs. Can be installed as an individual spot or container cluster."
    }
  ]


  return <div>
    
    <div className="w-full flex justify-around items-center mt-7 h-auto max-[1800px]:flex-wrap mb-10">

      {
        info.map(item => <div key={item.id} className="relative w-[350px] h-[190px] bg-white rounded-[20px] shadow2 customStyle hover:h-[400px] my-11 group">
          <div className="absolute w-[250px] h-[150px] bg-white shadow2 left-[50%] top-[-50px] translate-x-[-50%] rounded-[20px] overflow-hidden customStyle group-hover:w-[300px] group-hover:h-[200px]">
            <img src={item.photo} className="absolute top-0 left-0 w-[100%] h-[100%] object-cover object-center"></img>
          </div>
          <div className="absolute w-[100%] h-[100%] flex justify-center items-end overflow-hidden">
            <div className="px-10 text-center w-[100%] customStyle translate-y-[185px] group-hover:translate-y-0">
              <h2 className="text-2xl font-poppins font-bold relative bottom-6">{item.name}</h2>
              

              <div className="data p-5 text-left">
                {item.data}
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  </div>

}


