import residences from "../data/residences";

export default function Residencies() {
  return (
    <section id="residencies" className="px-10 py-20">
    <section className="px-10 py-20">
      <h3 className="text-2xl font-bold text-orange-500 uppercase">
        Best Choices
      </h3>
      
      <h2 className="mb-10 text-4xl font-bold">
        Popular Residencies
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {residences.map((item, index) => (
          <div
            key={index}
            className="transition shadow-md rounded-xl hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-56 rounded-t-xl"
            />

            <div className="p-5">
              <p className="font-bold text-orange-500">
                ${item.price}
              </p>
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

