"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("2023");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Great Marcy</h3>
            <p className="text-gray-300">
              Your trusted partner in finding the perfect land property for your
              needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-hover"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/lands/available"
                  className="text-gray-300 hover:text-primary-hover"
                >
                  Available Lands
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-hover"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book-inspection"
                  className="text-gray-300 hover:text-primary-hover"
                >
                  Book Inspection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <address className="not-italic  text-gray-300">
              <p>123 Real Estate Street</p>
              <p>City, State 12345</p>
              <p>Email: info@realestate.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {year} Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
