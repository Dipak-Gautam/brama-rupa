const HeroSection = () => {
  return (
    <div className="m-3 md:m-7">
      <div className="bg-[url('./FoodHeroImage.jpeg')] md:h-[700px] bg-cover  rounded-lg  bg-no-repeat flex items-center py-16 md:py-10 p-10">
        <div className="text-glow">
          <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-white ">
            <p className="m-0 p-0">Order your</p>
            <p className="m-0 p-0">favorite Food here</p>
          </div>
          <div className="md:w-[60%] text-xs md:text-xl font-medium text-white mt-5">
            "Discover fresh, delicious meals and ingredients delivered right to
            your door. From farm-fresh produce to ready-to-eat favorites, we
            make shopping for food easy, fast, and affordable. Enjoy the taste
            of quality with every bite!"
          </div>
          <div className="mt-5 text-black font-medium rounded-md text-sm md:text-xl p-2 px-3 bg-white w-fit">
            Enjoy 50% discount on first order
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
