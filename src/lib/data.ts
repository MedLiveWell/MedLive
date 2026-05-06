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
    count: 6,
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
    code: "MED 170-C",
    cat: "andadores",
    name: "Andador 1 barra desmontável c/ rodas 150kg",
    desc: "Uma barra frontal desmontável, com rodas dianteiras. Suporta 150kg.",
    specs: ["Desmontável", "Com rodas", "150kg"],
  },
  {
    code: "MED 170-S",
    cat: "andadores",
    name: "Andador 1 barra desmontável s/ rodas 150kg",
    desc: "Uma barra frontal desmontável, sem rodas. Suporta 150kg.",
    specs: ["Desmontável", "Sem rodas", "150kg"],
  },
  {
    code: "MED 180",
    cat: "andadores",
    name: "Andador 2 barras triangular infantil dobrável c/ rodas",
    desc: "Andador infantil triangular, dobrável, com rodas para crianças.",
    specs: ["Infantil", "Triangular", "Dobrável"],
  },
  {
    code: "MED 190",
    cat: "andadores",
    name: "Andador 3 barras articulado desmontável",
    desc: "Três barras articulado e desmontável para transporte prático.",
    specs: ["Desmontável", "Articulado", "100kg"],
    image: med190Images[0],
    images: med190Images,
  },
  {
    code: "MED 520",
    cat: "andadores",
    name: "Andador c/ rodas dobrável aço 135kg",
    desc: "Andador com 4 rodas, estrutura em aço dobrável. Suporta 135kg.",
    specs: ["Aço", "4 rodas", "135kg"],
  },
  {
    code: "MED 530",
    cat: "andadores",
    name: "Andador c/ rodas dobrável alumínio 135kg",
    desc: "Versão em alumínio mais leve do MED 520, mesma capacidade.",
    specs: ["Alumínio", "4 rodas", "135kg"],
  },
  {
    code: "MED 550",
    cat: "andadores",
    name: "Andador c/ rodas e assento 135kg",
    desc: "Andador rollator com assento para descanso durante o uso.",
    specs: ["Com assento", "4 rodas", "135kg"],
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
    name: "Banqueta com encosto e apoio de braço",
    desc: "Encosto + apoios de braço laterais para maior estabilidade.",
    specs: ["Encosto", "Apoio braço", "100kg"],
  },
  {
    code: "MED 360",
    cat: "banquetas",
    name: "Banqueta encosto, apoio de braço e abertura frontal",
    desc: "Abertura frontal no assento facilita a higienização durante o banho.",
    specs: ["Abertura frontal", "Apoio braço", "100kg"],
  },
  {
    code: "MED 370",
    cat: "banquetas",
    name: "Banqueta de banho sem encosto 135kg",
    desc: "Reforçada, suporta 135kg. Ideal para usuários de maior porte.",
    specs: ["Reforçada", "Sem encosto", "135kg"],
  },
  {
    code: "MED 390",
    cat: "banquetas",
    name: "Banqueta com encosto e apoio de braço 135kg",
    desc: "Encosto e apoio de braço, capacidade reforçada de 135kg.",
    specs: ["Reforçada", "Apoio braço", "135kg"],
  },

  // Cadeiras de banho (3)
  {
    code: "MED 410",
    cat: "cadeiras-banho",
    name: "Cadeira de banho com encosto revestido desmontável aço 150kg",
    desc: "Cadeira em aço pintado, encosto revestido, desmontável. Suporta 150kg.",
    specs: ["Aço", "Desmontável", "150kg"],
  },
  {
    code: "MED 420",
    cat: "cadeiras-banho",
    name: "Cadeira de banho dobrável desmontável 100kg",
    desc: "Dobrável e desmontável para transporte fácil. Estrutura leve 100kg.",
    specs: ["Dobrável", "Desmontável", "100kg"],
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
