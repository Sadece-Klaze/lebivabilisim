
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mesaj atmak için alttarafa bak!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>İletişim Bilgilerimiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>contact@lebiva.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <span>discord.gg/lebivabilisim</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>Bursa & İstanbul, Turkey</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mesajınızı Hazırlayın</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Adınız Soy Adınız" />
              <Input placeholder="Sizin Epostan'ız" type="email" />
              <Textarea placeholder="Mesajınız? Mesaj olmadan atamazsınız :)" className="min-h-[120px]" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Mesajı Gönder
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
