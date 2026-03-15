export default function CTAPage() {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
        <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Request a free consultation today and let's discuss how we can help your business grow digitally.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Request a Free Consultation
          </a>
          <a
            href="#pricing"
            className="bg-indigo-500 text-white border border-indigo-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-400 transition-all"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
