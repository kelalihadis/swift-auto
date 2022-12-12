import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export  function NewOne() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
  );
}
// export function NewOne(){
//     return(
//         <div>
//             <div class="textwidget"><div style={{padding: '20px', backgroundColor: '#e52d28', color: '#fff', paddingBottom: '10px', marginBottom: '10px', boxShadow: '1px 1px 10px #969595'}}>
// <p style={{fontSize: '12px'}}>www.mekina.net is the leading online cars classified portal in Ethiopia. Buy, sell or rent cars without paying commissions, directly find buyers online in Ethiopia. መኪና ኔት ላይ ሲሸጡ ምንም ኮሚሽን አይከፍሉም። Mekina.net does not buy or sell cars, we are only an advertising platform.</p>
// <div style={{marginTop: '10px'}} align="center">
// <p style="font-style: italic; font-size: 12px;">Reach us on <strong>0944 333333</strong></p>
// <p><a href="//wa.me/251944333333"><img style={{width: '30px',marginLeft: '10px', marginRight: '10px'}} src="//www.mekina.net/ads/whatsapp-.png" /></a><a href="viber://chat/?number=%2B251944333333"><img style={{width: '30px', marginLeft: '10px', marginRight: '10px'}} src="//www.mekina.net/ads/viber-i.png" /></a><a href="//t.me/mekinanet"><img style={{width: '30px', marginLeft: '10px', marginRight: '10px'}} src="//www.mekina.net/ads/telegram-i.png" /></a></p>
// </div>
// </div>
// <div style={{padding: '20px', backgroundColor: '#330908', color: '#fff', paddingBottom: '10px', marginBottom: '10px', boxShadow: '1px 1px 10px #969595'}}>
// <p style={{fontSize: '12px'}}>ከመኪና ጋር የተጋናኘ ማንኛውም ጥያቄ ካልዎት እዚህ ጋር በመጫን ይጠይቁ። እርስዎም ሊመልሱ የሚችሉት ጥያቄ ከተጠየቀ በመመለስ ይተባበሩ። ስለ መኪና ቀረጥ? ስለ መኪና ጋራዥ? ጥሩ መካኒክ የት አገኛለሁ? መኪና ለማስመጣት ምን ያስፈልጋል? መለዋወጫ የት አገኛለሁ? እና የመሳሰሉት ጥያቄ ሲኖርዎት <a href="//www.mekina.et/questions/ask" target="_blank" rel="noopener">እዚህ ላይ ይጠይቁ › </a></p>
// <div style={{marginTop: '10px'}} align="center"><a class="btn btn-danger" href="//www.mekina.et/questions/ask" target="_blank" rel="noopener">ASK the community</a></div>
// </div>
// <div class="search-bar">
// <div class="section-search search-style-2">
// <div style={{padding:'20px', backgroundColor: '#fff'}}>
// <div class="row">
// <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
// <div class="clearfix">
// <form method="get" action="/cars">
// <div>
// <div>
// <div class="col-md-12 col-sm-12 col-xs-12 no-padding">
// <div class="form-group">
// <label>ስሪት | Make</label>
// <select class="form-control select2-hidden-accessible" name="cat" tabindex="-1" aria-hidden="true">
// <option label="ስሪት | Make" value="">Select Make</option>
// <option value="Abay">Abay </option><option value="Audi">Audi </option><option value="Audi A1">&nbsp;&nbsp; - &nbsp;Audi A1 </option><option value="Audi A3">&nbsp;&nbsp; - &nbsp;Audi A3 </option><option value="Audi A4">&nbsp;&nbsp; - &nbsp;Audi A4 </option><option value="Audi A5">&nbsp;&nbsp; - &nbsp;Audi A5 </option><option value="Audi A6">&nbsp;&nbsp; - &nbsp;Audi A6 </option><option value="Audi A7">&nbsp;&nbsp; - &nbsp;Audi A7 </option><option value="Audi Q2">&nbsp;&nbsp; - &nbsp;Audi Q2 </option><option value="Audi Q3">&nbsp;&nbsp; - &nbsp;Audi Q3 </option><option value="Audi Q5">&nbsp;&nbsp; - &nbsp;Audi Q5 </option><option value="Audi Q7">&nbsp;&nbsp; - &nbsp;Audi Q7 </option><option value="BMW">BMW </option><option value="3 Series">&nbsp;&nbsp; - &nbsp;3 Series </option><option value="BMW 318i">&nbsp;&nbsp; - &nbsp;BMW 318i </option><option value="BMW 320i">&nbsp;&nbsp; - &nbsp;BMW 320i </option><option value="BMW 530i">&nbsp;&nbsp; - &nbsp;BMW 530i </option><option value="Cadillac">Cadillac </option><option value="Chevrolet">Chevrolet </option><option value="Daewoo">Daewoo </option><option value="Daihatsu">Daihatsu </option><option value="Terios">&nbsp;&nbsp; - &nbsp;Terios </option><option value="Terios Kid">&nbsp;&nbsp; - &nbsp;Terios Kid </option><option value="Dodge">Dodge </option><option value="Ram">&nbsp;&nbsp; - &nbsp;Ram </option><option value="Fiat">Fiat </option><option value="Ford">Ford </option><option value="Glory">Glory </option><option value="GMC">GMC </option><option value="Honda">Honda </option><option value="Accord">&nbsp;&nbsp; - &nbsp;Accord </option><option value="Honda Civic">&nbsp;&nbsp; - &nbsp;Honda Civic </option><option value="Honda CR-V">&nbsp;&nbsp; - &nbsp;Honda CR-V </option><option value="Hummer">Hummer </option><option value="Hyundai">Hyundai </option><option value="Hyundai Accent">&nbsp;&nbsp; - &nbsp;Hyundai Accent </option><option value="Hyundai Atoz">&nbsp;&nbsp; - &nbsp;Hyundai Atoz </option><option value="Hyundai Avante">&nbsp;&nbsp; - &nbsp;Hyundai Avante </option><option value="Hyundai Creta">&nbsp;&nbsp; - &nbsp;Hyundai Creta </option><option value="Hyundai Elantra">&nbsp;&nbsp; - &nbsp;Hyundai Elantra </option><option value="Hyundai Getz">&nbsp;&nbsp; - &nbsp;Hyundai Getz </option><option value="Hyundai H1 / Starex">&nbsp;&nbsp; - &nbsp;Hyundai H1 / Starex </option><option value="Hyundai i20">&nbsp;&nbsp; - &nbsp;Hyundai i20 </option><option value="Hyundai Santa Fe">&nbsp;&nbsp; - &nbsp;Hyundai Santa Fe </option><option value="Hyundai Tucson">&nbsp;&nbsp; - &nbsp;Hyundai Tucson </option><option value="Hyundai Veloster">&nbsp;&nbsp; - &nbsp;Hyundai Veloster </option><option value="Isuzu">Isuzu </option><option value="Iveco">Iveco </option><option value="Jaguar">Jaguar </option><option value="Jeep">Jeep </option><option value="Kia">Kia </option><option value="Lada">Lada </option><option value="Land Rover">Land Rover </option><option value="Lexus">Lexus </option><option value="Lifan">Lifan </option><option value="Mazda">Mazda </option><option value="Mercedes">Mercedes </option><option value="Mercedes C Class">&nbsp;&nbsp; - &nbsp;Mercedes C Class </option><option value="Mercedes E Class">&nbsp;&nbsp; - &nbsp;Mercedes E Class </option><option value="Mercedes S Class">&nbsp;&nbsp; - &nbsp;Mercedes S Class </option><option value="Mercedes S Series">&nbsp;&nbsp; - &nbsp;Mercedes S Series </option><option value="Mercedes SLK Class">&nbsp;&nbsp; - &nbsp;Mercedes SLK Class </option><option value="Mitsubishi">Mitsubishi </option><option value="Mitsubishi L200">&nbsp;&nbsp; - &nbsp;Mitsubishi L200 </option><option value="Mitsubishi Lancer">&nbsp;&nbsp; - &nbsp;Mitsubishi Lancer </option><option value="Mitsubishi Mirage">&nbsp;&nbsp; - &nbsp;Mitsubishi Mirage </option><option value="Mitsubishi attrage">&nbsp;&nbsp; - &nbsp;Mitsubishi attrage </option><option value="Mitsubishi Pajero">&nbsp;&nbsp; - &nbsp;Mitsubishi Pajero </option><option value="Nissan">Nissan </option><option value="Nissan Murano">&nbsp;&nbsp; - &nbsp;Nissan Murano </option><option value="Nissan Navara">&nbsp;&nbsp; - &nbsp;Nissan Navara </option><option value="Nissan Juke">&nbsp;&nbsp; - &nbsp;Nissan Juke </option><option value="Nissan Kicks">&nbsp;&nbsp; - &nbsp;Nissan Kicks </option><option value="Nissan X-trail">&nbsp;&nbsp; - &nbsp;Nissan X-trail </option><option value="Nissan Patrol">&nbsp;&nbsp; - &nbsp;Nissan Patrol </option><option value="Nissan Qashqai">&nbsp;&nbsp; - &nbsp;Nissan Qashqai </option><option value="Nissan Sunny">&nbsp;&nbsp; - &nbsp;Nissan Sunny </option><option value="Nissan TD">&nbsp;&nbsp; - &nbsp;Nissan TD </option><option value="Nissan Terrano">&nbsp;&nbsp; - &nbsp;Nissan Terrano </option><option value="Nissan UD Track">&nbsp;&nbsp; - &nbsp;Nissan UD Track </option><option value="Opel">Opel </option><option value="Other">Other </option><option value="Peugeot">Peugeot </option><option value="Porsche">Porsche </option><option value="Renault">Renault </option><option value="Renault Kangoo">&nbsp;&nbsp; - &nbsp;Renault Kangoo </option><option value="Renault Scenic">&nbsp;&nbsp; - &nbsp;Renault Scenic </option><option value="Scania">Scania </option><option value="Sinotrack">Sinotrack </option><option value="Suzuki">Suzuki </option><option value="Suzuki Alto">&nbsp;&nbsp; - &nbsp;Suzuki Alto </option><option value="Suzuki Carry">&nbsp;&nbsp; - &nbsp;Suzuki Carry </option><option value="Suzuki Dzire">&nbsp;&nbsp; - &nbsp;Suzuki Dzire </option><option value="Suzuki Every">&nbsp;&nbsp; - &nbsp;Suzuki Every </option><option value="Suzuki Maruti">&nbsp;&nbsp; - &nbsp;Suzuki Maruti </option><option value="Suzuki S-presso">&nbsp;&nbsp; - &nbsp;Suzuki S-presso </option><option value="Suzuki Swift">&nbsp;&nbsp; - &nbsp;Suzuki Swift </option><option value="Suzuki Vitara">&nbsp;&nbsp; - &nbsp;Suzuki Vitara </option><option value="Toyota">Toyota </option><option value="Toyota Avensis">&nbsp;&nbsp; - &nbsp;Toyota Avensis </option><option value="Toyota Aygo">&nbsp;&nbsp; - &nbsp;Toyota Aygo </option><option value="Toyota C-HR">&nbsp;&nbsp; - &nbsp;Toyota C-HR </option><option value="Toyota Carina">&nbsp;&nbsp; - &nbsp;Toyota Carina </option><option value="Toyota Corolla">&nbsp;&nbsp; - &nbsp;Toyota Corolla </option><option value="Toyota Echo">&nbsp;&nbsp; - &nbsp;Toyota Echo </option><option value="Toyota Hiace">&nbsp;&nbsp; - &nbsp;Toyota Hiace </option><option value="Toyota Highlander">&nbsp;&nbsp; - &nbsp;Toyota Highlander </option><option value="Toyota Hilux">&nbsp;&nbsp; - &nbsp;Toyota Hilux </option><option value="Toyota Land Cruiser">&nbsp;&nbsp; - &nbsp;Toyota Land Cruiser </option><option value="Toyota Platz">&nbsp;&nbsp; - &nbsp;Toyota Platz </option><option value="Toyota Rav4">&nbsp;&nbsp; - &nbsp;Toyota Rav4 </option><option value="Toyota Starlet">&nbsp;&nbsp; - &nbsp;Toyota Starlet </option><option value="Toyota Tacoma">&nbsp;&nbsp; - &nbsp;Toyota Tacoma </option><option value="Toyota Fortuner">&nbsp;&nbsp; - &nbsp;Toyota Fortuner </option><option value="Toyota Rush">&nbsp;&nbsp; - &nbsp;Toyota Rush </option><option value="Toyota Vitz">&nbsp;&nbsp; - &nbsp;Toyota Vitz </option><option value="Toyota Yaris">&nbsp;&nbsp; - &nbsp;Toyota Yaris </option><option value="Volkswagen">Volkswagen </option><option value="Volvo">Volvo </option>
// </select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cat-61-container"><span class="select2-selection__rendered" id="select2-cat-61-container"><span class="select2-selection__placeholder">Select an option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
// </div>
// </div>
// <div class="col-md-12 col-sm-12 col-xs-12 no-padding">
// <div class="form-group">
// <label>የመኪናው ሁኔታ | condition</label>
// <select class="form-control select2-hidden-accessible" name="condition" tabindex="-1" aria-hidden="true">
// <option label="የመኪናው ሁኔታ | Condition" value="">Select Condition</option>
// <option value="Used in Ethiopia">Used in Ethiopia</option><option value="Not used in Ethiopia">Not used in Ethiopia</option><option value="Car for rent">Car for rent</option><option value="Brand new">Brand new</option>
// </select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-condition-z5-container"><span class="select2-selection__rendered" id="select2-condition-z5-container"><span class="select2-selection__placeholder">Select an option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
// </div>
// </div>
// <div class="col-md-12 col-sm-12 col-xs-12 no-padding">
// <div class="form-group">
// <label>ዓ.ም | Select Year</label>
// <select class="form-control select2-hidden-accessible" name="year_from" tabindex="-1" aria-hidden="true">
// <option label="ዓ.ም | Year" value="">Select Year</option>
// <option value="Below 1980">Below 1980</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option>
// </select><span class="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-year_from-2s-container"><span class="select2-selection__rendered" id="select2-year_from-2s-container"><span class="select2-selection__placeholder">Select an option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
// </div>
// </div>

