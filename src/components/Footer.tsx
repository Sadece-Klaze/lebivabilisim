
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lebiva Bilişim</h3>
            <p className="text-gray-400">
              VDS'ler için en iyi vds firması!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Servisler (Paketler)
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white">
                  Bakım
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bize Ulaşın!</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Lebiva Bilişim. Tüm gizlilik hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
