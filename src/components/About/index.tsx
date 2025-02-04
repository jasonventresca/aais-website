import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                 Unlock Your Potential
                 <br />
                 With Alpine AI Solutions
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {`At Alpine AI Solutions, we're driven by a deep fascination with artificial intelligence and its ability to supercharge creativity and productivity. We believe in the power of technology to solve real-world problems and make a positive impact on businesses and individuals.`}
                  <br /> <br />
                  {`Our passion is to partner with fellow entrepreneurs and business owners, understanding their unique challenges and translating them into effective AI solutions. We listen carefully, collaborate closely, and leverage our expertise to empower businesses to thrive in the age of artificial intelligence.`}
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap p-[50px] sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-full sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]`}
                  >
                    <Image
                      src="/images/description/laptop.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
