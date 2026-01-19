import { useState } from "react";
import valueData from "../data/valueData";

export default function Value() {
  const [open, setOpen] = useState(0);

  return (
    <section id="value" className="px-10 py-20">
    <section className="py-20">
      {/* CENTER WRAPPER */}
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center flex-1">
            <div className="p-3 border-2 border-gray-300 rounded-t-full">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
            alt="About"
            className="w-[380px] md:w-[420px] rounded-t-full object-cover"
          />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <h3 className="mb-2 text-2xl font-semibold text-orange-500">
            Our Value
          </h3>

          <h2 className="mb-4 text-4xl font-bold text-blue-900">
            Value We Give to You
          </h2>

          <p className="mb-8 text-gray-500">
            We always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          {valueData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => setOpen(open === index ? null : index)}
                className="p-5 mb-4 border rounded-lg cursor-pointer hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-xl text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-900">
                      {item.heading}
                    </h4>
                  </div>

                  <span className="text-xl text-blue-600">
                    {open === index ? "−" : "+"}
                  </span>
                </div>

                {open === index && (
                  <p className="mt-3 text-gray-500">
                    {item.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </section>
  );
}
