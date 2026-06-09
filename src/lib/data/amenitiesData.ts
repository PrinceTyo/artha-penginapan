import { MdOutlineSecurity } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";
import { IoWifiSharp } from "react-icons/io5";

export const amenitiesData = {
  badge: "best service",
  title: "Experience Comfort Beyond Expectations",
  btnText: "Learn More",
  amenities: [
    {
      icon: IoWifiSharp,
      title: "Free High-Speed WiFi",
      description:
        "Stay connected throughout your visit with reliable high-speed internet access available in every room and public area.",
    },
    {
      icon: MdOutlineSecurity,
      title: "24/7 Security Service",
      description:
        "Enjoy a worry-free stay with round-the-clock security, secure access, and dedicated staff ready to assist.",
    },
    {
      icon: LuUtensilsCrossed,
      title: "Breakfast Included",
      description:
        "Start your day with a delicious breakfast prepared using fresh ingredients, offering local flavors.",
    },
  ],
};
