
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-blue-600">
            Lebiva
          </a>

          <nav className={`hidden md:flex space-x-8`}>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b`}>
        <nav className="px-4 py-2 space-y-2">
          <a href="#services" className="block text-gray-600 hover:text-blue-600 py-2">
            Services
          </a>
          <a href="#solutions" className="block text-gray-600 hover:text-blue-600 py-2">
            Solutions
          </a>
          <a href="#contact" className="block text-gray-600 hover:text-blue-600 py-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
