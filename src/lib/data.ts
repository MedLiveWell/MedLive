import type { CSSProperties } from "react";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Category = {
  id: string;
  /** URL slug for category routes (e.g. "andadores" → /produtos/andadores). */
  slug: string;
  label: string;
  count: number;
  desc: string;
  /** Optional cover image used on the home category cards. */
  image?: string;
  /** Optional CSS transform applied to the cover image (e.g. "scaleX(-1)"). */
  imageTransform?: string;
};

export type Subcategory = {
  id: string;
  label: string;
  /** URL slug nested under parent (e.g. "articulado" → /produtos/andadores/articulado). */
  slug: string;
  /** Refers to Category.slug (e.g. "andadores"). */
  parentCategory: string;
};

export type ProductColor = {
  id: string;
  label: string;
  /** Hex color used for the swatch dot. */
  swatch: string;
  /** Gallery images for this color. Empty means placeholder (photos pending). */
  images: string[];
  imageTransforms?: (string | undefined)[];
  /** Per-image inline style override (object-fit, object-position, etc). */
  imageStyles?: (CSSProperties | undefined)[];
};

export type Product = {
  code: string;
  cat: string;
  name: string;
  desc: string;
  specs: string[];
  image?: string;
  images?: string[];
  /** Optional per-product overrides for the spec tables on the detail page. */
  dimensions?: [string, string][];
  characteristics?: [string, string][];
  /** Optional CSS transform per image index (sparse). Used e.g. to mirror a photo. */
  imageTransforms?: (string | undefined)[];
  /** Per-image inline style override (object-fit, object-position, etc). */
  imageStyles?: (CSSProperties | undefined)[];
  /** Optional color variants. When present, the gallery uses the active color's images. */
  colors?: ProductColor[];
  /** When true, render the gallery as a clean blank placeholder instead of the category glyph. */
  awaitingPhotos?: boolean;
  /** When true, this product is featured in the /para-quem-vendemos showcase. */
  vendemosHighlight?: boolean;
  /** Optional subcategory id (refers to Subcategory.id). null/undefined = no subcategory. */
  subcategory?: string | null;
  /** Optional per-product differentials. Falls back to category-level defaults if undefined. */
  differentials?: Array<{ iconKey: string; title: string; desc: string }>;
};

export type BlogPost = {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  gradient: [string, string];
};

export type Value = {
  num: string;
  title: string;
  desc: string;
};

export const NAV: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "produtos", label: "Produtos", href: "/produtos" },
  { id: "vendemos", label: "Para quem vendemos", href: "/para-quem-vendemos" },
  { id: "sobre", label: "Sobre", href: "/sobre" },
  { id: "revendedor", label: "Seja Revendedor", href: "/seja-revendedor" },
  { id: "blog", label: "Blog", href: "/blog" },
];

export const CATEGORIES: Category[] = [
  {
    id: "andadores",
    slug: "andadores",
    label: "Andadores",
    count: 12,
    desc: "Andadores articulados, fixos e com rodas para apoio diário em uso interno e externo.",
    image: "/images/med-520-preto-1.png",
  },
  {
    id: "banquetas",
    slug: "banquetas-de-banho",
    label: "Banquetas de banho",
    count: 7,
    desc: "Segurança no banho com banquetas com e sem encosto, apoio de braço e abertura frontal.",
    image: "/images/med-390-1.png",
    imageTransform: "scaleX(-1)",
  },
  {
    id: "cadeiras-banho",
    slug: "cadeiras-de-banho",
    label: "Cadeiras de banho",
    count: 3,
    desc: "Cadeiras de banho dobráveis e desmontáveis em aço para banho assistido com conforto e estabilidade.",
    image: "/images/med-410-1.png",
  },
  {
    id: "cadeiras-transf",
    slug: "cadeiras-de-transferencia",
    label: "Cadeiras de transferência",
    count: 2,
    desc: "Cadeiras de transferência hidráulicas e multifuncionais para clínicas, hospitais e cuidado domiciliar.",
    image: "/images/med-3030-1.png",
  },
  {
    id: "cadeiras-de-transporte",
    slug: "cadeiras-de-transporte",
    label: "Cadeiras de transporte",
    count: 1,
    desc: "Cadeiras de transporte para deslocamento de pacientes em ambientes domiciliares, clínicas e hospitais.",
    image: "/categories/cadeiras-de-transporte.png",
  },
  {
    id: "muletas",
    slug: "muletas",
    label: "Muletas",
    count: 2,
    desc: "Muletas axilares e canadenses em alumínio leve e desmontável.",
    image: "/images/med-220-1.png",
  },
  {
    id: "barras",
    slug: "barras-de-apoio",
    label: "Barras de apoio",
    count: 1,
    desc: "Barras de apoio sanitárias com ajuste de altura e com peso suportado de até 150kg.",
    image: "/images/med-1010-1.png",
  },
];

