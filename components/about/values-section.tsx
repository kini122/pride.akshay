import { Lightbulb, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We push boundaries and think outside the box to create unique experiences",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We execute with meticulous attention to perfection",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies and ideas",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center p-8 rounded-xl bg-white hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
