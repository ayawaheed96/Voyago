import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-[#9d76b757]">
      <div className="max-w-6xl mx-auto py-9 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Logo + Intro */}
        <div>
          <h2 className="text-xl font-semibold">Voyago Hotel</h2>
          <p className="text-sm text-gray-600 mt-2">
            Comfortable rooms, best rates, and a wonderful experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
            <li className="hover:text-blue-600 cursor-pointer">Offers</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" /> +20 110 000 0000
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <Mail className="w-4 h-4" /> info@voyago.com
          </p>

          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Voyago Hotel. All rights reserved.
      </div>
    </footer>
  );
}