export const SUBCATEGORIES: Subcategory[] = [
  {
    id: "andador-articulado",
    label: "Andador articulado",
    slug: "articulado",
    parentCategory: "andadores",
  },
  {
    id: "andador-com-roda",
    label: "Andador com roda",
    slug: "com-roda",
    parentCategory: "andadores",
  },
  {
    id: "andador-infantil",
    label: "Andador infantil",
    slug: "infantil",
    parentCategory: "andadores",
  },
  {
    id: "banqueta-com-encosto",
    label: "Banqueta com encosto",
    slug: "com-encosto",
    parentCategory: "banquetas-de-banho",
  },
  {
    id: "banqueta-sem-encosto",
    label: "Banqueta sem encosto",
    slug: "sem-encosto",
    parentCategory: "banquetas-de-banho",
  },
];

const med120Images = [
  "/images/med-120-1.jpg",
  "/images/med-120-2.jpg",
  "/images/med-120-3.jpg",
];

const med130Images = [
  "/images/med-130-1.png",
  "/images/med-130-2.png",
  "/images/med-130-3.png",
  "/images/med-130-4.png",
];

const med140Images = [
  "/images/med-140-1.png",
  "/images/med-140-2.png",
  "/images/med-140-3.png",
  "/images/med-140-4.png",
];

const med150Images = [
  "/images/med-150-1.png",
  "/images/med-150-2.png",
  "/images/med-150-3.png",
  "/images/med-150-4.png",
];

const med160Images = [
  "/images/med-160-1.png",
  "/images/med-160-2.png",
];

const med170Images = [
  "/images/med-170-1.png",
  "/images/med-170-2.png",
  "/images/med-170-3.png",
  "/images/med-170-4.png",
];

const med170rImages = [
  "/images/med-170r-1.png",
  "/images/med-170r-2.png",
  "/images/med-170r-3.png",
];

const med180Images = [
  "/images/med-180-2.png",
  "/images/med-180-1.png",
  "/images/med-180-3.png",
];

const med520PretoImages = [
  "/images/med-520-preto-1.png",
  "/images/med-520-preto-2.png",
  "/images/med-520-preto-3.png",
  "/images/med-520-preto-4.png",
];

const med530Images = [
  "/images/med-530-1.png",
  "/images/med-530-2.png",
  "/images/med-530-3.jpg",
  "/images/med-530-4.jpg",
];

const med550Images = [
  "/images/med-550-1.png",
  "/images/med-550-2.png",
];

const med330Images = [
  "/images/med-330-1.png",
  "/images/med-330-2.png",
  "/images/med-330-3.png",
  "/images/med-330-4.png",
];

const med360Images = [
  "/images/med-360-1.png",
  "/images/med-360-2.png",
];

const med370Images = ["/images/med-370-1.png"];

const med380Images = ["/images/med-380-1.png"];

const med390Images = ["/images/med-390-1.png"];

const med410Images = [
  "/images/med-410-1.png",
  "/images/med-410-2.png",
  "/images/med-410-3.png",
  "/images/med-410-4.png",
  "/images/med-410-5.png",
];

const med420Images = ["/images/med-420-1.png"];

const med440Images = ["/images/med-440-1.png"];

const med210Images = [
  "/images/med-210-1.png",
  "/images/med-210-2.png",
  "/images/med-210-3.png",
];

const med220Images = [
  "/images/med-220-1.png",
  "/images/med-220-2.png",
];

