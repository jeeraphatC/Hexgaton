import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Home({ className }) {
  return (
    <div className={className}>
      <div className='bg0'>
      <h1>Do you have a job?</h1>
      <p className='fonts'>
      Let <span className='fonts01'>DesignDevTunes</span> help you to find your job.<br />
      </p>
      </div>
      <div className='highlight'>
      <span className='text-highlight'>LOGODESIG</span> 
      <span className='text-highlight-2'>Popular jobs right now</span> 
      <button className='button-take'>Take job</button>
      <button className='button-hire'>HIRE A FREELANCE</button>
      </div>
      <div className='contain'>
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Home)`


position: absolute;

width: 100%;
color: white;
.bg0{
  text-align: center;
  width: 100%;
  height: 500px;
left: 0px;
top: -40px;
background: #242424;
color: white;

}
/* Vector 2 */
.highlight{

width: 100%;
height: 478px;

top: 658px;

background: #D9D9D9;

}
.text-highlight{
position: absolute;
width: 359px;
height: 144px;
left: 465px;
top: 841px;

font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 150%;
/* identical to box height, or 144px */
letter-spacing: -0.011em;

color: #000000;
}

.text-highlight-2{
  /* Popular jobs right now */

position: absolute;
width: 243px;
height: 48px;
left: 520px;
top: 951px;

font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 150%;
/* identical to box height, or 48px */
letter-spacing: -0.011em;

color: #7000FF;


}



.contain{

  width: 100%;
height: 875px;
left: -2.71px;
top: 1107px;

background: #D9D9D9;


}

.footer{
position: absolute;
width: 100%;
height: 200px;
top: 2800px;
background: #0196FC;

}
h1{
  margin-top: 50px;
  padding: 20px;
}
.fonts{
 
  color: #0196FC;
}

.fonts01{
  color: #25DAF9;
}



.button-take{
/* Component 21 */

position: absolute;
width: 345px;
height: 79px;
left: 450px;
top: 1101px;
background: #0196FC;

border-radius: 40px;
position: absolute;
font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 150%;
/* identical to box height, or 60px */
letter-spacing: -0.011em;

color: #FFFFFF;


}
.button-hire{

/* Component 22 */

position: absolute;
width: 345px;
height: 79px;
left: 450px;
top: 1200px;



/* Rectangle 18 */

position: absolute;
background: #242424;
border-radius: 40px;


font-family: 'Bebas Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 150%;
/* identical to box height, or 60px */
letter-spacing: -0.011em;

color: #FFFFFF;


}

`;