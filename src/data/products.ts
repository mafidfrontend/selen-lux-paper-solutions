import napkins from "@/assets/product-napkins.jpg";
import wetwipes from "@/assets/product-wetwipes.jpg";
import toilet from "@/assets/product-toilet.jpg";
import towels from "@/assets/product-towels.jpg";

export type ProductCategory = "napkins" | "wetwipes" | "toilet" | "household";

export type Product = {
  id: string;
  category: ProductCategory;
  image: string;
  name: { uz: string; ru: string; en: string };
  packaging: { uz: string; ru: string; en: string };
  description: { uz: string; ru: string; en: string };
};

export const CATEGORY_LABELS: Record<ProductCategory, { uz: string; ru: string; en: string }> = {
  napkins: { uz: "Salfetkalar", ru: "Салфетки", en: "Napkins" },
  wetwipes: { uz: "Ho'l salfetkalar", ru: "Влажные салфетки", en: "Wet wipes" },
  toilet: { uz: "Tualet qog'ozi", ru: "Туалетная бумага", en: "Toilet paper" },
  household: { uz: "Maishiy qog'oz", ru: "Бумага для дома", en: "Household paper" },
};

export const products: Product[] = [
  {
    id: "napkin-100-white",
    category: "napkins",
    image: napkins,
    name: { uz: "Oq salfetka 100 dona", ru: "Белые салфетки 100 шт", en: "White napkins 100 pcs" },
    packaging: { uz: "100 dona × 60 paket / karton", ru: "100 шт × 60 пачек / коробка", en: "100 pcs × 60 packs / carton" },
    description: {
      uz: "Yumshoq, oq, ikki qatlamli salfetkalar. Restoran va kafe uchun ideal.",
      ru: "Мягкие белые двухслойные салфетки. Идеальны для ресторанов и кафе.",
      en: "Soft, white, two-ply napkins. Ideal for restaurants and cafés.",
    },
  },
  {
    id: "napkin-200-color",
    category: "napkins",
    image: napkins,
    name: { uz: "Rangli salfetka 200 dona", ru: "Цветные салфетки 200 шт", en: "Colored napkins 200 pcs" },
    packaging: { uz: "200 dona × 30 paket / karton", ru: "200 шт × 30 пачек / коробка", en: "200 pcs × 30 packs / carton" },
    description: {
      uz: "Bayram va tantanalar uchun rangli salfetkalar to'plami.",
      ru: "Цветные салфетки для праздников и торжеств.",
      en: "Colored napkin set for parties and celebrations.",
    },
  },
  {
    id: "napkin-bar",
    category: "napkins",
    image: napkins,
    name: { uz: "Bar salfetka 250 dona", ru: "Бар-салфетки 250 шт", en: "Bar napkins 250 pcs" },
    packaging: { uz: "250 dona × 24 paket / karton", ru: "250 шт × 24 пачки / коробка", en: "250 pcs × 24 packs / carton" },
    description: {
      uz: "Bar va kafe uchun ixcham, sifatli salfetkalar.",
      ru: "Компактные качественные салфетки для баров и кафе.",
      en: "Compact, high-quality napkins for bars and cafés.",
    },
  },
  {
    id: "wetwipe-15",
    category: "wetwipes",
    image: wetwipes,
    name: { uz: "Ho'l salfetka 15 dona", ru: "Влажные салфетки 15 шт", en: "Wet wipes 15 pcs" },
    packaging: { uz: "15 dona × 96 paket / karton", ru: "15 шт × 96 пачек / коробка", en: "15 pcs × 96 packs / carton" },
    description: {
      uz: "Cho'ntak uchun mo'ljallangan ixcham ho'l salfetkalar.",
      ru: "Компактные карманные влажные салфетки.",
      en: "Pocket-size wet wipes for everyday use.",
    },
  },
  {
    id: "wetwipe-72",
    category: "wetwipes",
    image: wetwipes,
    name: { uz: "Ho'l salfetka 72 dona", ru: "Влажные салфетки 72 шт", en: "Wet wipes 72 pcs" },
    packaging: { uz: "72 dona × 24 paket / karton", ru: "72 шт × 24 пачки / коробка", en: "72 pcs × 24 packs / carton" },
    description: {
      uz: "Oilaviy qadoqdagi ho'l salfetkalar — bolalar va katta yoshlilar uchun.",
      ru: "Влажные салфетки в семейной упаковке — для детей и взрослых.",
      en: "Family-pack wet wipes — for kids and adults.",
    },
  },
  {
    id: "wetwipe-anti",
    category: "wetwipes",
    image: wetwipes,
    name: { uz: "Antibakterial 30 dona", ru: "Антибактериальные 30 шт", en: "Antibacterial 30 pcs" },
    packaging: { uz: "30 dona × 48 paket / karton", ru: "30 шт × 48 пачек / коробка", en: "30 pcs × 48 packs / carton" },
    description: {
      uz: "Antibakterial xususiyatli ho'l salfetkalar — gigiyena uchun.",
      ru: "Антибактериальные влажные салфетки для гигиены.",
      en: "Antibacterial wet wipes for hygiene.",
    },
  },
  {
    id: "toilet-12",
    category: "toilet",
    image: toilet,
    name: { uz: "Tualet qog'ozi 12 rulon", ru: "Туалетная бумага 12 рулонов", en: "Toilet paper 12 rolls" },
    packaging: { uz: "12 rulon × 8 paket / karton", ru: "12 рулонов × 8 пачек / коробка", en: "12 rolls × 8 packs / carton" },
    description: {
      uz: "Ikki qatlamli yumshoq tualet qog'ozi — uy va ofis uchun.",
      ru: "Двухслойная мягкая туалетная бумага для дома и офиса.",
      en: "Two-ply soft toilet paper for home and office.",
    },
  },
  {
    id: "toilet-24",
    category: "toilet",
    image: toilet,
    name: { uz: "Tualet qog'ozi 24 rulon", ru: "Туалетная бумага 24 рулона", en: "Toilet paper 24 rolls" },
    packaging: { uz: "24 rulon × 4 paket / karton", ru: "24 рулона × 4 пачки / коробка", en: "24 rolls × 4 packs / carton" },
    description: {
      uz: "Ekonomik qadoq — katta hajmdagi xaridlar uchun.",
      ru: "Экономичная упаковка — для крупных закупок.",
      en: "Economy pack — for bulk purchasing.",
    },
  },
  {
    id: "towel-2",
    category: "household",
    image: towels,
    name: { uz: "Oshxona sochiq 2 rulon", ru: "Кухонные полотенца 2 рулона", en: "Kitchen towels 2 rolls" },
    packaging: { uz: "2 rulon × 24 paket / karton", ru: "2 рулона × 24 пачки / коробка", en: "2 rolls × 24 packs / carton" },
    description: {
      uz: "Mustahkam, suvni yaxshi shimuvchi oshxona sochiqlari.",
      ru: "Прочные кухонные полотенца с высокой впитываемостью.",
      en: "Durable, highly absorbent kitchen towels.",
    },
  },
  {
    id: "towel-4",
    category: "household",
    image: towels,
    name: { uz: "Oshxona sochiq 4 rulon", ru: "Кухонные полотенца 4 рулона", en: "Kitchen towels 4 rolls" },
    packaging: { uz: "4 rulon × 12 paket / karton", ru: "4 рулона × 12 пачек / коробка", en: "4 rolls × 12 packs / carton" },
    description: {
      uz: "Oilaviy qadoqdagi oshxona sochiqlari.",
      ru: "Кухонные полотенца в семейной упаковке.",
      en: "Family-pack kitchen towels.",
    },
  },
  {
    id: "facial-tissue",
    category: "household",
    image: napkins,
    name: { uz: "Yuz uchun salfetka 100 dona", ru: "Косметические салфетки 100 шт", en: "Facial tissues 100 pcs" },
    packaging: { uz: "100 dona × 36 quti / karton", ru: "100 шт × 36 коробок / коробка", en: "100 pcs × 36 boxes / carton" },
    description: {
      uz: "Yumshoq yuz uchun salfetkalar — kunlik foydalanish uchun.",
      ru: "Мягкие косметические салфетки для ежедневного использования.",
      en: "Soft facial tissues for daily use.",
    },
  },
  {
    id: "wetwipe-baby",
    category: "wetwipes",
    image: wetwipes,
    name: { uz: "Bolalar uchun 80 dona", ru: "Детские 80 шт", en: "Baby wipes 80 pcs" },
    packaging: { uz: "80 dona × 24 paket / karton", ru: "80 шт × 24 пачки / коробка", en: "80 pcs × 24 packs / carton" },
    description: {
      uz: "Bolalar terisi uchun maxsus ho'l salfetkalar — hipoallergen.",
      ru: "Специальные влажные салфетки для детской кожи — гипоаллергенные.",
      en: "Specialized hypoallergenic wet wipes for baby skin.",
    },
  },
];

export const PHONE = "+998 90 950 28 00";
export const PHONE_HREF = "tel:+998909502800";
export const EMAIL = "info@selenlux.uz";