const med3030Images = [
  "/images/med-3030-1.png",
  "/images/med-3030-2.png",
  "/images/med-3030-3.png",
  "/images/med-3030-4.png",
  "/images/med-3030-5.png",
  "/images/med-3030-6.png",
];

const med190Images = [
  "/images/med-190.png",
  "/images/med-190-02.png",
  "/images/med-190-03.png",
  "/images/med-190-04.png",
];

const med3040AmareloImages = [
  "/images/med-3040.png",
  "/images/med-3040-02.png",
  "/images/med-3040-03.png",
  "/images/med-3040-04.png",
  "/images/med-3040-05.png",
];

export const PRODUCTS: Product[] = [
  // Andadores (12)
  {
    code: "MED 120",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 2 Barras Articulado Aço",
    desc: "O MED 120 é um andador articulado em aço inoxidável com capacidade para 120 kg, indicado para pessoas em reabilitação ou com dificuldade de locomoção.\nO ajuste de altura por pino click em 6 níveis adapta o equipamento a diferentes estaturas sem ferramentas.\nFunciona na posição fixa ou articulada, pesa 2,55 kg e dobra para facilitar o transporte e o armazenamento.",
    specs: ["Aço", "Articulado", "120kg"],
    image: med120Images[0],
    images: med120Images,
    differentials: [
      { iconKey: "shield", title: "Estrutura em aço inoxidável", desc: "Resistência e durabilidade para uso clínico e domiciliar diário." },
      { iconKey: "check", title: "Ajuste de altura em 6 níveis", desc: "Sistema de pino click que adapta o andador ao usuário sem ferramentas." },
      { iconKey: "truck", title: "Fixo e articulado", desc: "Duas funções de uso para diferentes perfis de marcha e ambientes." },
    ],
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "73 – 90 cm"],
      ["Profundidade", "44 cm"],
    ],
    characteristics: [
      ["Capacidade", "120 kg"],
      ["Peso líquido", "2,55 kg"],
      ["Acabamento", "Aço Inoxidável"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 130",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 2 Barras Clique Duplo Alumínio Prata",
    desc: "O MED 130 é um andador fixo em alumínio com barras centrais reforçadas em aço, capacidade para 135 kg e estrutura mais leve que os modelos tradicionais.\nO ajuste de altura por pino click em 8 níveis adapta o andador a diferentes estaturas sem ferramentas.\nO sistema de clique duplo, com botões laterais, permite abertura e travamento rápidos, pesa 2,5 kg e dobra para facilitar o transporte.",
    specs: ["Alumínio", "Clique duplo", "135kg"],
    image: med130Images[0],
    images: med130Images,
    differentials: [
      { iconKey: "shield", title: "Alumínio com barras em aço", desc: "Combinação que une leveza no manuseio e resistência reforçada nas barras centrais." },
      { iconKey: "check", title: "Ajuste de altura em 8 níveis", desc: "Sistema de pino click com marcação numérica para regulagem precisa." },
      { iconKey: "truck", title: "Sistema de clique duplo", desc: "Botões laterais que travam e destravam o andador de forma rápida e segura." },
    ],
    dimensions: [
      ["Largura", "43,5 cm"],
      ["Altura", "82 – 100 cm"],
      ["Profundidade", "50 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "2,5 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 140",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 2 Barras Clique Duplo Alumínio Prata Acetinado",
    desc: "Autonomia com um toque de sofisticação. O MED 140 une resistência e acabamento prata acetinado exclusivo para quem quer se locomover com segurança, estilo e praticidade no dia a dia.",
    specs: ["Alumínio", "Acetinado", "135kg"],
    image: med140Images[0],
    images: med140Images,
    dimensions: [
      ["Largura", "43,5 cm"],
      ["Altura", "82 – 100 cm"],
      ["Profundidade", "50 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "2,5 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 150",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 3 Barras Articulado Alumínio Prata",
    desc: "Quando estabilidade faz toda a diferença. O MED 150 oferece base de apoio extra com 3 barras e função articulada — a escolha certa para quem precisa de mais firmeza e segurança em cada passo.",
    specs: ["Alumínio", "3 barras", "150kg"],
    image: med150Images[0],
    images: med150Images,
    imageTransforms: ["scaleX(-1)"],
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "81 – 98,5 cm"],
      ["Profundidade", "47 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "2,7 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 160",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 3 Barras Articulado Alumínio Bronze",
    desc: "Estabilidade máxima com identidade própria. O MED 160 entrega a mesma performance das 3 barras articuladas com o diferencial do acabamento bronze — para quem quer segurança sem abrir mão do estilo.",
    specs: ["Alumínio", "Bronze", "150kg"],
    image: med160Images[0],
    images: med160Images,
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "81 – 98,5 cm"],
      ["Profundidade", "47 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "2,7 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 170",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 1 Barra Desmontável e Dobrável Alumínio",
    desc: "Liberdade de movimento no menor espaço possível. O MED 170 é compacto, ultra leve e desmontável — perfeito para quem precisa de apoio confiável em casa, no trabalho ou em viagem.",
    specs: ["Desmontável", "Sem rodas", "150kg"],
    image: med170Images[0],
    images: med170Images,
    dimensions: [
      ["Largura", "48 cm"],
      ["Altura", "81 – 98 cm"],
      ["Profundidade", "43 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "2,85 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 170R",
    subcategory: "andador-com-roda",
    cat: "andadores",
    name: "Andador 1 Barra Desmontável e Dobrável Alumínio com Rodas",
    desc: "Todo o conforto do MED 170, agora com rodas para ir ainda mais longe. Deslocamento suave em qualquer superfície com a praticidade de um andador dobrável e desmontável.",
    specs: ["Desmontável", "Com rodas", "150kg"],
    image: med170rImages[0],
    images: med170rImages,
    dimensions: [
      ["Largura", "48 cm"],
      ["Altura", "81 – 98 cm"],
      ["Profundidade", "43 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "2,85 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 180",
    subcategory: "andador-infantil",
    cat: "andadores",
    name: "Andador 2 Barras Triangular Infantil Dobrável com Rodas Alumínio",
    desc: "Segurança e autonomia para cada fase do crescimento. O MED 180 foi desenvolvido especialmente para crianças que precisam de apoio na locomoção — leve, ajustável e pronto para acompanhar o desenvolvimento.",
    specs: ["Infantil", "Triangular", "100kg"],
    image: med180Images[0],
    images: med180Images,
    dimensions: [
      ["Largura", "48 cm"],
      ["Altura", "55 – 65 cm"],
      ["Profundidade", "41 cm"],
    ],
    characteristics: [
      ["Capacidade", "100 kg"],
      ["Peso líquido", "2,0 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 190",
    subcategory: "andador-articulado",
    cat: "andadores",
    name: "Andador 3 Barras Articulado Alumínio Prata Desmontável",
    desc: "O melhor dos dois mundos: máxima estabilidade e praticidade para guardar. O MED 190 combina 3 barras articuladas com estrutura desmontável — para quem não abre mão de desempenho nem de conveniência.",
    specs: ["Desmontável", "Articulado", "150kg"],
    image: med190Images[0],
    images: med190Images,
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "81 – 98,5 cm"],
      ["Profundidade", "47 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "2,7 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "Sim"],
    ],
  },
  {
    code: "MED 520",
    subcategory: "andador-com-roda",
    cat: "andadores",
    name: "Andador com Rodas Dobrável Aço",
    desc: "Vá mais longe com mais conforto e segurança. O MED 520 é o andador completo com assento, freios e bolsa — ideal para quem quer autonomia total para caminhar, descansar e se mover com confiança.",
    specs: ["Aço", "4 rodas", "135kg"],
    image: med520PretoImages[0],
    images: med520PretoImages,
    vendemosHighlight: true,
    dimensions: [
      ["Largura", "48 cm"],
      ["Altura", "77 – 87 cm"],
      ["Profundidade", "44,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "7,75 kg"],
      ["Acabamento", "Aço"],
      ["Função articulada", "—"],
    ],
    colors: [
      { id: "preto", label: "Preto", swatch: "#1c1c1c", images: med520PretoImages },
      { id: "vinho", label: "Vinho", swatch: "#7a1e2a", images: [] },
      { id: "azul", label: "Azul", swatch: "#1e4f99", images: [] },
      { id: "dourado", label: "Dourado", swatch: "#c79a3a", images: [] },
    ],
  },
  {
    code: "MED 530",
    subcategory: "andador-com-roda",
    cat: "andadores",
    name: "Andador com Rodas Dobrável Alumínio",
    desc: "Leveza e rodas maiores para um deslocamento mais fluido. O MED 530 é o andador com rodas em alumínio ideal para quem quer se mover com mais facilidade e conforto no dia a dia.",
    specs: ["Alumínio", "4 rodas", "135kg"],
    image: med530Images[0],
    images: med530Images,
    dimensions: [
      ["Largura", "47 cm"],
      ["Altura", "81 – 94 cm"],
      ["Profundidade", "44,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "7,7 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 550",
    subcategory: "andador-com-roda",
    cat: "andadores",
    name: "Andador com Rodas e Assento Alumínio",
    desc: "Controle total em cada curva. O MED 550 tem rodas dianteiras com giro 360° para manobras precisas e assento confortável — a solução para quem quer autonomia e segurança em qualquer ambiente.",
    specs: ["Com assento", "4 rodas", "135kg"],
    image: med550Images[0],
    images: med550Images,
    dimensions: [
      ["Largura", "52 cm"],
      ["Altura", "90 – 105 cm"],
      ["Profundidade", "44 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "7,7 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "—"],
    ],
  },

  // Banquetas (6)
  {
    code: "MED 310",
    subcategory: "banqueta-sem-encosto",
    cat: "banquetas",
    name: "Banqueta de banho sem encosto",
    desc: "Banqueta de banho simples, assento antiderrapante, sem encosto.",
    specs: ["Sem encosto", "Antiderrapante", "100kg"],
  },
  {
    code: "MED 320",
    subcategory: "banqueta-com-encosto",
    cat: "banquetas",
    name: "Banqueta de banho com encosto",
    desc: "Com encosto em polietileno, maior conforto e segurança no banho.",
    specs: ["Com encosto", "Antiderrapante", "100kg"],
  },
  {
    code: "MED 330",
    subcategory: "banqueta-com-encosto",
    cat: "banquetas",
    name: "Banqueta para Banho com Encosto e Apoio de Braço",
    desc: "Sentar e levantar com muito mais segurança. A MED 330 tem encosto e apoios de braço laterais para quem precisa de suporte completo — transformando o momento do banho em uma experiência mais segura e confortável.",
    specs: ["Encosto", "Apoio braço", "135kg"],
    image: med330Images[0],
    images: med330Images,
    imageTransforms: ["scaleX(-1)"],
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "74 – 88 cm"],
      ["Profundidade", "43 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "3,4 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 360",
    subcategory: "banqueta-com-encosto",
    cat: "banquetas",
    name: "Banqueta para Banho com Encosto, Apoio de Braço e Abertura Frontal",
    desc: "Suporte completo e higiene facilitada para um banho com mais dignidade. A MED 360 tem encosto, apoios de braço e abertura frontal — a solução mais completa para o banho assistido com conforto e praticidade.",
    specs: ["Abertura frontal", "Apoio braço", "135kg"],
    image: med360Images[0],
    images: med360Images,
    dimensions: [
      ["Largura", "47 cm"],
      ["Altura", "73 – 86 cm"],
      ["Profundidade", "40,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "3,25 kg"],
      ["Acabamento", "HDPE"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 370",
    subcategory: "banqueta-sem-encosto",
    cat: "banquetas",
    name: "Banqueta para Banho sem Encosto com Suporte para Chuveiro",
    desc: "A banqueta mais leve da linha, com suporte para chuveiro integrado. A MED 370 é ideal para quem quer praticidade e independência no banho sem abrir mão de estabilidade e segurança.",
    specs: ["Sem encosto", "Suporte chuveiro", "135kg"],
    image: med370Images[0],
    images: med370Images,
    imageTransforms: ["scaleX(-1)"],
    dimensions: [
      ["Largura", "50 cm"],
      ["Altura", "37,5 – 50 cm"],
      ["Profundidade", "30,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "1,8 kg"],
      ["Acabamento", "HDPE"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 380",
    subcategory: "banqueta-com-encosto",
    cat: "banquetas",
    name: "Banqueta para Banho com Encosto",
    desc: "Mais espaço, mais conforto e mais estabilidade no banho. A MED 380 tem encosto e assento mais amplo — para quem precisa de mais espaço e apoio para se sentir seguro e à vontade na hora do banho.",
    specs: ["Com encosto", "Assento amplo", "135kg"],
    image: med380Images[0],
    images: med380Images,
    dimensions: [
      ["Largura", "50 cm"],
      ["Altura", "71,5 – 84 cm"],
      ["Profundidade", "46,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "2,6 kg"],
      ["Acabamento", "HDPE"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 390",
    cat: "banquetas",
    name: "Banqueta para Banho com Encosto e Apoio de Braço",
    desc: "Base mais larga, mais segurança em cada banho. A MED 390 combina encosto, apoios de braço e estrutura mais ampla — para quem precisa do máximo em estabilidade e suporte durante o banho.",
    specs: ["Encosto", "Apoio braço", "135kg"],
    image: med390Images[0],
    images: med390Images,
    imageTransforms: ["scaleX(-1)"],
    dimensions: [
      ["Largura", "53 cm"],
      ["Altura", "70,5 – 80,5 cm"],
      ["Profundidade", "51 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "3,1 kg"],
      ["Acabamento", "HDPE"],
      ["Função articulada", "—"],
    ],
  },

  // Cadeiras de banho (3)
  {
    code: "MED 410",
    cat: "cadeiras-banho",
    name: "Cadeira de Banho com Encosto Revestido Desmontável Aço",
    desc: "Banho assistido com segurança, conforto e dignidade. A MED 410 é a cadeira de banho completa com encosto acolchoado, suporte para comadre e rodas com freio para facilitar o cuidado e preservar a autonomia do usuário.",
    specs: ["Aço", "Desmontável", "150kg"],
    image: med410Images[0],
    images: med410Images,
    vendemosHighlight: true,
    dimensions: [
      ["Largura", "45 cm"],
      ["Altura", "93 cm"],
      ["Profundidade", "43 cm"],
    ],
    characteristics: [
      ["Capacidade", "150 kg"],
      ["Peso líquido", "7,55 kg"],
      ["Acabamento", "Aço"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 420",
    cat: "cadeiras-banho",
    name: "Cadeira de Banho Dobrável e Desmontável Aço",
    desc: "Prática, resistente e fácil de usar. A MED 420 é a cadeira de banho dobrável ideal para quem precisa de uma solução acessível e confortável para o banho assistido no dia a dia.",
    specs: ["Dobrável", "Desmontável", "100kg"],
    image: med420Images[0],
    images: med420Images,
    dimensions: [
      ["Largura", "50 cm"],
      ["Altura", "76 – 86 cm"],
      ["Profundidade", "54 cm"],
    ],
    characteristics: [
      ["Capacidade", "100 kg"],
      ["Peso líquido", "5,5 kg"],
      ["Acabamento", "Aço"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 440",
    cat: "cadeiras-banho",
    name: "Cadeira de Banho com Encosto Revestido Desmontável Aço",
    desc: "Resistência e higiene fácil para quem cuida todo dia. A MED 440 tem encosto em poliuretano de limpeza rápida e estrutura em aço com pintura eletrostática — a cadeira de banho certa para uso residencial e institucional intensivo.",
    specs: ["Aço", "Revestido", "100kg"],
    image: med440Images[0],
    images: med440Images,
    dimensions: [
      ["Largura", "58 cm"],
      ["Altura", "86 cm"],
      ["Profundidade", "49 cm"],
    ],
    characteristics: [
      ["Capacidade", "100 kg"],
      ["Peso líquido", "6,6 kg"],
      ["Acabamento", "Aço"],
      ["Função articulada", "—"],
    ],
  },

  // Cadeiras de transferência (2)
  {
    code: "MED 3030",
    cat: "cadeiras-transf",
    name: "Cadeira de Transferência Hidráulica",
    desc: "Transfira com segurança, sem esforço e sem risco. A MED 3030 tem elevação hidráulica e abertura lateral de 180° para encaixe direto ao leito — a solução profissional que protege o cuidador e garante dignidade ao paciente.",
    specs: ["Hidráulica", "Multiposição", "135kg"],
    image: med3030Images[0],
    images: med3030Images,
    dimensions: [
      ["Largura", "89 cm"],
      ["Altura", "94 – 109 cm"],
      ["Profundidade", "55,5 cm"],
    ],
    characteristics: [
      ["Capacidade", "135 kg"],
      ["Peso líquido", "29 kg"],
      ["Acabamento", "—"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 3040",
    cat: "cadeiras-transf",
    name: "Cadeira de Transferência Multifuncional",
    desc: "Transferências seguras entre cama, cadeira de rodas e sofá, com mínimo esforço. A MED 3040 é a cadeira multifuncional com tudo que o cuidador precisa — elevação manual, cinto duplo e almofada removível.",
    specs: ["Multifuncional", "3 em 1", "120kg"],
    image: med3040AmareloImages[0],
    images: med3040AmareloImages,
    vendemosHighlight: true,
    dimensions: [
      ["Largura", "65 cm"],
      ["Altura", "79 – 99 cm"],
      ["Profundidade", "60 cm"],
    ],
    characteristics: [
      ["Capacidade", "120 kg"],
      ["Peso líquido", "23,65 kg"],
      ["Acabamento", "—"],
      ["Função articulada", "—"],
    ],
    colors: [
      {
        id: "amarelo",
        label: "Amarelo",
        swatch: "#e9c441",
        images: med3040AmareloImages,
        imageStyles: [
          { objectFit: "cover", objectPosition: "center" },
        ],
      },
      { id: "azul", label: "Azul", swatch: "#1e4f99", images: [] },
    ],
  },

  // Cadeiras de transporte (1)
  {
    code: "MED 4010",
    cat: "cadeiras-de-transporte",
    name: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    specs: ["Lorem ipsum", "Dolor sit", "100kg"],
    image: "/images/med-4010-1.png",
    images: ["/images/med-4010-1.png"],
    dimensions: [
      ["Largura", "00 cm"],
      ["Altura", "00 cm"],
      ["Profundidade", "00 cm"],
    ],
    characteristics: [
      ["Capacidade", "000 kg"],
      ["Peso líquido", "00 kg"],
      ["Acabamento", "Lorem ipsum"],
      ["Função articulada", "—"],
    ],
  },

  // Muletas (2)
  {
    code: "MED 210",
    cat: "muletas",
    name: "Muleta Axilar Universal Desmontável Alumínio",
    desc: "Cada passo com mais firmeza e confiança. A MED 210 é a muleta axilar universal com ajuste preciso em 3 zonas para quem quer máximo conforto e personalização ergonômica durante a reabilitação.",
    specs: ["Axilar", "Alumínio", "65kg"],
    image: med210Images[0],
    images: med210Images,
    dimensions: [
      ["Largura", "21 cm"],
      ["Altura", "95,5 – 155,2 cm"],
      ["Profundidade", "10 cm"],
    ],
    characteristics: [
      ["Capacidade", "65 kg"],
      ["Peso líquido", "0,85 kg"],
      ["Acabamento", "—"],
      ["Função articulada", "—"],
    ],
  },
  {
    code: "MED 220",
    cat: "muletas",
    name: "Muleta Canadense Desmontável Alumínio",
    desc: "Locomoção leve, silenciosa e confortável. A MED 220 é a muleta canadense com sistema anti-ruído ideal para quem quer se mover com discrição e menos impacto nos ombros no dia a dia.",
    specs: ["Canadense", "Alumínio", "65kg"],
    image: med220Images[0],
    images: med220Images,
    dimensions: [
      ["Largura", "21 cm"],
      ["Altura", "95,5 – 155,2 cm"],
      ["Profundidade", "10 cm"],
    ],
    characteristics: [
      ["Capacidade", "65 kg"],
      ["Peso líquido", "0,492 kg"],
      ["Acabamento", "—"],
      ["Função articulada", "—"],
    ],
  },

  // Barras de apoio (1)
  {
    code: "MED 1010",
    cat: "barras",
    name: "Barra de Apoio Sanitário com Ajuste de Altura",
    desc: "Mais segurança e independência no banheiro, sem obras e sem ferramentas. A MED 1010 instala em segundos no vaso sanitário e oferece o apoio que faz toda a diferença na hora de sentar e levantar.",
    specs: ["Ajustável", "Alumínio", "1kg"],
    awaitingPhotos: true,
    dimensions: [
      ["Largura", "46,5 cm"],
      ["Altura", "65,3 – 75,5 cm"],
      ["Profundidade", "54,8 – 65 cm"],
    ],
    characteristics: [
      ["Capacidade", "1 kg"],
      ["Peso líquido", "0,492 kg"],
      ["Acabamento", "Alumínio"],
      ["Função articulada", "—"],
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    tag: "Mercado",
    title: "Por que a demanda por produtos de reabilitação cresce 12% ao ano no Brasil",
    excerpt: "Envelhecimento populacional e home care impulsionam o setor. Entenda a oportunidade.",
    date: "18 Abr 2026",
    read: "6 min",
    gradient: ["#4FB0D4", "#0F3A7A"],
  },
  {
    tag: "Para revendedores",
    title: "Como montar um mix de produtos de reabilitação em sua loja",
    excerpt: "Guia prático para farmácias e ortopedias que querem entrar no segmento.",
    date: "04 Abr 2026",
    read: "8 min",
    gradient: ["#F08A2B", "#d9741a"],
  },
  {
    tag: "Produto",
    title: "Andador ou muleta? Como orientar o cliente na escolha certa",
    excerpt: "Critérios técnicos que seu vendedor precisa saber para indicar o equipamento adequado.",
    date: "22 Mar 2026",
    read: "5 min",
    gradient: ["#0F3A7A", "#4FB0D4"],
  },
];

export const VALUES: Value[] = [
  {
    num: "01",
    title: "Segurança em primeiro lugar",
    desc: "Todos os produtos seguem normas técnicas e passam por rigoroso controle de qualidade.",
  },
  {
    num: "02",
    title: "Profissionalismo",
    desc: "Atendimento B2B especializado, com foco em relacionamento de longo prazo.",
  },
  {
    num: "03",
    title: "Qualidade e inovação",
    desc: "Desenvolvimento constante de produtos com materiais e designs atualizados.",
  },
  {
    num: "04",
    title: "Valorização da autonomia",
    desc: "Acreditamos que cada pessoa merece independência para viver com dignidade.",
  },
  {
    num: "05",
    title: "Confiança e transparência",
    desc: "Preços claros, prazos cumpridos e comunicação direta em todas as etapas.",
  },
  {
    num: "06",
    title: "Excelência no atendimento",
    desc: "Resposta em até 24h úteis e suporte técnico dedicado ao revendedor.",
  },
];

export function productSlug(code: string): string {
  return code.toLowerCase().replace(/\s+/g, "-");
}

export function findProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => productSlug(p.code) === slug);
}

export function findCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function findSubcategoryBySlug(
  categorySlug: string,
  subSlug: string,
): Subcategory | undefined {
  return SUBCATEGORIES.find(
    (s) => s.parentCategory === categorySlug && s.slug === subSlug,
  );
}

export function getSubcategoriesForCategory(category: Category): Subcategory[] {
  return SUBCATEGORIES.filter((s) => s.parentCategory === category.slug);
}

export function productsInCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.cat === category.id);
}

export function productsInSubcategory(
  category: Category,
  subcategory: Subcategory,
): Product[] {
  return PRODUCTS.filter(
    (p) => p.cat === category.id && p.subcategory === subcategory.id,
  );
}

export function productCapacity(p: Product): string | null {
  const kgSpec = p.specs.find((s) => /\d+\s*kg/i.test(s));
  if (kgSpec) return kgSpec;
  const m = `${p.name} ${p.desc}`.match(/(\d+)\s*kg/i);
  return m ? `${m[1]}kg` : null;
}
