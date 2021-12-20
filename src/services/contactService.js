import nut from "../assets/img/contacts/nutchu.jpg";
import kate from "../assets/img/contacts/kate.jpg";
import zan from "../assets/img/contacts/zan.jpg";
import jus from "../assets/img/contacts/jus.jpg";
import ton from "../assets/img/contacts/ton.jpg";

export const contacts = [
  {
    id: "1",
    name: "Thanakorn Wihokkun",
    section: "Frontend Developer",
    image: ton,
    facebook: "https://www.facebook.com/profile.php?id=100008201738174",
    ig: "https://www.instagram.com/tonn.tnk/",
    github: "https://github.com/Thanakorn255",
  },
  {
    id: "2",
    name: "Kitsadang Sawangsiripol",
    section: "Backend Developer",
    image: kate,
    facebook: "https://www.facebook.com/kitsadang/",
    ig: "https://www.instagram.com/gandastik/",
    github: "https://github.com/gandastik/",
  },
  {
    id: "3",
    name: "Nuttanan Ruangpanich",
    section: "Frontend Developer",
    image: nut,
    facebook: "https://www.facebook.com/nut.nuttanan.1/",
    ig: "https://www.instagram.com/nuttanan_nt/",
    github: "https://github.com/Nuttanan29445",
  },
  {
    id: "4",
    name: "Chinathip Meesuannil",
    section: "Frontend Developer",
    image: zan,
    facebook: "https://www.facebook.com/zantacluse/",
    ig: "https://www.instagram.com/zantaclaus/",
    github: "https://github.com/zantaclaus",
  },
  {
    id: "5",
    name: "Nuttapong Naksamukkee",
    section: "Frontend Developer",
    image: jus,
    facebook: "https://www.facebook.com/jus.nakup/",
    ig: "https://www.instagram.com/juskup/",
    github: "https://github.com/JusAeng",
  },
];

export function getContacts() {
  return contacts.filter((i) => i);
}
