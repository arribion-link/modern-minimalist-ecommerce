const Brands = () => {
  // You can move this to a separate data file later
  const brandItems = [
    {
      id: 1,
      title: "Urban Edge",
      description: "Streetwear redefined with bold cuts and modern minimalism",
      image: "../assets/img1.jpg",
      span: "md:col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Timeless Threads",
      description: "Classic silhouettes meets sustainable craftsmanship",
      image: "../assets/img2.jpg",
      span: "",
    },
    {
      id: 3,
      title: "Neo Luxe",
      description: "Elevated essentials for the contemporary wardrobe",
      image: "../assets/img3.jpg",
      span: "",
    },
  ];

  return (
    <section className="mx-4 min-h-screen my-16 md:my-24">
      <div className="max-w-7xl mx-auto">
        <hr className="border-slate-300" />

        <div className="py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Featured Collections
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the brands defining today's fashion narrative
          </p>
        </div>

        <hr className="border-slate-300 mb-10 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {brandItems.map((item) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-xl 
                bg-slate-900 min-h-[40vh] md:min-h-[50vh] 
                ${item.span}
                transition-all duration-500 ease-out
                hover:shadow-2xl
              `}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
           
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-2">
                  {item.title}
                </h3>

                <p
                  className="
                    text-base md:text-lg text-gray-200 
                    opacity-0 translate-y-4 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500 ease-out
                  ">
                  {item.description}
                </p>
             
                <div
                  className="
                    mt-4 opacity-0 translate-y-6 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-700 delay-100
                  ">
                  <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
