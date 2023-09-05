import ContactSection from '@/components/landing/ContactSection'
import React from 'react'

const index = () => {
  return (
    <div>
      <div className="mt-8">
        <iframe
          title="Mulliner Towers, Ikoyi, Lagos, Nigeria"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5521321514575!2d3.4260239750530967!3d6.451495323995778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cf9a9228a9%3A0xeb66a75f66803cdb!2sRegus%20-%20Lagos%2C%20Mulliner%20Towers!5e0!3m2!1sen!2sng!4v1692977421898!5m2!1sen!2sng"
          allowFullScreen
        ></iframe>

      </div>
      <ContactSection/>
    </div>
  )
}

export default index