import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement; js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">CONTACT US</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#2A8B84]">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-[#2A8B84] w-6 h-6 mr-4" />
                  <p>123 Main Street, Melbourne, VIC 3000</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#2A8B84] w-6 h-6 mr-4" />
                  <p>+61 3 1234 5678</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#2A8B84] w-6 h-6 mr-4" />
                  <p>info@kitestakeaway.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="text-[#2A8B84] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Opening Hours:</p>
                    <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
                
                {/* Facebook Page Plugin */}
                <div className="mt-6 w-full overflow-hidden">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Facebook className="text-[#2A8B84] w-5 h-5 mr-2" />
                    Find Us on Facebook
                  </h4>
                  <div className="fb-page" 
                    data-href="https://www.facebook.com/www.kites.com.au"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="400"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/www.kites.com.au" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/www.kites.com.au">Kite Restaurant</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288835378!2d144.9559541153008!3d-37.81725597975177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s123%20Main%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1648123456789!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;