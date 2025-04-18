import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, Shield, Wifi, Server, Cloud, Database, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const vdsPlans = [
  {
    title: "Eko Paket-1",
    specs: {
      cpu: "2 CPU",
      ram: "2 GB RAM",
      storage: "25 GB DİSK",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "70",
    icon: Cpu,
  },
  {
    title: "Eko Paket-2",
    specs: {
      cpu: "3 CPU",
      ram: "3 GB RAM",
      storage: "35 GB DİSK",
      bandwidth: "E5 2697 x2 İşlemci",
    },
    price: "85",
    icon: Cpu,
  },
  {
    title: "Eko Paket-3",
    specs: {
      cpu: "4 CPU",
      ram: "4 GB RAM",
      storage: "40 GB DİSK",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "100",
    icon: Cpu,
  },
  {
    title: "Eko Paket-4",
    specs: {
      cpu: "5 CPU",
      ram: "6 GB RAM",
      storage: "50 GB DİSK",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "130",
    icon: Cpu,
  },
  {
    title: "Eko Paket-5",
    specs: {
      cpu: "6 CPU",
      ram: "8 GB RAM",
      storage: "60 GB DİSK",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "165",
    icon: Cpu,
  },
  {
    title: "Eko Paket-6",
    specs: {
      cpu: "8 CPU",
      ram: "12 GB RAM",
      storage: "80 GB DİSK",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "200",
    icon: Cpu,
  },
  {
    title: "Eko Paket-7",
    specs: {
      cpu: "10 CPU",
      ram: "16 GB RAM",
      storage: "100 GB SSD",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "250",
    icon: Cpu,
  },
  {
    title: "Eko Paket-8",
    specs: {
      cpu: "12 vCPU",
      ram: "24 GB RAM",
      storage: "120 GB SSD",
      bandwidth: "E5 2697v2 İşlemci",
    },
    price: "320",
    icon: Cpu,
  },
];

const ryzenVdsPlans = [
  {
    title: "Ryzen Paket-1",
    specs: {
      cpu: "2 vCPU",
      ram: "2 GB RAM",
      storage: "25 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "200TL",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-2",
    specs: {
      cpu: "4 vCPU",
      ram: "4 GB RAM",
      storage: "25 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "250TL",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-3",
    specs: {
      cpu: "4 CPU",
      ram: "4 GB RAM",
      storage: "75 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "300TL",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-4",
    specs: {
      cpu: "6 vCPu",
      ram: "4 GB RAM",
      storage: "75 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "350TL",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-5",
    specs: {
      cpu: "6 vCPU",
      ram: "6 GB RAM",
      storage: "100 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "400TL",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-6",
    specs: {
      cpu: "16 vCPU",
      ram: "64 GB RAM",
      storage: "750 GB NVMe",
      bandwidth: "Ryzen 9 7950X3D",
    },
    price: "₺1399",
    icon: Zap,
  },
  {
    title: "Ryzen Paket-7",
    specs: {
      cpu: "12 vCPU",
      ram: "8 GB RAM",
      storage: "150 GB DİSK (SSD)",
      bandwidth: "R9 5900X İşlemci",
    },
    price: "750TL",
    icon: Zap,
  },
];

const Services = () => {
  const { toast } = useToast();

  const handleOrderClick = () => {
    window.open("https://discord.gg/yZR9QZz7Tc", "_blank");
    toast({
      title: "Discord'umuz Açıldı",
      description: "Sizde Fiyat Bilgisi Almak İçin https://discord.gg/yZR9QZz7Tc.",
    });
  };

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Eko VDS Paketleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vdsPlans.map((plan) => (
              <Card key={plan.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <plan.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-gray-600">
                    <li>{plan.specs.cpu}</li>
                    <li>{plan.specs.ram}</li>
                    <li>{plan.specs.storage}</li>
                    <li>{plan.specs.bandwidth}</li>
                  </ul>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {plan.price}TL
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleOrderClick}
                  >
                    Satın Alın
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ryzen VDS Paketleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ryzenVdsPlans.map((plan) => (
              <Card key={plan.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <plan.icon className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-gray-600">
                    <li>{plan.specs.cpu}</li>
                    <li>{plan.specs.ram}</li>
                    <li>{plan.specs.storage}</li>
                    <li>{plan.specs.bandwidth}</li>
                  </ul>
                  <div className="text-2xl font-bold text-orange-600 mb-4">
                    {plan.price}
                  </div>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={handleOrderClick}
                  >
                    Satın Alın
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;