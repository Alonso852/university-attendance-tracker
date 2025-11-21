import { QrCode, Calendar, BarChart3, FileSpreadsheet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: QrCode,
      title: "Scan QR Code",
      description: "Validation rapide et sécurisée de la présence via QR code",
      color: "primary",
    },
    {
      icon: Calendar,
      title: "Gestion des Séances",
      description: "Organisez vos cours par module, date et groupe",
      color: "accent",
    },
    {
      icon: BarChart3,
      title: "Tableau de Bord",
      description: "Visualisez les statistiques de présence en temps réel",
      color: "secondary",
    },
    {
      icon: FileSpreadsheet,
      title: "Export Excel",
      description: "Exportez les données de présence au format Excel",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-card">
              <QrCode className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Gestion de Présence
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Moderne & Efficace
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Solution complète pour gérer les présences universitaires avec QR codes,
            tableaux de bord et exports automatisés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sessions">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg">
                Créer une Séance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/qrcode">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-primary/30 hover:bg-primary/5"
              >
                Voir QR Code
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour gérer efficacement les présences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-card border-0 hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <div className={`bg-${feature.color}/10 w-fit p-3 rounded-xl mb-3`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-card border-primary/20">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Précision</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-accent/20">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-accent mb-2">
                  &lt;2s
                </div>
                <p className="text-muted-foreground">Scan Rapide</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card border-secondary/20">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-secondary mb-2">
                  24/7
                </div>
                <p className="text-muted-foreground">Disponibilité</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
