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
            <Logo light size={128} />
            <p>
              Importadora e distribuidora B2B de produtos de mobilidade e reabilitação.
              CD em São Paulo com entrega para todo o Brasil.
            </p>
            <div className="socials">
              <a
                href="https://www.instagram.com/medlivewell?igsh=MWM3a3J2OG1zZ2RsMg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Med Live Well"
              >
                <Icon.instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/medicinal-live-well/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Med Live Well"
              >
                <Icon.linkedin />
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
          <div>© 2026 Med Live Well. CNPJ 48.596.938/0001-42</div>
          <div>Política de privacidade · Termos de uso</div>
        </div>
      </div>
    </footer>
  );
}
