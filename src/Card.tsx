const Card = () => {
  return (
    <section className="h-[380px] w-[332px] m-auto relative">
      <div
        style={{ backgroundImage: "url(../public/images/bg-pattern-card.svg)" }}
        className="bg-no-repeat bg-cover w-full h-[148px] rounded-t-2xl"
      ></div>
      <div className="bg-slate-500 rounded-[50%] w-[110px] h-[110px] absolute left-0 right-0 m-auto top-[92px] overflow-hidden border-white border-[6px]">
        <img
          className="w-full "
          src="https://github.com/germanp007/frontendmentor-challenge9/blob/main/public/images/image-victor.jpg"
          alt="victor"
        />
      </div>
      <div className="bg-white h-[240px] w-full rounded-b-2xl ">
        <div className="h-[150px] grid place-content-center border-slate-200 border-b-[1px]">
          <h1 className="font-[700] text-Very-dark-desaturated-blue text-[18px]  mt-7">
            Victor Crest{" "}
            <span className="font-[400] text-Dark-grayish-blue ml-[4px]">
              26
            </span>
          </h1>

          <p className="text-center text-[14px] text-Dark-gray font-[400] mt-2">
            London
          </p>
        </div>
        <div className="h-[90px] flex justify-evenly items-center text-center">
          <div>
            <h1 className="font-[700] text-Very-dark-desaturated-blue text-[18px]">
              80K
            </h1>
            <p className="text-center text-[12px] text-Dark-gray font-[400] tracking-widest">
              Followers
            </p>{" "}
          </div>
          <div>
            <h1 className="font-[700] text-Very-dark-desaturated-blue text-[18px]">
              803K
            </h1>
            <p className="text-center text-[12px] text-Dark-gray font-[400] tracking-widest">
              Likes
            </p>{" "}
          </div>
          <div>
            <h1 className="font-[700] text-Very-dark-desaturated-blue text-[18px]">
              1.4K
            </h1>
            <p className="text-center text-[12px] text-Dark-gray font-[400] tracking-widest">
              Photos
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
