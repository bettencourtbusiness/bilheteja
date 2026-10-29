
"use client";

import { useState } from "react";

const vantagens = [
  {
    numero: "01",
    icon: "🎟️",
    titulo: "Bilhetes digitais",
    descricao:
      "Cria uma experiência de inscrição simples, com bilhetes digitais preparados para os teus eventos.",
  },
  {
    numero: "02",
    icon: "📊",
    titulo: "Gestão de eventos",
    descricao:
      "Organiza os teus eventos e acompanha as informações importantes num só lugar.",
  },
  {
    numero: "03",
    icon: "⚡",
    titulo: "Inscrições simples",
    descricao:
      "Facilita o processo de inscrição e torna a experiência dos participantes mais prática.",
  },
];

const passos = [
  {
    numero: "01",
    titulo: "Descobre o evento",
    descricao:
      "Encontra um evento interessante e consulta as informações antes de te inscreveres.",
  },
  {
    numero: "02",
    titulo: "Faz a inscrição",
    descricao:
      "Preenche os teus dados e segue as instruções de inscrição disponibilizadas pelo organizador.",
  },
  {
    numero: "03",
    titulo: "Participa",
    descricao:
      "Prepara-te para o evento e acompanha as informações relacionadas com a tua participação.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function tratarSubmissao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMensagem("Por favor, introduz o teu endereço de email.");
      return;
    }

    setMensagem(
      "Esta funcionalidade ainda está em preparação. O teu email não foi enviado nem guardado."
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navegação */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="#inicio"
            aria-label="BilheteJá - página inicial"
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-xl font-black text-white">
              B
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Bilhete<span className="text-blue-700">Já</span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex"
          >
            <a className="transition hover:text-blue-700" href="#inicio">
              Início
            </a>
            <a className="transition hover:text-blue-700" href="#vantagens">
              Vantagens
            </a>
            <a className="transition hover:text-blue-700" href="#funciona">
              Como funciona
            </a>
            <a className="transition hover:text-blue-700" href="#contacto">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 sm:px-5"
          >
            Saber mais
          </a>
        </div>
      </header>

      {/* Apresentação principal */}
      <section
        id="inicio"
        className="relative scroll-mt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Uma nova forma de viver eventos
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              O teu evento.
              <br />
              Os teus bilhetes.
              <br />
              <span className="text-blue-700">Tudo simples.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              O BilheteJá nasce para aproximar pessoas e eventos,
              simplificando a experiência de quem organiza e de quem participa.
            </p>

            <p className="mt-4 font-bold text-slate-800">
              Inscreve. Paga. Participa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#funciona"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Descobrir a plataforma
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#vantagens"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Conhecer vantagens
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span>✓ Experiência simples</span>
              <span>✓ Organização prática</span>
              <span>✓ Acesso digital</span>
            </div>
          </div>

          {/* Ilustração do painel */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-12 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -right-5 bottom-8 h-40 w-40 rounded-full bg-cyan-200/70 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-900/10 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Bem-vindo ao</p>
                  <p className="text-xl font-extrabold">
                    Bilhete<span className="text-blue-700">Já</span>
                  </p>
                </div>
                <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
                  Painel ilustrativo
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white">
                <p className="text-sm font-medium text-blue-100">
                  A tua próxima experiência
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  Começa aqui.
                </h2>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Descobre novas oportunidades para participar e organizar
                  eventos.
                </p>
                <div className="mt-5 inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-bold">
                  Inscreve. Paga. Participa.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-2xl">🎫</span>
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    Bilhetes digitais
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Uma experiência prática
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-2xl">📅</span>
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    Eventos organizados
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Informação num só lugar
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500">
                Pré-visualização demonstrativa da plataforma
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
              Porquê BilheteJá?
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Eventos mais simples para todos
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Uma experiência pensada para ajudar organizadores e participantes
              a gerir melhor cada etapa de um evento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {vantagens.map((vantagem) => (
              <article
                key={vantagem.numero}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    {vantagem.icon}
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    {vantagem.numero}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold">
                  {vantagem.titulo}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {vantagem.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section
        id="funciona"
        className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
              Como funciona
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Três passos para começar
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              O objetivo é tornar a jornada do participante mais clara, do
              primeiro contacto até ao dia do evento.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {passos.map((passo) => (
              <article key={passo.numero} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-lg font-black text-white shadow-lg shadow-blue-700/20">
                  {passo.numero}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">
                  {passo.titulo}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {passo.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blue-800 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            O próximo evento começa contigo
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            Vamos tornar cada evento numa experiência melhor?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Acompanha o desenvolvimento do BilheteJá e descobre as
            funcionalidades que estamos a preparar.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Quero saber mais
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="scroll-mt-24 border-t border-slate-200 bg-white py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Fica a par das novidades
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Estamos a preparar a plataforma. Deixa o teu email para
              demonstrares interesse nas próximas novidades do BilheteJá.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Nota: o formulário ainda é demonstrativo. Não envia nem guarda
              endereços de email.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <form onSubmit={tratarSubmissao} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  O teu endereço de email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMensagem("");
                  }}
                  placeholder="exemplo@email.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Demonstrar interesse
              </button>

              {mensagem && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900"
                >
                  {mensagem}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-slate-200 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center text-sm text-slate-500 sm:px-8 md:flex-row md:text-left">
          <p>© 2026 BilheteJá. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            className="font-semibold transition hover:text-blue-700"
          >
            Inscreve. Paga. Participa. ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
