import React, { Component } from 'react';
import './Style.scss';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

class ContactUS extends Component {
state={
  works:[],
}
componentDidMount(){
  axios.get("js/data.json").then ((e)=>{
    this.setState({
      works:e.data.Carosel,
    });
  });
};
render(){
  const {works}=this.state;
  const workList = works.map((worktitle)=>{
    return(
      <div key={worktitle.id} className="carousel">

<Carousel>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={worktitle.imges_one}
      alt="First slide"
    />
    <Carousel.Caption className="textSlider">
      <h3>{worktitle.header_one}</h3>
      <p>{worktitle.paragraph_one}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={worktitle.imges_two}
      alt="Second slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_two}</h3>
    <p>{worktitle.paragraph_two}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={worktitle.imges_three}
      alt="Third slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_three}</h3>
    <p>{worktitle.paragraph_three}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={worktitle.imges_foure}
      alt="Third slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_foure}</h3>
    <p>{worktitle.paragraph_foure}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={worktitle.imges_five}
      alt="Third slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_five}</h3>
    <p>{worktitle.paragraph_five}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={worktitle.imges_six}
      alt="Third slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_six}</h3>
    <p>{worktitle.paragraph_six}</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={worktitle.imges_seven}
      alt="Third slide"
    />
    <Carousel.Caption className="textSlider">
    <h3>{worktitle.header_seven}</h3>
    <p>{worktitle.paragraph_seven}</p>
    </Carousel.Caption>
  </Carousel.Item>

  

</Carousel> 
</div>
    )
  })

    return (
    <>
    {workList}
    </>
    )
  }
}

export default ContactUS;