export default function OurClients() {
  return (
    <>
      <div className="bg-footer_bg bg-cover bg-center p-8 my-10">
        <h2 className="font-playfair font-bold text-4xl text-center text-white pt-10">
          Some of our clients
        </h2>
        <div className="grid grid-cols-6 lg:grid-cols-5 justify-center items-center gap-6 lg:gap-3 py-10 lg:py-3 lg:px-14">
          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/cradlepoint.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/forescout.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/checkpoint.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/trendmicro.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/cynet.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
