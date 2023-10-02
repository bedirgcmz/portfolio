import React from 'react'
import img from '../images/img1.jpg'
// import './Test.css'

const Test = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> */}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='top-cards row'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <div className='my-card'>
                <div className='card-left-content'>
                    <img className='card-img' src={img}/>
                    <div className='line-and-cirkle-container'>
                        <div className='one'>
                            <div className='l-line line'></div>
                            <div className='l-circle circle'></div>
                        </div>
                        <p className='m-0'>1</p>
                        <div className='two'>
                            <div className='r-circle circle'></div>
                            <div className='r-line line'></div>
                        </div>
                    </div>                
                </div>
                <div className='card-right-content'>
                    <h6 className='project-title m-0'>Merhaba</h6>
                    <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                    <div className='d-flex justify-content-between'>
                    <a href='#!' className='see-demo'>See demo</a>
                    <a href='#!' className='go-github '>Go Github</a>
                    
                    </div>
                </div>
        </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <div className='my-card'>
                <div className='card-left-content'>
                    <img className='card-img' src={img}/>
                    <div className='line-and-cirkle-container'>
                        <div className='one'>
                            <div className='l-line line'></div>
                            <div className='l-circle circle'></div>
                        </div>
                        <p className='m-0'>1</p>
                        <div className='two'>
                            <div className='r-circle circle'></div>
                            <div className='r-line line'></div>
                        </div>
                    </div>                
                </div>
                <div className='card-right-content'>
                    <h6 className='project-title m-0'>Merhaba</h6>
                    <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                    <div className='d-flex justify-content-between'>
                    <a href='#!' className='see-demo'>Go Project</a>
                    <a href='#!' className='go-github'>Go Github</a>
                    </div>
                </div>
            </div>
        </div>        
      </div>
      <div className='bottom-cards row'>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <a href='#!' className='see-demo'>Go Project</a>
                    <a href='#!' className='go-github'>Go Github</a>
                </div>
            </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <a href='#!' className='see-demo'>Go Project</a>
                    <a href='#!' className='go-github'>Go Github</a>
                </div>
            </div>
        </div>
      </div>
      </div>
      {/*soonnn*/}
    </div>
    {/* <div class="carousel-item">
      <div className='top-cards'>
        <div className='my-card'>
                <div className='card-left-content'>
                    <img className='card-img' src={img}/>
                    <div className='line-and-cirkle-container'>
                        <div className='one'>
                            <div className='l-line line'></div>
                            <div className='l-circle circle'></div>
                        </div>
                        <p className='m-0'>1</p>
                        <div className='two'>
                            <div className='r-circle circle'></div>
                            <div className='r-line line'></div>
                        </div>
                    </div>                
                </div>
                <div className='card-right-content'>
                    <h6 className='project-title m-0'>Merhaba</h6>
                    <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                    <div className='d-flex justify-content-between'>
                    <button className='go-project'>Go Project</button>
                    <button className='go-github'>Go Github</button>
                    </div>
                </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
      <div className='bottom-cards'>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className='top-cards'>
        <div className='my-card'>
                <div className='card-left-content'>
                    <img className='card-img' src={img}/>
                    <div className='line-and-cirkle-container'>
                        <div className='one'>
                            <div className='l-line line'></div>
                            <div className='l-circle circle'></div>
                        </div>
                        <p className='m-0'>1</p>
                        <div className='two'>
                            <div className='r-circle circle'></div>
                            <div className='r-line line'></div>
                        </div>
                    </div>                
                </div>
                <div className='card-right-content'>
                    <h6 className='project-title m-0'>Merhaba</h6>
                    <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                    <div className='d-flex justify-content-between'>
                    <button className='go-project'>Go Project</button>
                    <button className='go-github'>Go Github</button>
                    </div>
                </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
      <div className='bottom-cards'>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
    </div> */}
    {/* <div class="carousel-item">
      <div className='top-cards'>
        <div className='my-card'>
                <div className='card-left-content'>
                    <img className='card-img' src={img}/>
                    <div className='line-and-cirkle-container'>
                        <div className='one'>
                            <div className='l-line line'></div>
                            <div className='l-circle circle'></div>
                        </div>
                        <p className='m-0'>1</p>
                        <div className='two'>
                            <div className='r-circle circle'></div>
                            <div className='r-line line'></div>
                        </div>
                    </div>                
                </div>
                <div className='card-right-content'>
                    <h6 className='project-title m-0'>Merhaba</h6>
                    <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                    <div className='d-flex justify-content-between'>
                    <button className='go-project'>Go Project</button>
                    <button className='go-github'>Go Github</button>
                    </div>
                </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
      <div className='bottom-cards'>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
        <div className='my-card'>
            <div className='card-left-content'>
                <img className='card-img' src={img}/>
                <div className='line-and-cirkle-container'>
                    <div className='one'>
                        <div className='l-line line'></div>
                        <div className='l-circle circle'></div>
                    </div>
                    <p className='m-0'>1</p>
                    <div className='two'>
                        <div className='r-circle circle'></div>
                        <div className='r-line line'></div>
                    </div>
                </div>                
            </div>
            <div className='card-right-content'>
                <h6 className='project-title m-0'>Merhaba</h6>
                <p className='project-info'>Lorem leor kmnwfmd msncjknsc csjkbcnkjcb sjbjhhas sjcbajcba jscbjscb xcnasjcbhjas njbhjsabcjabc ajscbajbcxn jabchsbc</p>
                <div className='d-flex justify-content-between'>
                <button className='go-project'>Go Project</button>
                <button className='go-github'>Go Github</button>
                </div>
            </div>
        </div>
      </div>
    </div> */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>
    </div>
  )
}

export default Test