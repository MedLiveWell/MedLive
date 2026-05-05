import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { NAV, CATEGORIES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="col brand-col">
            <Logo light size={160} />
            <p>
              Importadora e distribuidora B2B de produtos de reabilitação. Entregamos em todo o
              Brasil para lojas, clínicas e marketplaces.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <Icon.instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon.linkedin />
              </a>
              <a href="#" aria-label="YouTube">
                <Icon.youtube />
              </a>
            </div>
          </div>
          <div className="col">
            <h5>Navegue</h5>
            {NAV.slice(0, 5).map((n) => (
              <Link key={n.id} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="col">
            <h5>Categorias</h5>
            {CATEGORIES.map((c) => (
              <Link key={c.id} href={`/produtos?cat=${c.id}`}>
                {c.label}
              </Link>
            ))}
          </div>
          <div className="col">
            <h5>Contato</h5>
            <a href="mailto:comercial@medlivewell.com.br">comercial@medlivewell.com.br</a>
            <a href="#">WhatsApp comercial</a>
            <a href="tel:+551140000000">+55 (11) 4000-0000</a>
            <span style={{ display: "block", padding: "5px 0", fontSize: 14, color: "rgba(255,255,255,.6)" }}>
              Seg–Sex, 8h–18h
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Med Live Well — Soluções em saúde. CNPJ 00.000.000/0001-00</div>
          <div>Política de privacidade · Termos de uso</div>
        </div>
      </div>
    </footer>
  );
}
