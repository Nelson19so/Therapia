export default function ResourceLibrary() {

  return (
    <section className="relative  flex flex-col h-full pb-20 ">
      <section className="h-[50%] gap-20 flex justify-center pt-10 pb-10" >
        {/* text page */}
        <div className=" max-w-2xl px-4 gap-10 pt-10 pb-16 flex justify-center ">
          <div className="flex flex-col  justify-center items-center  gap-10">
            <h2 className="text-5xl w-[100%] font-bold text-left">
              Enhance Your Mental<br />
              <span className="text-[var(--primary)]" > Wellness Journey </span>
            </h2>
            <p className="text-1xl tracking-tight text-gray-900">
              Explore Therapia’s Resource Library, a carefully curated collection that<br />
              empowers you with essential articles, guides, and tools organized for seamless<br />
              navigation.
            </p>
            <div className="flex w-[100%] justify-start" >
              <button className="text-[10px]/[18px] bg-[var(--secondary)] text-[var(--text-light)] font-medium w-[168px] h-[32px] flex items-center justify-center rounded-[4px]">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
        {/* image page */}
        <div className="">
          <img src="/images/therapy session metting.png" alt="" />
        </div>
      </section>
      <section className="h-[500px] pt-10 pb-10 ">
        <div className="mx-auto flex justify-center gap-10 flex-col ">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl mr-auto ml-auto font-bold tracking-tight text-gray-900">Discover Therapia’s Resource Library</h2>
            <h3 className="text-2xl mr-auto ml-auto  tracking-tight text-gray-900">Empower your mental wellness journey with expertly curated resources</h3>
          </div>

          <div className="mt-6 grid mr-[5%] ml-[5%] gap-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">1</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Explore Tailored <br /> Resources</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Navigate a diverse collection of mental<br /> health materials carefully selected to<br /> meet your needs.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">2</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Utilize Advanced <br /> Search</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Quickly find articles and guides that <br /> resonate with your unique journey using<br /> our intuitive search function.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">3</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Tailor Your <br /> Exploration</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Use our filter sidebar to refine your<br /> search based on specific interests,<br /> making discovery effortless.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">4</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Save Your Favorites</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Easily save and retrieve essential<br /> resources that make a significant<br /> impact on your well-being.</div>
            </div>
          </div>
        </div>
      </section >
      <section className="h-[50%] flex justify-center gap-20 pt-10 pb-10" >
        <div className="">
          <img src="/images/woman walking out of therapy room happy.png" alt="" />
        </div>
        <div className=" max-w-2xl px-4 pt-10 pb-16 flex  justify-center ">
          <div className="flex flex-col justify-center gap-5 items-center ">
            <h2 className="text-5xl w-[100%] font-bold">
              Transform Your Mental
              <span className="text-[var(--primary)]" > Wellness Journey </span>
            </h2>
            <p className="text-1xl tracking-tight text-gray-900">
              Therapia’s Resource Library offers you a thoughtfully curated collection designed to support your mental health needs.
              <ul className="list-disc ml-10" >
                <li>
                  Easily navigate through articles, guides, and practical materials with our<br />
                  intuitive search functionality
                </li>
                <li>
                  Access clear and organized content cards that highlight essential <br />resources tailored for you
                </li>
                <li>
                  Refine your exploration using our advanced filter sidebar for a personalized<br /> experience
                </li>
                <li>
                  Save your preferred resources for quick access, enabling seamless<br /> revisiting of impactful content
                </li>
              </ul>
            </p>
            <div className="flex w-[100%] justify-start" >
              <button className="text-[10px]/[18px] bg-[var(--secondary)] text-[var(--text-light)] font-medium w-[168px] h-[32px] flex items-center justify-center rounded-[4px]">
                Start Exploring Today!
              </button>
            </div>
            <div className="grid grid-rows-1 gap-5 mt-10 grid-cols-[10%_90%]" >
              <div className="rounded-full">
                <img src="/images/profile of therapist.png" className="rounded-full h-[100%] w-auto" alt="" />
              </div>
              <div className="text-1xl tracking-tight text-gray-900">
                “Therapia's Resource Library changed the way I approach mental wellness. I found resources that truly resonate with my journey!”
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="h-[50%] flex gap-20 justify-center pt-10 pb-10" >
        <div className=" max-w-3xl px-4  flex justify-center ">
          <div className="flex flex-col h-[100%] justify-center items-center  gap-5">
            <h2 className="text-5xl w-[100%] font-bold">
              Transform Your<br />
              <span className="text-[var(--primary)]">Mental Health Journey with </span><br />
              <span className="text-[var(--primary)]">Therapia’s Resource Library</span>
            </h2>
            <p className="text-xl tracking-tight text-gray-900">
              Experience a thoughtfully organized hub designed to provide essential tools<br /> and insights for your mental wellness. Navigate through a rich collection of <br />curated articles, guides, and resources
              <ul className="list-disc ml-10" >
                <li>
                  Utilize intuitive topic tags for quick access to relevant resources
                </li>
                <li>
                  Personalize your resource discovery through our comprehensive filter<br />sidebar
                </li>
                <li>
                  Save your favorite materials for easy access later
                </li>
              </ul>
            </p>
            <div className="flex w-[100%] justify-start" >
              <button className="text-[10px]/[18px] bg-[var(--secondary)] text-[var(--text-light)] font-medium w-[168px] h-[32px] flex items-center justify-center rounded-[4px]">
                Dive Into the Resource Library!
              </button>
            </div>
            <div className="grid grid-rows-1 gap-5 mt-10 grid-cols-[10%_90%]" >
              <div className="rounded-full">
                <img src="/images/transformation therapist profile.png" className="rounded-full" alt="" />
              </div>
              <div className="text-1xl tracking-tight text-gray-900">
                “Therapia's Resource Library has been invaluable; the accessible resources have truly enhanced my journey towards better mental health!”
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl">
          <img src="/images/helping client brain.png" className="h-[100%] rounded-xl" alt="" />
        </div>
      </section>
      <section className="h-[650px] relative flex justify-center pt-10 pb-10 ">
        <div className="w-[100%] h-[300px] rounded-[20px]  gap-5  mr-[20%] ml-[20%]  bg-[var(--primary)] flex justify-center items-center flex-col" >
          <div className="text-5xl ml-auto mr-auto text-center font-bold" >Elevate Your Mental Wellness<br /> with Therapia’s Resource<br /> Library</div>
          <div className="text-xl  mr-auto ml-auto tracking-tight text-gray-900" >Explore invaluable resources tailored for your journey, organized in a soothing grid layout that ensures you find the support you need at your fingertips.</div>


          <div className="absolute bottom-[5%] z-[10]  mt-6 grid mr-auto ml-auto gap-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="flex flex-col  h-[1fr] bg-[var(--background-base)] justify-center  shadow-2xl px-[20px] py-[15px] gap-5 rounded-[20px] flex-col   items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center w-17 rounded-full p-5 text-2xl p-auto  font-bold">1</div>
              <div className="text-3xl text-center mr-auto  ml-auto font-bold">Navigate  <br /> Seamlessly</div>
              <div className="text-1xl text-center mr-auto  ml-auto ">Utilize our powerful search functionality <br />and intuitive topic tags to quickly locate<br /> resources that align with your mental<br /> health interests.</div>
            </div>
            <div className="flex  flex-col  h-[1fr] bg-[var(--background-base)] justify-center  shadow-2xl px-[20px] py-[15px] gap-5 rounded-[20px] flex-col   items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center w-17 rounded-full p-5 text-2xl p-auto  font-bold">2</div>
              <div className="text-3xl text-center mr-auto  ml-auto font-bold">Refine Your  <br /> Exploration</div>
              <div className="text-1xl text-center mr-auto  ml-auto ">
                Dive deeper into topics that resonate<br /> with your experiences using our<br /> sophisticated filter sidebar, making your<br /> resource exploration more relevant and<br /> meaningful.
              </div>
            </div>
            <div className="flex flex-col  h-[1fr] bg-[var(--background-base)] justify-center  shadow-2xl px-[20px] py-[15px] gap-5 rounded-[20px] flex-col   items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center w-17 rounded-full p-5 text-2xl p-auto  font-bold">3</div>
              <div className="text-3xl text-center mr-auto  ml-auto font-bold">Stay  <br /> Inspired</div>
              <div className="text-1xl text-center mr-auto  ml-auto ">
                Access a suggested content section<br /> that continuously introduces fresh <br />perspectives and resources to enhance<br /> your understanding of mental wellness.
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="h-[500px] pt-10 pb-10 ">
        <div className="mx-auto flex  justify-center gap-10 flex-col ">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl mr-auto ml-auto font-bold tracking-tight text-gray-900">Discover Therapia’s Resource Library</h2>
            <h3 className="text-2xl mr-auto ml-auto  mt-10 tracking-tight text-gray-900">Empower your mental wellness journey with expertly curated resources</h3>
          </div>

          <div className="mt-6 grid mr-[5%] ml-[5%] gap-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">1</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Explore Tailored <br /> Resources</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Navigate a diverse collection of mental<br /> health materials carefully selected to<br /> meet your needs.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">2</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Utilize Advanced <br /> Search</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Quickly find articles and guides that <br /> resonate with your unique journey using<br /> our intuitive search function.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">3</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Tailor Your <br /> Exploration</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Use our filter sidebar to refine your<br /> search based on specific interests,<br /> making discovery effortless.</div>
            </div>
            <div className="flex justify-center shadow-2xl gap-5 rounded-2xl flex-col  h-90 items-center">
              <div className="bg-[var(--primary)] flex justify-center items-center  w-17 rounded-full p-5 text-2xl p-auto  font-bold">4</div>
              <div className="text-2xl text-center mr-auto pl-20 pr-20 ml-auto font-bold">Save Your Favorites</div>
              <div className="text-xl text-center mr-auto pl-20 pr-20 ml-auto ">Easily save and retrieve essential<br /> resources that make a significant<br /> impact on your well-being.</div>
            </div>
          </div>
        </div>
      </section >
    </section >
  )
}