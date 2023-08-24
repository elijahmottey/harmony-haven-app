import { meditations } from "@/data/meditations";
import Image from "next/image";

const Meditation: React.FC = () => {
  // Assuming you select the meditations for a specific group, e.g., 'group1'.
  // const selectedMeditations: Meditation[] = meditations["group1"];

  return (
    <div>
      <h1 className="font-sans uppercase text-[#0f172a] text-3xl font-medium ">
        Meditations 🧘‍♀️
      </h1>
      <div className="p-4 lg:flex lg:justify-evenly space-x-6 lg:gap-8 ">
        {/* <MeditationList meditations={selectedMeditations} /> */}

        <div className=" flex flex-col lg:gap-x-3">
          <h1 className="text-xl  font-bold font-sans mb-2 p-2">
            Popular Meditations for you
          </h1>
          {meditations.popular.map((item) => {
            return (
              <div
                key={item.id}
                className="border mb-4 shadow-md rounded-md p-2 "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain rounded-md mt-2"
                />
                <h1 className="text-center">{item.title}</h1>
                <audio controls className="  w-40 rounded-lg  ">
                  <source src={item.uri} />
                </audio>
              </div>
            );
          })}
        </div>

        <div className=" flex flex-col lg:gap-x-3">
          <h1 className="mt-4 text-xl font-bold font-sans mb-2 p-2">
            Beat your Anxiety
          </h1>

          <p className="shadow-lg p-2 mb-3 rounded-md text-gray-500">
            Anxiety is a normal part of life, but it can be debilitating when it
            becomes excessive. In this section, you will find resources to help
            you manage your anxiety and improve your well-being.
          </p>
          {meditations.anxiety.map((item) => {
            return (
              <div
                key={item.id}
                className="border mb-4 shadow-md rounded-md p-2 "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain rounded-md mt-2"
                />
                <h1 className="text-center">{item.title}</h1>
                <audio controls className="  w-40 rounded-lg  ">
                  <source src={item.uri} />
                </audio>
              </div>
            );
          })}
        </div>

        <div className=" flex flex-col lg:gap-x-3">
          <h1 className="mt-4 text-xl font-bold font-sans mb-2 p-2">Sleep</h1>
          <p className="shadow-lg mb-3 p-2 rounded-md text-gray-500">
            Get the restful sleep you deserve with our sleep resources. Discover
            tips, techniques, and tools to help you sleep better and wake up
            feeling refreshed
          </p>
          {meditations.sleep.map((item) => {
            return (
              <div
                key={item.id}
                className="border mb-3 shadow-md rounded-md p-2 "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full object-contain rounded-md mt-2"
                />
                <h1 className="text-center">{item.title}</h1>
                <audio controls className="  w-40 rounded-lg  ">
                  <source src={item.uri} />
                </audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meditation;
