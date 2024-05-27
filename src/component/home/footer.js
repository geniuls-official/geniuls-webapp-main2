import {MdFacebook} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoLinkedin} from'react-icons/io'
import {FiArrowRight} from 'react-icons/fi'

export default function Footer() {
  return (
    <div style={{backgroundColor:'#030a21', color:'#fff'}}>
     <div style={{paddingTop:'40px'}}/>
     <div className="container footer-style">
        <div className="row">
            <div className="col-7">
                <h4>Subscribe to our newsletter</h4>
                <p>Get updates on new programs, workshops, the latest developments, and community<br/> activities, straight to your inbox.</p>
                <div style={{paddingTop:'20px'}}/>
                <div className='send-style'>
                    <input type='text' placeholder='Enter your email' className='input-email'/>
                    <a href="mailto:support@geniuls.com"><button class="email-send" type="button"><FiArrowRight size={28}/></button></a>
                </div>
                <div style={{paddingTop:'20px'}}/>
                <div style={{display:'flex'}} id='contactus'> 
                    <a href='https://www.facebook.com/geniulsLLP?mibextid=ZbWKwL' target='_blank' rel="noreferrer" class='socal-link'><MdFacebook size={30}/></a> <div style={{paddingRight:'20px'}}/>  
                    <a href='https://instagram.com/geniuls?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer" class='socal-link'><AiOutlineInstagram size={30}/></a> <div style={{paddingRight:'20px'}}/> 
                    <a href='https://www.linkedin.com/company/geniuls/' target='_blank' rel="noreferrer" class='socal-link'><IoLogoLinkedin size={30}/></a>
                </div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-6 geniuls-points">
                        Geniuls <br/> <div style={{paddingTop:'20px'}}/> 
                        <a className='footer-subtext' href='#howItWorks'>How It Works</a><br/>
                        <a className='footer-subtext' href='#whygeniuls'>Why Geniuls</a><br/>
                        <a className='footer-subtext' href='#usp'>Our USPs</a><br/>
                    </div>
                    <div className="col-6 info-style">
                        Contact Us <br/> <div style={{paddingTop:'20px'}}/> 
                        <a className='footer-subtext'>support@geniuls.com</a><br/>
                        <a className='footer-subtext'>+91 7498819934 (WhatsApp Only)</a><br/>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div style={{paddingTop:'40px'}}/>
    </div>
  )
}
