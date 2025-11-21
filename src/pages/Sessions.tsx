import { useState } from "react";
import { Calendar, Clock, BookOpen, Users, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Sessions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    module: "",
    date: "",
    time: "",
    group: "",
  });

  const modules = [
    "Mathématiques",
    "Physique",
    "Informatique",
    "Chimie",
    "Biologie",
    "Français",
    "Anglais",
  ];

  const groups = ["G1", "G2", "G3", "G4", "G5"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.module || !formData.date || !formData.time || !formData.group) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Séance créée",
      description: "Le QR code a été généré avec succès",
    });
    
    // TODO: Redirect to QR code page with session data
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Configuration de Séance
          </h1>
          <p className="text-muted-foreground text-lg">
            Créez une nouvelle séance et générez le QR code de présence
          </p>
        </div>

        <Card className="shadow-card border-0">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <QrCode className="h-6 w-6" />
              Nouvelle Séance
            </CardTitle>
            <CardDescription className="text-white/80">
              Remplissez les informations de la séance
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="module" className="flex items-center gap-2 text-base">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Module
                </Label>
                <Select
                  value={formData.module}
                  onValueChange={(value) => setFormData({ ...formData, module: value })}
                >
                  <SelectTrigger id="module" className="h-12">
                    <SelectValue placeholder="Sélectionnez un module" />
                  </SelectTrigger>
                  <SelectContent>
                    {modules.map((module) => (
                      <SelectItem key={module} value={module}>
                        {module}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-base">
                    <Calendar className="h-4 w-4 text-primary" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="h-12"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2 text-base">
                    <Clock className="h-4 w-4 text-primary" />
                    Heure
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    className="h-12"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="group" className="flex items-center gap-2 text-base">
                  <Users className="h-4 w-4 text-primary" />
                  Groupe
                </Label>
                <Select
                  value={formData.group}
                  onValueChange={(value) => setFormData({ ...formData, group: value })}
                >
                  <SelectTrigger id="group" className="h-12">
                    <SelectValue placeholder="Sélectionnez un groupe" />
                  </SelectTrigger>
                  <SelectContent>
                    {groups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <QrCode className="mr-2 h-5 w-5" />
                Générer le QR Code
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-primary/20 hover:shadow-card transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Modules</h3>
                <p className="text-sm text-muted-foreground mt-1">{modules.length} disponibles</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:shadow-card transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent/10 p-3 rounded-full mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Groupes</h3>
                <p className="text-sm text-muted-foreground mt-1">{groups.length} groupes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:shadow-card transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/10 p-3 rounded-full mb-3">
                  <QrCode className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">QR Codes</h3>
                <p className="text-sm text-muted-foreground mt-1">Génération rapide</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
