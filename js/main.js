
const  entry= document.querySelector('#main')

const Main= ()=>{
    return(
        <div id='bd-div'>
            <Nav/>
            <Preamble/>
            <Cards/>
            <Footer/>
        </div>
    );
}

const  Nav=()=>{
    return(
        <nav className='nav-main'>
            <img src='images/log.png'className= "logo"/>
            <ul className='nav-items'>
                
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>News</a></li>
              
            </ul>
            </nav>
    )
}
const Preamble=()=>{
    return(
        <div className='preambles-main'>
            <div className='cover'>
            <h1 id='pre-header'>Interstellar code</h1>
            <p className='pr-info'>"realizing the beauty of creativity"</p></div>
    </div>
    )
}
const Card= (props)=>{
    return(
        <div className='card-bd'>
            <h3 className='card-title'>{props.name}</h3>
            <div className='card-img'>
 <img className='img-card' src={props.img}/>
  </div>
           <div className='card-nav'>
                
                <a  className='card-dir' href='#'>more</a>  
            </div>
            
                
            
        </div>
    )
}
const Cards = ()=>{
    return(
        <div className='card-flex'>
            <Card
            name='Web'
            img='images/web.jpg'
            /><Card
            name='AI'
            img='images/ai.webp'
            /><Card 
            img='images/software.jpg'
            name='Software'/>
            <Card 
            img='images/robotics.jpg'
            name='Robotics' />
            </div>

    )
}
const Footer = ()=>{
    return (
        <div  className='ft-main'>
            <div className='ft-row'>
                
                    <ul className='social-ul'>
                        <li className='soc-li'><a className='soc-ref' href=''><i className='fa fa-facebook'></i></a></li>
                        <li className='soc-li'><a className='soc-ref' href='https://twitter.com/CgInterstellar'><i className='fa fa-twitter'></i></a></li>
                        <li className='soc-li'><a className='soc-ref' href='#'><i className='fa fa-linkedin'></i></a></li>
                        <li className='soc-li'><a className='soc-ref' href='https://www.instagram.com/cginfinite/'><i className='fa fa-instagram'></i></a></li>
                        <li className='soc-li'><a className='soc-ref' href='https://youtu.be/MiBtJRV3wp0'><i className='fa fa-youtube'></i></a></li>
                    </ul>
                </div>
            <div className='ft-flex'>
                
                <div className='ft-row'>
                <h3 className='ft-row-title'>Company</h3>
                    <ul className='ft-ul'>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Join us</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Jobs</a></li>
                    </ul>
                </div>
               
                <div className='ft-row'>
                    <h3 className='ft-row-title'>Learn</h3>
                    <ul className='ft-ul'>
                        
                        <li><a href='#'><i className='fa fa-video'></i>Video editing</a></li>
                        <li><a href='#'><i className='fa fa-camera'></i>Photography</a></li>
                        <li><a href='#'><i className='fa fa-code'></i>Software Dev</a></li>
                        <li><a href='#'><i className='fa fa-desktop'></i>Graphics</a></li>
                        <li><a href='#'><i className='fa fa-meh blank'></i>Other</a></li>
                    </ul>
                </div>
                <div className='ft-row'>
                <h3 className='ft-row-title'>Contact</h3>
                    <ul className='ft-ul'>
                        <li><a href='#'><i className='fa fa-comment'></i>Text</a></li>
                        <li><a href='#'><i className='fa fa-envelope'></i>Mail</a></li>
                        <li><a href='#'><i className='fa fa-phone'></i>Phone</a></li>

                        <li><a href='#'><i className='fa fa-map-marker'></i>Kenya</a></li>
                        {/* */}
                        
                    </ul>
                </div>
            </div>
            <p className='ft-info' >Interstellar code &copy; 2020</p>
        </div>
    );
}
const feedImages=(props)=>{
    return (
        <div className='feed-main'>
            <h1 className='feed-title'>,....</h1>
            <div className='feed-flex'>
                <div className='feed-img-div'>
                    < img src="props.img-url" className='feed-img' />
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Main/>, entry)
gsap.to(".card-bd", {duration:2, x:20});
gsap.to("#pre-header", {duration:3, x:20});
//gsap.from(".nav-item", {duration:3,y:-20});
