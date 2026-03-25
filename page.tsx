import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

export default function Website() { return ( <div className="min-h-screen bg-gray-50 p-6"> {/* Hero Section */} <div className="max-w-5xl mx-auto text-center py-16"> <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4" > Audit My HR </motion.h1> <p className="text-lg text-gray-600 mb-6"> Audit My HR helps small businesses find hidden HR risks before they turn into expensive problems. </p> <Button className="text-lg px-6 py-4">Get a Free Mini Audit</Button> </div>

{/* Services Section */}
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
    {[
      {
        title: "HR Risk Audit",
        desc: "Comprehensive review of your HR documents with actionable fixes.",
      },
      {
        title: "Hiring Optimization",
        desc: "Better job descriptions and interview systems to hire smarter.",
      },
      {
        title: "Employee Documentation",
        desc: "Professional write-ups, warnings, and compliance-ready templates.",
      },
    ].map((service, i) => (
      <Card key={i} className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Pricing Section */}
  <div className="max-w-4xl mx-auto text-center py-16">
    <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
    <Card className="rounded-2xl shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold mb-2">24-Hour HR Audit</h3>
        <p className="text-gray-600 mb-4">Full review of your key HR documents</p>
        <p className="text-3xl font-bold mb-6">$99</p>
        <Button className="text-lg px-6 py-4">Start Now</Button>
      </CardContent>
    </Card>
  </div>

  {/* CTA Section */}
  <div className="max-w-4xl mx-auto text-center py-16">
    <h2 className="text-3xl font-bold mb-4">Don’t Wait Until There’s a Problem</h2>
    <p className="text-gray-600 mb-6">
      Get peace of mind knowing your HR practices are compliant and protected.
    </p>
    <Button className="text-lg px-6 py-4">Request Your Free Audit</Button>
  </div>

  {/* Footer */}
  <div className="text-center text-gray-500 text-sm py-6">
    © 2026 Audit My HR. All rights reserved.
  </div>
</div>

); }
