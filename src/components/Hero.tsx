
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Yüksek performanslı bir vds firması.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Satın Aldığınız VDS( Virtual Dedicated Server ) %99.99 Uptime Garantisi vermelidir.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              VDS Planlarını görüntüleyin
            </Button>
            <Button size="lg" variant="outline">
              <a>https://discord.gg/yZR9QZz7Tc</a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600">Yardım</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">SSD</p>
              <p className="text-gray-600">Güç</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
