import { ConversationType } from "@/types/global";

export type ContactItemType = {
  id:number
  name: string;
  last_chat: string;
  image: string;
  unread?: number;
  conversationType: ConversationType
}
export const contactList: ContactItemType[] = [
  {
    id: 1,
    name: "Rizky",
    last_chat: "lorem ipsum",
    image:
      "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/376746684_1537485390149670_6302745583142131935_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSrnqxTLF62ucr45eTGAlVpOJszuYAid7LuxHHNQKDHdA&oe=66099392&_nc_sid=e6ed6c&_nc_cat=111",
    conversationType: "group",
  },
  {
    id: 2,
    name: "Ananda Asih",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/308137902_2343753362470319_2288086579863637645_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTAJvGypL2jw9qi8TkvC9fF0NlON2y-REpAfBmujIzDnw&oe=66099852&_nc_sid=e6ed6c&_nc_cat=105",
    unread: 18,
    conversationType: "single",
  },
  {
    id: 3,
    name: "Budi Prasetyo",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/350862213_1230924464231533_1607397464308188102_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRlnNoxMG2eGFETWTcyTHWeiXmiMX9nFA0r_l88omUA0w&oe=66099878&_nc_sid=e6ed6c&_nc_cat=110",
    unread: 2,
    conversationType: "group",
  },
  {
    id: 4,
    name: "Yuni Putri",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/352257159_276939794721157_5085175472508544431_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSmL69xlS0Z3yTj4pIrYHVy3DY6Urm-2uijw2GPhd_a-w&oe=66098699&_nc_sid=e6ed6c&_nc_cat=105",
    unread: 1,
    conversationType: "single",
  },
  {
    id: 5,
    name: "Abdul Hakim",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/340152805_1857246651320174_2501014315399046083_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRSSkWxlOeC6kwM4g9i0XlR44Jogx7CenNqFbJrqWv28w&oe=66099DB0&_nc_sid=e6ed6c&_nc_cat=106",
    conversationType: "group",
  },
  {
    id: 6,
    name: "Deri Putra",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/328781585_872598977177040_5572120042751213181_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTwx5G9kHWJYCe7wFwIRklQ1OXeZQtiUeneVrkSnF5WMA&oe=6609731A&_nc_sid=e6ed6c&_nc_cat=102",
    conversationType: "single",
  },
  {
    id: 7,
    name: "Akbar Rizky",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/287941004_172953271813423_3492799265618175272_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSlwAbVE5me1U3gDdQImZo8yP0TfqHWuet3Ni-z2YnGqw&oe=660977E7&_nc_sid=e6ed6c&_nc_cat=102",
    conversationType: "group",
  },
  {
    name: "Wendi Putri",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/425339334_329830390100953_4524735244377156103_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQuGTixbLuSFWYbOT-z56TJ6puOsH6mcNrh8hayp4ECwg&oe=6609724D&_nc_sid=e6ed6c&_nc_cat=104",
    id: 8,
    conversationType: "single",
  },
  {
    name: "Nindi Putri",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/397170687_1043059260155015_2257922893287760434_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS4vVa_hfrbuHk6WI1_8eGG9ELt_ivnYgF9g8V9meh7QA&oe=66098266&_nc_sid=e6ed6c&_nc_cat=110",
    id: 9,
    conversationType: "group",
  },
  {
    name: "Vivi Inka",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/382483448_3005670862901161_1959746093036862802_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSec-XgqVx4ng9e5cEzyjshbJ84_2BLb57tnquB0xjQ7g&oe=66099C24&_nc_sid=e6ed6c&_nc_cat=104",
    id: 10,
    conversationType: "single",
  },
  {
    name: "Husaini Ilham",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/344998425_1254418715180913_4306686115579554526_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ7VusQiSl3weyf7dQsOImNNcz-ZFeU-gctmJKj1iPy_w&oe=66097482&_nc_sid=e6ed6c&_nc_cat=102",
    id: 11,
    conversationType: "group",
  },
  {
    name: "Luqman Habibi",
    last_chat: "lorem ipsum",
    image:
      "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/74934653_103056737884930_3361209038036083130_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQBz4Rhw7P_joe8wGXpavAPLotVbDpdYvTvDpnaJ_k2og&oe=66099EFC&_nc_sid=e6ed6c&_nc_cat=107",
    id: 12,
    conversationType: "single",
  },
  {
    name: "Farhan Maulana",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/379455142_294038446902227_1820995276260549056_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTtruEEog3aEUCE8K4QjCvIhoNvw7sUhJ81C-isokD74A&oe=660988B5&_nc_sid=e6ed6c&_nc_cat=109",
    id: 13,
    conversationType: "group",
  },
  {
    name: "Maulana Rizky",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/402684546_1721692524995851_2746402780247707431_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRtS8qhf_WPnFo9PnTNKqEFC2bVALPC_DnwOpbHamrDyA&oe=66099C21&_nc_sid=e6ed6c&_nc_cat=102",
    id: 14,
    conversationType: "single",
  },
  {
    name: "Ilyas Husaini",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/364373825_823363036245612_180845441746595995_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSQNvjtzh9EeRUxk6JeHBFTXPfTr_rDAvHhDrV0C5w36A&oe=66097295&_nc_sid=e6ed6c&_nc_cat=100",
    id: 15,
    conversationType: "group",
  },
  {
    name: "Rendi Devi",
    last_chat: "lorem ipsum",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/384849525_314774521160302_6217812430185999068_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT1BASfQ-SMHSbEi9FVZ6G6hzidCC13GlSjOJc4Xl7rtg&oe=66099C88&_nc_sid=e6ed6c&_nc_cat=102",
    id: 16,
    conversationType: "single",
  },
  {
    name: "Qiwie",
    last_chat: "lorem ipsum",
    image:
      "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/429963524_321770020877062_5188727549327687647_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSp4Hni6cx6R5x8HQXg7YevUqdv2PLLdmUhl-QcEXjHgA&oe=6609A2C3&_nc_sid=e6ed6c&_nc_cat=108",
    id: 17,
    conversationType: "group",
  },
  {
    name: "Cunta",
    last_chat: "lorem ipsum",
    image:
      "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/428899753_942801443895821_4402219781113234061_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSvvKzo5svXkSICDA5vUHngWsUuRxcsyJFSbshDk33UnQ&oe=6609A518&_nc_sid=e6ed6c&_nc_cat=109",
    id: 18,
    conversationType: "single",
  },
  {
    name: "Kobi",
    last_chat: "loremipsum dolor",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/308137902_2343753362470319_2288086579863637645_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTAJvGypL2jw9qi8TkvC9fF0NlON2y-REpAfBmujIzDnw&oe=66099852&_nc_sid=e6ed6c&_nc_cat=105",
    id: 19,
    conversationType: "group",
  },
];
