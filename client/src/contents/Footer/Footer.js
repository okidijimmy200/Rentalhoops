import React from 'react'
import './style.css'

export default function Footer() {
    return (
        <>
           <div class="wrap footer top-pad bottom-small-pad">   
                <div id="footer" class="full-width">      
                <div class="sections">           
                <ul>               
                     <li class="title">RentalHoops</li>    
                        <li><a href="/about-us">About Us</a></li> 
                        <li><a href="/agents">Agents</a></li>   
                         <li><a href="/press">Press</a></li>   
                          <li><a href="/careers">Careers</a></li>  
                        <li><a href="" target="_blank">Blog</a></li> 
                     <li><a href="/faqs">FAQ</a></li>           
                </ul>           
                <ul>                
                    <li class="title">Let Us Help You</li>        
                    <li><a href="/listings?listing_type=sale">Buy</a></li>    
                    <li><a href="/sell">Sell</a></li>        
                    <li><a href="/listings?listing_type=rental">Rent</a></li>  
                    <li><a href="/how-it-works">How It Works</a></li>          
                </ul>
                              
                <ul>          
                    <li class="title">Contact</li>     
                    <li><a href="tel:8663716468">+256 788 926 713</a></li> 
                    <li><a href="mailto:hello@triplemint.com">hello@rentalhoops.com</a></li>  
                     <li><a href="" target="_blank"><img class="social" /></a><a href="" target="_blank"><img class="social" src=""/></a><a href=""><img class="social"  src=""/></a></li>        
                </ul>           
                            
                <ul>            
                    <li class="title">Our Office</li>                   
                    <li>7 Princess Oli rd</li>             
                     <li>Gulu, Uganda</li>               
                 </ul></div>   
        <div class="clearfix"></div>  
        </div>    <div id="legal" class="full-width">    
        <p>Made with ♡ in Uganda | © RentalHoops. 2021. All Rights Reserved.</p>     
            <p><a href="/terms">Terms and Conditions</a> | <a href="/privacy">Privacy Policy</a> | <a href="/dmca">DMCA</a> | Search by <a href="https://locationiq.com" target="_blank">LocationIQ.com</a></p>    
             <p><a target="_blank" href="">Uganda Fair Housing Notice</a></p>        
                </div>
        </div>
                                                                    
        </>
    )
}
