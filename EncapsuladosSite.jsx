
import React from "react";

export default function EncapsuladosSite() {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-green-600">NatureCaps</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#produtos" className="hover:text-green-600">Produtos</a>
          <a href="#depoimentos" className="hover:text-green-600">Depoimentos</a>
          <a href="#garantia" className="hover:text-green-600">Garantia</a>
          <a href="#contato" className="hover:text-green-600">Contato</a>
        </nav>
        <a href="#produtos" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl text-sm">Quero minha saúde natural agora</a>
      </header>

      <section className="text-center py-16 bg-green-50 px-4">
        <h2 className="text-4xl font-bold mb-4">Recupere sua saúde com o poder da natureza</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">Cápsulas 100% naturais, aprovadas pela Anvisa, que mudam sua energia, emagrecem e equilibram seu corpo.</p>
        <a href="#produtos" className="bg-green-600 hover:bg-green-700 text-white text-lg py-2 px-6 rounded-xl inline-block">Garanta sua oferta exclusiva de hoje</a>
      </section>

      <section className="bg-white py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Você já sentiu que seu corpo está pedindo socorro?</h3>
        <p className="text-lg max-w-3xl mx-auto">
          Cansaço sem explicação? Inchaço? Dificuldade para emagrecer?
          A culpa pode estar no <strong>desequilíbrio interno</strong>.
          Nossos encapsulados combinam ingredientes milenares com tecnologia atual. Em poucos dias, você sente mais energia, foco e leveza.
        </p>
        <p className="mt-6 font-semibold text-green-700">Você só paga se sentir a diferença. Simples assim.</p>
      </section>

      <section id="produtos" className="py-16 bg-green-50 px-4">
        <h4 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Detox Turbo",
              desc: "Reduz inchaço, melhora intestino, dá energia.",
              label: "Compre com 50% OFF"
            },
            {
              title: "Emagrecedor Natural",
              desc: "Controla apetite, acelera metabolismo, regula hormônios.",
              label: "Quero emagrecer com saúde"
            },
            {
              title: "Sono Zen",
              desc: "Sono profundo, relaxamento e redução da ansiedade.",
              label: "Dormir bem hoje"
            }
          ].map((produto, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h5 className="text-xl font-bold text-green-700 mb-2">{produto.title}</h5>
              <p className="mb-4">{produto.desc}</p>
              <a href="#contato" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl inline-block">{produto.label}</a>
            </div>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="py-16 px-4 text-center">
        <h4 className="text-3xl font-bold mb-8">Depoimentos Reais</h4>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <blockquote className="bg-green-100 p-6 rounded-xl shadow">
            <p>"Em 15 dias já me sentia outra pessoa."</p>
            <footer className="mt-2 font-semibold">Juliana, 36 anos</footer>
          </blockquote>
          <blockquote className="bg-green-100 p-6 rounded-xl shadow">
            <p>"Meu intestino funcionou de novo e parei de inchar!"</p>
            <footer className="mt-2 font-semibold">Carlos, 42 anos</footer>
          </blockquote>
        </div>
      </section>

      <section id="garantia" className="bg-white py-12 px-6 text-center">
        <h4 className="text-2xl font-bold mb-4">Garantia Incondicional</h4>
        <p className="text-lg max-w-2xl mx-auto">Satisfação Garantida ou seu dinheiro de volta em 30 dias. Pagamento seguro e envio rápido para todo o Brasil.</p>
      </section>

      <footer id="contato" className="bg-green-600 text-white py-6 text-center">
        <p>© 2025 NatureCaps. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="underline">Política de Privacidade</a>
          <a href="#" className="underline">Termos de Uso</a>
          <a href="https://wa.me/5571986406051" target="_blank" className="underline">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
