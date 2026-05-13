import { Button } from "./Button";
import { Icon } from "./Icon";

export function BigCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="big-cta">
          <div className="content">
            <h2>Amplie o catálogo da sua loja com a Med Live.</h2>
            <p className="sub">
              Cadastre sua loja e receba acesso ao catálogo
              <br className="br-desktop" /> completo e atualizado.
            </p>
            <div className="actions">
              <Button variant="accent" size="lg" href="/seja-revendedor">
                Quero ser revendedor
              </Button>
              <Button variant="ghost-light" size="lg" href="/produtos">
                Ver catálogo completo
              </Button>
            </div>
          </div>
          <div className="side">
            <div className="catalog-card">
              <h3>Catálogo Med Live 2026</h3>
              <a href="#" className="pdf" data-catalog-gate>
                <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Icon.download /> Baixar PDF
                </span>
                <span className="sz">8.4 MB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
