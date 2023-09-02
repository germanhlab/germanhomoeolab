import React from 'react'

const page = () => {
  return (
    <div className=' w-full'>

      {/* <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-lg text-white paddings">
                    About Us
                </p>


            </div>
            <br />

            <div className=''>
                <p className="text-medium text-black paddings">
                    Welcome to German Homoeo Lab 
                </p>
            </div> */}

      <div class="about-section">
        <h1 className="text-lg text-black font-bold">Why Choose Us?</h1>
        <div class="border"></div>
        <div class="about-section-row">
          <div class="about-section-col">
            <div class="about">
              <p>
                German Homoeo Lab's medicines, products & treatments are based upon the ancient herbals & other natural constituents. These don’t have any side effects. These are perfect enough to cure all diseases related to sexual problems of men & women.  </p>

              <p>
                These medicines are based upon the ancient concept of Ayurveda. In this the main constituents are plants, leaves, seeds, mineral oils, metals & various other natural occurring things. These when combined together produces the medicines that can easily cure sexual problems like Erectile Dysfunction & impotency. The consultation & treatment will certainly bring sexual satisfaction in a time efficient manner.
              </p>

              {/* <a href="#">Read More</a> */}
            </div>
          </div>


          {/* <div class="about-section-col">
              <div class="skills">
                <div class="skill">
                  <div class="title">Web Develpor</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>90%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">UI Design</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>70%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">UX Design</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>50%</span></div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>

        <div className=" flex flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[10px]  ">

        {/* WE CAN FULLY HEAL PROBLEMS LIKE */}
          <div class="about-section-col">
          <h1 className="text-lg text-black font-bold">WE CAN FULLY HEAL PROBLEMS LIKE</h1>
          <div class="border"></div>
            <table>
              <tr>
                <th>Small Penis Size</th>
               
              </tr>
              <tr>
                <td>Premature Ejaculation</td>
               
              </tr>
              <tr>
                <td>Impotency</td>
                
              </tr>
              <tr>
                <td>Low sex Desire or Libido</td>
                
              </tr>
              <tr>
                <td>Night Discharge</td>
                
              </tr>
              <tr>
                <td>Early Ejaculation</td>
                
              </tr>
              <tr>
                <td>Erectile dysfunction</td>  
              </tr>

              <tr>
                <td>Any other Health related problem</td>  
              </tr>
            </table>
          </div>

          {/* BENEFITS FROM OUR TREATMENT */}
          <div class="about-section-col">
          <h1 className="text-lg text-black font-bold">BENEFITS FROM OUR TREATMENT</h1>
          <div class="border"></div>
            <table>
              <tr>
                <th>Enhance penis size</th>
               
              </tr>
              <tr>
                <td>Enhance penis size</td>
               
              </tr>
              <tr>
                <td>Prevents premature ejaculation</td>
                
              </tr>
              <tr>
                <td>Rock hard erection</td>
                
              </tr>
              <tr>
                <td>Ultimate pleasure</td>
                
              </tr>
              <tr>
                <td>Improved sexual performance</td>
                
              </tr>
              
            </table>
          </div>

          {/* YOU CAN TRUST US BECAUSE */}
          <div class="about-section-col">
          <h1 className="text-lg text-black font-bold">YOU CAN TRUST US BECAUSE</h1>
          <div class="border"></div>
            <table>
              <tr>
                <th>We have vast experience in curing sexual health problems</th>
               
              </tr>
              <tr>
                <td>Our medicines don’t have any side effects</td>
               
              </tr>
              <tr>
                <td>Our products cure problems without taking much of time</td>
                
              </tr>
              <tr>
                <td>Our products cure problems without taking much of time</td>
                
              </tr>
              
            </table>
          </div>
          
        </div>
        <br />
      
      </div>


    </div>

  )
}

export default page