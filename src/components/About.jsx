/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */
const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 fade-in">
          <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Ahmed, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          {/* mapping about items */}
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className=" md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-bold text-2xl md:text-4xl">
                    +
                  </span>
                  <p className=" text-sm text-zinc-400">{label}</p>
                </div>
              </div>
            ))}
            <img
              src="/AMlogo2.png"
              width={40}
              height={40}
              alt="Ahmed Mustafa"
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