// </div>
// <div class="col-md-12 col-sm-12 col-xs-12 no-padding ">
// <button type="submit" id="submit_loader" value="submit" class="btn btn-lg btn-theme">Search Car</button>
// </div>
// </div>
// </form>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// <div style={{width: '100%', paddingBottom: '10px', paddingTop: '10px', backgroundColor: '#e52d27', color: '#fff', paddingLeft: '20px'}}>Popular Models<span style={{float: 'right',paddingRight: '10px'}}><a style={{color: '#fff'}} href="https://www.mekina.net/categories">More</a></span></div>
// <div class="mekinalogo-grid" style={{marginBottom: '20px'}}>
// <div align="center"><a href="https://www.mekina.net/ad_category/corolla"><img class="alignnone size-full wp-image-2952" src="https://www.mekina.net/ads/toyota.jpg" alt="" width="65" height="65" />Corolla</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/vitz"><img class="alignnone size-full wp-image-2952" src="https://www.mekina.net/ads/toyota.jpg" alt="" width="65" height="65" />Vitz</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/yaris"><img class="alignnone size-full wp-image-2952" src="https://www.mekina.net/ads/toyota.jpg" alt="" width="65" height="65" />Yaris</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/land-cruiser"><img class="alignnone size-full wp-image-2952" src="https://www.mekina.net/ads/toyota.jpg" alt="" width="65" height="65" />Land Cruiser</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/nissan"><img class="alignnone size-full wp-image-2955" src="https://www.mekina.net/ads/nissan.jpg" alt="" width="65" height="65" />Nissan</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/toyota"><img class="alignnone size-full wp-image-2952" src="https://www.mekina.net/ads/toyota.jpg" alt="" width="65" height="65" />Toyota</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/mercedes"><img class="alignnone size-full wp-image-2953" src="https://www.mekina.net/ads/benz.jpg" alt="" width="65" height="65" />Mercedes Benz</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/bmw"><img class="alignnone size-full wp-image-2954" src="https://www.mekina.net/ads/bmw.jpg" alt="" width="65" height="65" />BMW</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/volkswagen"><img class="alignnone size-full wp-image-2956" src="https://www.mekina.net/ads/vw.jpg" alt="" width="65" height="65" />Volkswagen</a></div>
// <div align="center"><a href="https://www.mekina.net/ad_category/dzire/"><img class="alignnone size-full wp-image-2958" src="//www.mekina.net/ads/suzuki.jpg" alt="" width="65" height="65" />Suzuki Dzire</a></div>
// <div align="center"><a href="//www.mekina.net/ad_category/kia"><img class="alignnone size-full wp-image-2959" src="//www.mekina.net/ads/kia.jpg" alt="" width="65" height="65" />Kia</a></div>
// <div align="center"><a href="//www.mekina.net/ad_category/atoz"><img class="alignnone size-full wp-image-2958" src="//www.mekina.net/ads/hyundai.jpg" alt="" width="65" height="65" />Atoz</a></div>
// </div>
// </div>
//         </div>
//     )
// }