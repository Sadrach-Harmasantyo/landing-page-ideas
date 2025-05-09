const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dimsum-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-a71c-61fd-b0d6-9fc788f31a9c/raw?se=2025-05-09T16%3A04%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T12%3A13%3A07Z&ske=2025-05-10T12%3A13%3A07Z&sks=b&skv=2024-08-04&sig=pdyapMM/TCXsQ%2BDepZkIbaKo7wcUxyJnCHprgud5wo0%3D"
                  alt="dimsum-store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-2 md:-bottom-6 md:-right-6 bg-dimsum p-6 rounded-lg shadow-lg">
                <p className="text-white font-serif text-3xl">25+ Years</p>
                <p className="text-white/90 text-sm">of Culinary Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-dimsum font-serif text-lg mb-3">OUR STORY</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">
                A Tradition of Authentic Flavors
              </h3>
              <div className="space-y-4">
                <p>
                  Founded in 1998, Dim Sum Delight brings the authentic flavors
                  of Hong Kong to your neighborhood. Our master chefs, trained
                  in the traditional art of dim sum preparation, craft each
                  piece by hand daily.
                </p>
                <p>
                  We take pride in using only the freshest ingredients,
                  combining time-honored recipes with modern culinary techniques
                  to create a dim sum experience that honors tradition while
                  delighting contemporary palates.
                </p>
                <p>
                  Our restaurant offers a warm, inviting atmosphere where
                  families and friends can gather to share meals and create
                  memories, just as dim sum has brought people together for
                  centuries.
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop"
                    alt="Chef Portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Chef Ming Lee</p>
                  <p className="text-gray-600">Executive Chef & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
