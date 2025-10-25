export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-neutral-200 font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-200 font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-200 font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-200 font-semibold mb-3">Newsletter</h4>
            <p className="text-neutral-400 mb-3">Get first access to drops and exclusive offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
              />
              <button type="submit" className="px-4 py-2 rounded-md bg-white text-black font-semibold">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} VX Street. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
