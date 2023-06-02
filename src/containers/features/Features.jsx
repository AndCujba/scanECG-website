import React from 'react'
import './features.css'
import { Feature } from '../../components';


const featuresData = [
  {
    title: 'psum quia dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sem pretium nunc fermentum ultrices. Praesent blandit nisi et iaculis viverra.',
  },
  {
    title: 'Neque porro quisquam est qui dolorem ',
    text: 'Nunc a turpis vel quam rutrum dignissim a id ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dictum odio et elit tempus elementum. ',
  },
  {
    title: 'consectetur, adipisci velit...',
    text: 'Aliquam erat volutpat. Donec eget massa et orci rutrum scelerisque. Mauris efficitur blandit tellus eu pharetra. Etiam at felis sed ipsum posuere sollicitudin nec quis nulla.',
  },
  {
    title: 'Aliquam erat volutpat',
    text: 'Pellentesque hendrerit quam eros, in porta erat consequat varius. Nam dapibus odio et posuere consequat.',
  },
];


const Features = () => {
  return (
    <div className="ecg__features section__padding" id="features">
    <div className="ecg__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Get Started Now With Docs</p>
    </div>
    <div className="ecg__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features