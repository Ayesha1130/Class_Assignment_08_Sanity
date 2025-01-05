import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-black p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-10">
        We'd love to hear from you. Fill out the form below or reach out to us
        through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10">
        {/* Contact Details */}
        <div className="space-y-5 md:space-y-10">
          <h2 className="text-2xl font-semibold mb-4">Our Offices</h2>
          <p>
            <span className="font-bold">Location:</span> 123 Main St, City:Lahore,
            State, Zip
          </p>
          <p>
            <span className="font-bold">Phone:</span> (123) 456-7890
          </p>
          <p>
            <span className="font-bold">Email:</span> info@example.com
          </p>
          <p>
            <span className="font-bold">Hours:</span> Monday - Friday, 9:00 AM -
            5:00 PM
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-primary hover:underline">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-primary hover:underline">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-primary hover:underline">
                <FaInstagramSquare size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
