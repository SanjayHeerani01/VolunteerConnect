"use client";

import { useState } from "react"; 
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false); 
  const [showPrivacy, setShowPrivacy] = useState(false); // 🛠 move this at the top inside the component

  return (
    <>
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* VolunteerConnect Logo & About */}
            <div className="space-y-4">
              <Link href="/" className="font-bold text-xl inline-block">
                <span className="text-primary">Volunteer</span>
                <span>Connect</span>
              </Link>
              <p className="text-muted-foreground">
                Bringing together volunteers and organizations to create
                meaningful change in communities around the world.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/contact#faq-section" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                   Privacy Policy
                  </button>
                </li>                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

            {/* For Volunteers */}
            <div>
              <h3 className="font-semibold text-lg mb-4">For Volunteers</h3>
              <ul className="space-y-2">
                <li><Link href="/volunteer/signup" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</Link></li>
                <li><Link href="/volunteer/signin" className="text-muted-foreground hover:text-primary transition-colors">Sign In</Link></li>
                <li><Link href="/volunteer/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link href="/volunteer/opportunities" className="text-muted-foreground hover:text-primary transition-colors">Find Opportunities</Link></li>
                <li><Link href="/volunteer/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              </ul>
            </div>

            {/* For Organizations */}
            <div>
              <h3 className="font-semibold text-lg mb-4">For Organizations</h3>
              <ul className="space-y-2">
                <li><Link href="/organization/signup" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</Link></li>
                <li><Link href="/organization/signin" className="text-muted-foreground hover:text-primary transition-colors">Sign In</Link></li>
                <li><Link href="/organization/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link href="/organization/requests" className="text-muted-foreground hover:text-primary transition-colors">Pending Requests</Link></li>
                <li><Link href="/chatbot" className="text-muted-foreground hover:text-primary transition-colors">Chatbot</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} VolunteerConnect. All rights reserved.
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@volunteerconnect.org</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Volunteer St, City, Country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

     {/* Terms of Service Popup */}
{showTerms && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
    <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        onClick={() => setShowTerms(false)}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold text-black mb-4">Terms and Conditions</h2>
      <div className="text-black space-y-4 max-h-[60vh] overflow-y-auto">
        <p>Welcome to VolunteerConnect! By using our platform, you agree to the following terms:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>You must provide accurate information during registration.</li>
          <li>Volunteers and organizations are responsible for their conduct.</li>
          <li>We are not liable for any disputes between users.</li>
          <li>All communications are encrypted and secured.</li>
          <li>We reserve the right to suspend accounts that violate our policies.</li>
          <li>Your use of the platform constitutes acceptance of any updates to these terms.</li>
        </ul>
        <p>For any questions, please contact us at <strong>support@volunteerconnect.com</strong>.</p>
      </div>
    </div>
  </div>
)}

    {/* Privacy Policy Popup */}
{showPrivacy && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
    <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        onClick={() => setShowPrivacy(false)}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold text-black mb-4">Privacy Policy</h2>
      <div className="text-black space-y-4 max-h-[60vh] overflow-y-auto">
        <p>Your privacy is important to us at VolunteerConnect. Here's how we handle your data:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>We collect information only necessary for providing our services.</li>
          <li>Your personal data is never shared without your consent.</li>
          <li>We use encryption to protect all communications and stored data.</li>
          <li>Cookies are used to enhance your user experience.</li>
          <li>You can request to delete your account and personal data anytime.</li>
          <li>We update our privacy practices regularly to stay compliant with regulations.</li>
        </ul>
        <p>For any privacy concerns, please reach out at <strong>privacy@volunteerconnect.com</strong>.</p>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default Footer;
