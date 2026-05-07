export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Category = {
  id: string;
  label: string;
  count: number;
  desc: string;
};

export type ProductColor = {
  id: string;
  label: string;
  /** Hex color used for the swatch dot. */
  swatch: string;
  /** Gallery images for this color. Empty means placeholder (photos pending). */
  images: string[];
  imageTransforms?: (string | undefined)[];
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
  /** Optional color variants. When present, the gallery uses the active color's images. */
  colors?: ProductColor[];
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
    label: "Andadores",
    count: 12,
    desc: "Articulados, fixos e com rodas. Para uso clínico e domiciliar.",
  },
  {
    id: "banquetas",
    label: "Banquetas de banho",
    count: 7,
    desc: "Com e sem encosto, apoio de braço e abertura frontal.",
  },
  {
    id: "cadeiras-banho",
    label: "Cadeiras de banho",
    count: 3,
    desc: "Dobráveis e desmontáveis, até 150kg, estrutura em aço.",
  },
  {
    id: "cadeiras-transf",
    label: "Cadeiras de transferência",
    count: 2,
    desc: "Modelos hidráulicos e multifuncionais para transporte seguro.",
  },
  {
    id: "muletas",
    label: "Muletas",
    count: 2,
    desc: "Axilar universal e canadense, alumínio leve desmontável.",
  },
  {
    id: "barras",
    label: "Barras de apoio",
    count: 1,
    desc: "Barra sanitária com ajuste de altura, alumínio 150kg.",
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

const med190Images = [
  "/images/med-190.png",
  "/images/med-190-02.png",
  "/images/med-190-03.png",
  "/images/med-190-04.png",
];

const med3040Images = [
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
    cat: "andadores",
    name: "Andador 2 Barras Articulado Aço",
    desc: "Recupere sua mobilidade com segurança e independência. O MED 120 é o andador articulado ideal para quem precisa de apoio confiável no dia a dia — resistente, ajustável e fácil de levar a qualquer lugar.",
    specs: ["Aço", "Articulado", "120kg"],
    image: med120Images[0],
    images: med120Images,
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
    cat: "andadores",
    name: "Andador 2 Barras Clique Duplo Alumínio Prata",
    desc: "Mais leveza sem abrir mão da resistência. O MED 130 é o andador ideal para quem quer se mover com mais liberdade e segurança — leve, desmontável e pronto para acompanhar sua rotina.",
    specs: ["Alumínio", "Clique duplo", "135kg"],
    image: med130Images[0],
    images: med130Images,
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
    cat: "andadores",
    name: "Andador com Rodas Dobrável Aço",
    desc: "Vá mais longe com mais conforto e segurança. O MED 520 é o andador completo com assento, freios e bolsa — ideal para quem quer autonomia total para caminhar, descansar e se mover com confiança.",
    specs: ["Aço", "4 rodas", "135kg"],
    image: med520PretoImages[0],
    images: med520PretoImages,
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
    cat: "banquetas",
    name: "Banqueta de banho sem encosto",
    desc: "Banqueta de banho simples, assento antiderrapante, sem encosto.",
    specs: ["Sem encosto", "Antiderrapante", "100kg"],
  },
  {
    code: "MED 320",
    cat: "banquetas",
    name: "Banqueta de banho com encosto",
    desc: "Com encosto em polietileno, maior conforto e segurança no banho.",
    specs: ["Com encosto", "Antiderrapante", "100kg"],
  },
  {
    code: "MED 330",
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
    name: "Cadeira com encosto revestido desmontável aço 100kg",
    desc: "Versão leve do MED 410, estrutura em aço com encosto revestido.",
    specs: ["Aço", "Revestido", "100kg"],
  },

  // Cadeiras de transferência (2)
  {
    code: "MED 3030",
    cat: "cadeiras-transf",
    name: "Cadeira de transferência hidráulica 135kg",
    desc: "Sistema hidráulico para transferência suave de paciente. 135kg.",
    specs: ["Hidráulica", "Multiposição", "135kg"],
  },
  {
    code: "MED 3040",
    cat: "cadeiras-transf",
    name: "Cadeira de transferência multifuncional 120kg",
    desc: "Transferências seguras entre cama, cadeira de rodas e sofá, com mínimo esforço. A MED 3040 é a cadeira multifuncional com tudo que o cuidador precisa, elevação manual, cinto duplo e almofada removível.",
    specs: ["Multifuncional", "3 em 1", "120kg"],
    image: med3040Images[0],
    images: med3040Images,
  },

  // Muletas (2)
  {
    code: "MED 210",
    cat: "muletas",
    name: "Muleta axilar universal desmontável alumínio 65kg",
    desc: "Muleta axilar em alumínio, regulagem de altura universal. Par.",
    specs: ["Axilar", "Alumínio", "65kg"],
  },
  {
    code: "MED 220",
    cat: "muletas",
    name: "Muleta canadense alumínio 65kg",
    desc: "Muleta canadense com apoio de antebraço e empunhadura ergonômica.",
    specs: ["Canadense", "Alumínio", "65kg"],
  },

  // Barras de apoio (1)
  {
    code: "MED 1010",
    cat: "barras",
    name: "Barra de apoio sanitária c/ ajuste de altura alumínio 150kg",
    desc: "Barra sanitária com altura ajustável, fixação ao piso. Até 150kg.",
    specs: ["Ajustável", "Alumínio", "150kg"],
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

export function productCapacity(p: Product): string | null {
  const kgSpec = p.specs.find((s) => /\d+\s*kg/i.test(s));
  if (kgSpec) return kgSpec;
  const m = `${p.name} ${p.desc}`.match(/(\d+)\s*kg/i);
  return m ? `${m[1]}kg` : null;
}
