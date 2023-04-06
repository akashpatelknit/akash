import React from 'react';
import './testo.css';
import $ from 'jquery';
const Testimonial = () => {
  $(document).ready(function ($) {
    $("use strict");
    if($.isFunction('owlCarousel')){
    
    }
  
    $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    });
  });
  return (
    <section class="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div id="customers-testimonials" class="owl-carousel">
              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions. Completely synergize resource taxing
                    relationships via premier niche markets. Professionally
                    cultivate.
                  </p>
                </div>
                <div class="testimonial-name">EMILIANO AQUILANI</div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions. Completely synergize resource taxing
                    relationships via premier niche markets. Professionally
                    cultivate.
                  </p>
                </div>
                <div class="testimonial-name">ANNA ITURBE</div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions. Completely synergize resource taxing
                    relationships via premier niche markets. Professionally
                    cultivate.
                  </p>
                </div>
                <div class="testimonial-name">LARA ATKINSON</div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions. Completely synergize resource taxing
                    relationships via premier niche markets. Professionally
                    cultivate.
                  </p>
                </div>
                <div class="testimonial-name">IAN OWEN</div>
              </div>

              <div class="item">
                <div class="shadow-effect">
                  <img
                    class="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions. Completely synergize resource taxing
                    relationships via premier niche markets. Professionally
                    cultivate.
                  </p>
                </div>
                <div class="testimonial-name">MICHAEL TEDDY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
