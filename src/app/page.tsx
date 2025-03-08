import Carousel from "./components/Carrousel";
import ContadorIdade from "./components/Contador";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-center">
      <iframe className="rouded-[12px] mb-20" src="https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu?utm_source=generator&theme=0" width="85%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div className="w-[350px] mb-12">
        <Carousel />
      </div>
      <div>
        <p className="text-xl text-white font-bold">❤️ A mulher mais linda que eu conheço nasceu há: </p>
        <ContadorIdade />
      </div>
      <hr className="w-[95%] my-6"/>
      <div className="w-[90%] text-center">
        <p>Eu queria primeiramente te parabenizar pelo dia e te dizer que a cada passa, meu coração se enche mais de carinho, admiração e amor por você. Você é a razão pela qual eu tento ser melhor a cada dia. E é por vc que eu vou lutar até o último dia da minha vida. Queria dizer mais uma vez que sou muito grato por Deus ter colocado você em minha vida e por ter cruzado nossos caminhos. Você é a razão dos meus sorrisos mais sinceros e tudo ao seu lado se torna especial e significativo. Eu te amo meu amor ❤️</p>
      </div>
    </div>
  );
}
