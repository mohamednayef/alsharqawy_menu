import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const menuData = {
  liver: {
    name: "كبدة",
    portions: [
      { size: "كيلو", price: "120 جنيه" },
      { size: "ثلاث أرباع", price: "90 جنيه" },
      { size: "نصف", price: "60 جنيه" },
      { size: "ربع", price: "30 جنيه" },
    ],
  },
  brain: {
    name: "مخ",
    portions: [
      { size: "كيلو", price: "150 جنيه" },
      { size: "ثلاث أرباع", price: "115 جنيه" },
      { size: "نصف", price: "75 جنيه" },
      { size: "ربع", price: "40 جنيه" },
    ],
  },
  shrimp: {
    name: "جمبري",
    portions: [
      { size: "كيلو", price: "200 جنيه" },
      { size: "ثلاث أرباع", price: "150 جنيه" },
      { size: "نصف", price: "100 جنيه" },
      { size: "ربع", price: "50 جنيه" },
    ],
  },
  fillet: {
    name: "فيليه",
    portions: [
      { size: "كيلو", price: "180 جنيه" },
      { size: "ثلاث أرباع", price: "135 جنيه" },
      { size: "نصف", price: "90 جنيه" },
      { size: "ربع", price: "45 جنيه" },
    ],
  },
  rice: {
    name: "رز",
    portions: [
      { size: "كبير", price: "25 جنيه" },
      { size: "وسط", price: "20 جنيه" },
      { size: "صغير", price: "15 جنيه" },
    ],
  },
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">مطعم الشرقاوي</h1>
          <p className="text-xl md:text-2xl opacity-90">أشهى الأكلات الشعبية المصرية</p>
          <div className="mt-4 flex justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              منذ عام 1985
            </Badge>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">قائمة الطعام</h2>
          <Separator className="w-24 mx-auto bg-accent h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Liver Card */}
          <Card className="border-2 border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img src="/traditional-egyptian-liver-dish-with-onions-and-sp.jpg" alt="كبدة" className="w-full h-full object-cover rounded-lg" />
              </div>
              <CardTitle className="text-2xl text-primary">{menuData.liver.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {menuData.liver.portions.map((portion, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                    <span className="font-semibold text-card-foreground">{portion.size}</span>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {portion.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brain Card */}
          <Card className="border-2 border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img src="/traditional-egyptian-brain-dish-cooked-with-herbs-.jpg" alt="مخ" className="w-full h-full object-cover rounded-lg" />
              </div>
              <CardTitle className="text-2xl text-primary">{menuData.brain.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {menuData.brain.portions.map((portion, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                    <span className="font-semibold text-card-foreground">{portion.size}</span>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {portion.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shrimp Card */}
          <Card className="border-2 border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img src="/delicious-egyptian-style-cooked-shrimp-with-spices.jpg" alt="جمبري" className="w-full h-full object-cover rounded-lg" />
              </div>
              <CardTitle className="text-2xl text-primary">{menuData.shrimp.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {menuData.shrimp.portions.map((portion, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                    <span className="font-semibold text-card-foreground">{portion.size}</span>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {portion.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fillet Card */}
          <Card className="border-2 border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img src="/egyptian-style-fish-fillet-grilled-with-traditiona.jpg" alt="فيليه" className="w-full h-full object-cover rounded-lg" />
              </div>
              <CardTitle className="text-2xl text-primary">{menuData.fillet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {menuData.fillet.portions.map((portion, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                    <span className="font-semibold text-card-foreground">{portion.size}</span>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {portion.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rice Card */}
          <Card className="border-2 border-border hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img src="/traditional-egyptian-rice-dish-with-vermicelli-and.jpg" alt="رز" className="w-full h-full object-cover rounded-lg" />
              </div>
              <CardTitle className="text-2xl text-primary">{menuData.rice.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {menuData.rice.portions.map((portion, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                    <span className="font-semibold text-card-foreground">{portion.size}</span>
                    <Badge variant="outline" className="bg-accent text-accent-foreground">
                      {portion.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">مطعم الشرقاوي</h3>
              <p className="text-lg mb-4">نقدم لكم أشهى الأكلات الشعبية المصرية بأجود الخامات وأفضل الأسعار</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm opacity-90">
                <span>📍 شارع الجمهورية، وسط البلد</span>
                <span>📞 01234567890</span>
                <span>🕐 مفتوح يومياً من 10 ص إلى 2 ص</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
