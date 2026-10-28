
"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#092748]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 -rotate-6 items-center justify-center rounded-xl bg-[#00c995] text-2xl font-black text-white shadow-md">
              ✓
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Bilhete<span className="text-[#00b98a]">Já</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#vantagens" className="hover:text-[#00b98a]">
              Vantagens
            </a>
            <a href="#como-funciona" className="hover:text-[#00b98a]">
              Como funciona
            </a>
            <a href="#contacto" className="hover:text-[#00b98a]">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-full bg-[#092748] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123d65]"
          >
            Começar agora
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b8f0df] bg-[#e4fff5] px-4 py-2 text-sm font-semibold text-[#087c60]">
              <span className="h-2 w-2 rounded-full bg-[#00c995]" />
              A nova forma de gerir eventos
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              O teu evento.
              <br />
              Os teus bilhetes.
              <br />
              <span className="text-[#00b98a]">Tudo simples.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Cria eventos, gere inscrições e organiza bilhetes digitais
              numa única plataforma. Menos complicações, mais participantes.
            </p>

            <p className="mt-4 font-bold text-[#092748]">
              Inscreve. Paga. Participa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-xl bg-[#00c995] px-7 py-4 font-bold text-[#062c2a] shadow-lg shadow-emerald-100 transition hover:-translate-y-1 hover:bg-[#00b98a]"
              >
                Quero organizar um evento →
              </a>
              <a
                href="#vantagens"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold transition hover:border-[#00c995]"
              >
                Conhecer a plataforma
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>✓ Gestão organizada</span>
              <span>✓ Bilhetes digitais</span>
              <span>✓ Acesso simples</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-8 h-40 w-40 rounded-full bg-[#b8f5e3] blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Painel do organizador</p>
                  <h2 className="mt-1 text-xl font-extrabold">Visão geral</h2>
                </div>
                <div className="rounded-xl bg-[#e4fff5] p-3 text-2xl">▦</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f5f8fc] p-5">
                  <p className="text-sm text-slate-500">Eventos</p>
                  <p className="mt-3 text-3xl font-black">--</p>
                  <p className="mt-1 text-xs text-slate-400">Os teus eventos</p>
                </div>
                <div className="rounded-2xl bg-[#e4fff5] p-5">
                  <p className="text-sm text-slate-600">Inscrições</p>
                  <p className="mt-3 text-3xl font-black text-[#087c60]">--</p>
                  <p className="mt-1 text-xs text-slate-500">Os teus participantes</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#092748] text-2xl text-white">
                    ♧
                  </div>
                  <div>
                    <p className="font-bold">O teu próximo evento</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Organiza tudo num só lugar
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl bg-[#f5f8fc] p-4">
                  <span className="text-sm text-slate-600">Bilhete digital</span>
                  <span className="rounded-lg bg-[#00c995] px-3 py-2 text-xs font-extrabold text-[#062c2a]">
                    ✓ Confirmado
                  </span>
                </div>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                Pré-visualização ilustrativa da plataforma
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vantagens" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-[#00a77c]">
              Tudo num só lugar
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Organizar eventos pode ser simples.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Ferramentas pensadas para facilitar o trabalho de quem organiza
              e a experiência de quem participa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "✦",
                title: "Gestão de eventos",
                description:
                  "Centraliza as informações e mantém os teus eventos organizados.",
              },
              {
                icon: "▤",
                title: "Bilhetes digitais",
                description:
                  "Prepara bilhetes digitais para facilitar a identificação dos participantes.",
              },
              {
                icon: "✓",
                title: "Inscrições organizadas",
                description:
                  "Acompanha os registos e consulta as informações dos participantes.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4fff5] text-2xl font-black text-[#009b73]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-[#092748] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#69f0c7]">
              Três passos
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Do planeamento à participação.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Cria o evento", "Define o nome, a data e os detalhes."],
              ["02", "Gere as inscrições", "Organiza os registos dos participantes."],
              ["03", "Recebe os participantes", "Utiliza os bilhetes digitais para facilitar o acesso."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-white/15 p-7">
                <span className="text-4xl font-black text-[#69f0c7]">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Vamos organizar o teu próximo evento?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            O BilheteJá está a dar os primeiros passos. Deixa o teu contacto
            para podermos preparar a próxima etapa.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "Esta é uma demonstração. O formulário ainda não envia dados para um servidor."
              );
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="O teu endereço de e-mail"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#00c995] focus:ring-2 focus:ring-[#00c995]/20"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#00c995] px-7 py-4 font-bold text-[#062c2a] transition hover:bg-[#00b98a]"
            >
              Tenho interesse
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400">
            Formulário demonstrativo — ainda não guarda nem envia os teus dados.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} BilheteJá. Todos os direitos reservados.
          </p>
          <p>Inscreve. Paga. Participa.</p>
        </div>
      </footer>
    </main>
  );
}
  


