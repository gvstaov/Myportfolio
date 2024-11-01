import profilePic from "../assets/GustavoProfile.webp";
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Gustavo Profile"
              className="border border-stone-900 rounded-3x1"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
