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
      Let <span className='fonts01'>DesignDevTunes</span> help you to find your job.<br />
      </div>
      <div className='contain'>
        Let <span className='fonts01'>DesignDevTunes</span> help you to find your job.<br />
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

text-align: center;
position: absolute;

width: 100%;
color: white;
.bg0{
  width: 100%;
  height: 500px;
left: 0px;
top: -40px;
background: #242424;
color: white;

}
/* Vector 2 */
.highlight{
  /* --mask:
    radial-gradient(496.41px at 50% 666.00px,#000 99%,#0000 101%) calc(50% - 444px) 0/888px 51% repeat-x,
    radial-gradient(496.41px at 50% -444px,#0000 99%,#000 101%) 50% 222px/888px calc(51% - 222px) repeat-x,
    radial-gradient(496.41px at 50% calc(100% - 666.00px),#000 99%,#0000 101%) 50% 100%/888px 51% repeat-x,
    radial-gradient(496.41px at 50% calc(100% + 444.00px),#0000 99%,#000 101%) calc(50% - 444px) calc(100% - 222px)/888px calc(51% - 222px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask); */

width: 100%;
height: 1000px;
top: 250px;
background: #D9D9D9;

}

.contain{
  /* --mask:
    radial-gradient(496.41px at 50% 666.00px,#000 99%,#0000 101%) calc(50% - 444px) 0/888px 51% repeat-x,
    radial-gradient(496.41px at 50% -444px,#0000 99%,#000 101%) 50% 222px/888px calc(51% - 222px) repeat-x,
    radial-gradient(496.41px at 50% calc(100% - 666.00px),#000 99%,#0000 101%) 50% 100%/888px 51% repeat-x,
    radial-gradient(496.41px at 50% calc(100% + 444.00px),#0000 99%,#000 101%) calc(50% - 444px) calc(100% - 222px)/888px calc(51% - 222px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask); */
position: absolute;
width:100%;
height: 1000px;
left: -2.71px;
top: 700px;
background: #D9D9D9;


}

.footer{
position: absolute;
width: 100%;
height: 200px;

top: 2000px;

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



`;