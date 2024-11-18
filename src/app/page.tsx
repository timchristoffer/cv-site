import CodeSlider from "@/components/CodeSlider/CodeSlider";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
// import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
          <Header />
          <CodeSlider />
          <About />
          <Experience />
          <Skills />
          {/* <Portfolio /> */}
      </div>
    </>
  );
}