import { Download, Calendar, BookOpen, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QRCodePage = () => {
  // TODO: Get session data from route params or context
  const sessionData = {
    module: "Informatique",
    date: "2024-01-15",
    time: "09:00",
    group: "G1",
  };

  const handleDownload = () => {
    // TODO: Implement QR code download as PNG
    console.log("Downloading QR code...");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            QR Code de Présence
          </h1>
          <p className="text-muted-foreground text-lg">
            Scannez ce code pour enregistrer votre présence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card border-0">
            <CardHeader className="bg-gradient-primary text-white">
              <CardTitle>QR Code</CardTitle>
              <CardDescription className="text-white/80">
                À scanner par les étudiants
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              {/* TODO: Replace with actual QR code generation */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-6">
                    QR Code sera généré ici
                    <br />
                    <span className="text-sm">(Nécessite bibliothèque qrcode.react)</span>
                  </p>
                </div>
              </div>
              <Button
                onClick={handleDownload}
                className="mt-6 bg-secondary hover:bg-secondary/90"
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger en PNG
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader className="bg-accent text-white">
                <CardTitle>Informations de la Séance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Module</p>
                    <p className="font-semibold text-foreground">{sessionData.module}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-accent/10 p-2 rounded">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">
                      {new Date(sessionData.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-secondary/10 p-2 rounded">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Heure</p>
                    <p className="font-semibold text-foreground">{sessionData.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Groupe</p>
                    <p className="font-semibold text-foreground">{sessionData.group}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-3">Instructions</h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Affichez ce QR code à l'écran ou imprimez-le</li>
                  <li>Les étudiants scannent avec leur smartphone</li>
                  <li>La présence est enregistrée automatiquement</li>
                  <li>Consultez le tableau de présence en temps réel</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;
