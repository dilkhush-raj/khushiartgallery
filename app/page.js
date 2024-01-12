import { LiaShippingFastSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import Hero from "@/components/Hero";

const services = [
  {
    id: 1,
    icon: <LiaShippingFastSolid />,
    label: "Free Shipping",
    descprition: "Order above ₹999"
  },
  {
    id: 2,
    icon: <MdPayment />,
    label: "Online Payment",
    descprition: "Easy and hassle free"
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    label: "Available in Whole India",
    descprition: "Easy delivery to your doorstep"
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="hidden md:flex flex-wrap gap-2 bg-[#fafafa]  md:justify-center p-2 px-4 shadow-sm">
        {services.map((service) => (
          <div key={service.id} className="flex items-center px-10 w-max">
            <span className="text-5xl rounded-full p-2">
              {service.icon}
            </span>
            <div className="leading-none">
              {service.label} <br />
              <span className=" text-[11px] ">{service.descprition} </span>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
