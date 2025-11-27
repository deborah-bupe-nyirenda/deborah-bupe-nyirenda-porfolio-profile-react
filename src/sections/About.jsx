import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";


const About = () => {

  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img 
            src="assets/profile-collage.png" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" 
          />
          <div className=" z-10">
            <p className="headtext">Hi, I'm Deborah Bupe Nyirenda</p>
            <p className="subtext">I'm a 3rd Year Software Engineering Student at the University of Zambia, and i love to create projects that are not only visually apealing but funcional. Over the past few years I've honed my graphic design, UI/UX and coding skills and my goal is design and develop projects that have meaning, are creative and impactful.</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div ref={grid2Container} className="grid-default-color grid-2">
          <div className="flex  items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-50 text-gray-500">#CodeIsCraft</p>
            <Card style={{rotate: "75deg", top: "30%", left: "20%"}} text="UI/UX" containerRef={grid2Container}/>
            <Card style={{rotate: "-30deg", top: "52%", left: "45%"}} text="Web Dev" containerRef={grid2Container}/>
            <Card style={{rotate: "90deg", bottom: "30%", left: "73%"}} text="Graphic Design" containerRef={grid2Container}/>
            <Card style={{rotate: "-45deg", top: "55%", left: "0%"}} text="CS" containerRef={grid2Container}/>
            <Card style={{rotate: "20deg", top: "10%", left: "40%"}} text="Software Engineer" containerRef={grid2Container}/>
            <Card style={{rotate: "30deg", top: "72%", left: "70%"}} image="assets/logos/javascript.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "-45deg", top: "70%", left: "25%"}} image="assets/logos/react.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "-75deg", top: "10%", left: "75%"}} image="assets/logos/tailwindcss.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "-30deg", top: "10%", left: "5%"}} image="assets/logos/html5.svg" containerRef={grid2Container}/>
            
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-default-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in Lusaka, Zambia, and I'm open to remote work worldwide</p>
          </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to build something great? Let's connect and discuss your project goals.
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">My guiding stack for full-stack development is MERN. I build on a strong foundation of HTML, CSS, and JavaScript, leveraging additional modern tools like Tailwind CSS, Vite, and SQLite</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 ">
            <Frameworks /> 
          </div>
        </div>
      </div>
    </section>
  )
}


export default About

