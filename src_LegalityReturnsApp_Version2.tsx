import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function LegalityReturnsApp() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
        Legality Returns
      </h1>
      <p className="text-center text-gray-600 text-lg">
        Your Trusted Tax & Insurance Partner
      </p>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Tax Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Income Tax Return Filing</li>
              <li>Property Tax Payments</li>
              <li>GST Return Filing</li>
              <li>Legal Compliance & Documentation Support</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Insurance Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Policy Renewals</li>
              <li>New Policy Assistance</li>
              <li>Health, Life & Vehicle Insurance</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Inquiry Form */}
      <Card className="shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-green-700">
            Quick Inquiry
          </h2>
          <form
            name="quick-inquiry"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="quick-inquiry" />
            <Input placeholder="Your Name" name="name" required />
            <Input placeholder="Phone Number" name="phone" required />
            <Textarea placeholder="How can we help you?" name="message" rows={4} />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact */}
      <div className="text-center text-green-800 font-bold text-xl">
        📞 9810498726
      </div>
    </div>
  );
}