
import React from "react";

function ContactForm() {
    return (
        <section className="flex">
            <ImageSection />
        </section>
    );
}

function ImageSection() {


  return (
    <div >
      <div className="md:px-20 max-md:pt-10 px-5">
        <iframe
        className="max-md:size-80 md:size-96 rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4829772795483!2d36.89839333857789!3d-1.1843547497010776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac76e4d9299c2443%3A0x655ebda43df91d3!2sLakewood%20Havens%20Kindergarden!5e0!3m2!1sen!2ske!4v1709318897816!5m2!1sen!2ske"
          height="450" 
          width="1700"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}



export default ContactForm;