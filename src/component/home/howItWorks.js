import Image from 'next/image';
import { AiOutlineThunderbolt, AiOutlineBulb, AiOutlineHeart } from 'react-icons/ai';
import scribble from '../../images/scribble.png'
import { BrowserView, MobileView } from 'react-device-detect';

export default function HowItWorks() {
  return (
    <div className="container" id='howItWorks'>
        <div class='work-heading why-layout'>How it works!</div>
        <div class='scribble-img'><Image src={scribble} class='why-layout'/></div>
        <div style={{margin: '25px 0 0 20px'}}>
            <MobileView>
                <div class='why-layout' style={{paddingBottom:'10px'}}>
                <div class="row">
                    <div class="col-1">
                        <AiOutlineThunderbolt size={25}/>
                    </div>
                    <div class="col-11">
                        <span class='sub-works'>An outcome driven intiative that upskills early career professionals led by GENIULS expert.</span>
                    </div>
                </div>
            </div>
            <div class='why-layout' style={{paddingBottom:'13px'}}>
                <div class="row">
                    <div class="col-1">
                        <AiOutlineBulb size={25}/>
                    </div>
                    <div class="col-11">
                        <span class='sub-works'>Not a traditional course, Mentorship is provided on case-by-case basis.</span>
                    </div>
                </div>
            </div>
            <div class='why-layout'>
                <div class="row">
                    <div class="col-1">
                        <AiOutlineHeart size={25}/>
                    </div>
                    <div class="col-11">
                        <span class='sub-works'>Assistance till you get placed and beyond!</span>
                    </div>
                </div>
            </div>
            </MobileView>
            <BrowserView>
            <div class='why-layout'><AiOutlineThunderbolt size={25}/>&nbsp;&nbsp;<span class='sub-works'>An outcome driven intiative that upskills early career professionals led by GENIULS expert.</span></div>
            <div class='why-layout'><AiOutlineBulb size={25}/>&nbsp;&nbsp;<span class='sub-works'>Not a traditional course, Mentorship is provided on case-by-case basis.</span></div>
            <div class='why-layout'><AiOutlineHeart size={25}/>&nbsp;&nbsp;<span class='sub-works'>Assistance till you get placed and beyond!</span></div>
            </BrowserView>
        </div>
        <div style={{paddingTop:'40px'}}/>

        <div class='why-layout'>
        <div className='row'>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(238, 255, 247)'}}>
                <div style={{height:'10px'}} />
                    <span class='hook-points'>₹0*  
                        <span class='imp-text'> Upfront Fees <br/></span>
                    </span>
                    For Mentorship & Coding <br/>
                    Buddy <br/>
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(247, 247, 255)'}}>
                    <br/><span class='imp-text'>Unique curriculum <br/></span>
                    Designed as per your experience
                    <div style={{height:'18px'}} />
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(246, 237, 231)'}}>
                <br/><span class='imp-text'>Structured preparation<br/></span>
                    For company specific opportunities
                    <div style={{height:'18px'}} />
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(242, 247, 255)', paddingTop:'25px', paddingBottom:'25px'}}>
                    <span class='imp-text'>Crack dream companies!</span>Pay as per ISA <span class='imp-text'>Aspiring More!<br/></span>
                    <span class='imp-text'>Re-level<br/></span> to crack More!
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
