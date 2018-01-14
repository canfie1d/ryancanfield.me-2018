import React from 'react';
import Introduction from '../Containers/Introduction';
import Footer from '../Components/Footer';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

export default class About extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="I'm Ryan Canfield," subtitle="a digital product designer&nbsp;&amp; developer in Seattle,&nbsp;Wa." />
        <div className='content' id='content'>
          <div className='content__split'>
            <AnimatedWaypoint>
              <div className='content__split__column'>
                <div className='hr' />
                <h3 className='h3'>Work &amp; Education</h3>
                <p className='p'>In my last position, I specialized in user interface design &amp; front-end development at <a href='http://helpfulhuman.com' className='a'>Helpful Human</a>. Previously, I was a UI engineer at <a href='http://www.synapsestudios.com' className='a'>Synapse Studios</a> and prior to that, I was a designer for the <a href='http://www.azstatefair.com' className='a'>Arizona State Fair</a> in Phoenix, AZ.</p>
                <p className='p'>In 2012, I earned my Bachelors of Fine Arts in Graphic Design from Collins College. Prior to that, in 2010, I earned an Associates in Information Technology from Bryant &amp; Stratton College in New York. In addition to my traditional graphic design education, I'm extremely comfortable with HTML, CSS(SCSS &amp; Stylus) &amp; Javascript.</p>
              </div>
            </AnimatedWaypoint>
            <AnimatedWaypoint>
              <div className='content__split__column'>
                <div className='hr' />
                <h3 className='h3'>Expertise</h3>
                <p className='p'>I use an assortment of tools such as Sketch, Principle, Marvel &amp; inVision to design and prototype products.</p>
                <p className='p'>I am very accustomed to using agile development methodology including daily stand-up, sprint based development cycles, and iterative and incremental development. I am comfortable with complex git workflows as well as kanban style issue tracking services.</p>
              </div>
            </AnimatedWaypoint>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
