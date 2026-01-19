export default function Contact() {
  return (
    <section id="contact" className="px-10 py-20">
    <section className="flex flex-col items-center gap-16 px-10 py-20 md:flex-row">
      
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-orange-500">Contact Us</h3>
        <h2 className="mb-4 text-4xl font-bold">
          Easy to contact us
        </h2>
        <p className="mb-8 text-gray-500">
          We are always ready to help you with the best services.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <ContactCard title="Call" btn="Call now" />
          <ContactCard title="Chat" btn="Chat now" />
          <ContactCard title="Video Call" btn="Video Call now" />
          <ContactCard title="Message" btn="Message now" />
        </div>
      </div>

      <img src="https://i.pinimg.com/736x/f7/69/4b/f7694bac7453dd2884c6c709de1610d6.jpg" className="rounded-xl" alt="Contact" />
    </section>
    </section>
  );
}

function ContactCard({ title, btn }) {
  return (
    <div className="p-6 transition border rounded-xl hover:shadow-lg">
      
      {/* Title */}
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      {/* Phone */}
      <p className="mt-1 text-base text-gray-500">
        021 123 145 14
      </p>

      {/* Button */}
      <button className="w-full py-3 mt-5 text-base font-semibold text-indigo-600 rounded-lg bg-indigo-50 hover:bg-indigo-100">
        {btn}
      </button>
    </div>
  );
}
