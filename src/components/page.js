import React from 'react';

import Nav from './navbar';
import ImageSlider from './imageSlider';
import Section from './section';
import Post from './post';
import SmallSlider from './smallSlider';
import Footer from './footer';

import imageUrl from '../assets/images/thumbnails/UweraAndJonas.jpg';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          label: 'Home',
          link: '#home'
        },
        {
          label: 'Portfolio',
          link: '#portfolio'
        },
        {
          label: 'About',
          link: '#about'
        },
        {
          label: 'Contact',
          link: '#contact'
        }
      ],
      sections: [
        {
          id: 'portfolio',
          title: 'Portfolio',
          description: 'Helping you to capture your precious moments and making memories out of it.',
          isDark: false,
          moreWidth: false,
          content: {
            albums: [
              {
                name : 'Uwera & Jonas',
                thumbnailUrl : 'https://i.ibb.co/PG2mNRn/Uwera-And-Jonas.jpg',
                imageAlt: '',
                linkUrl: '#gallery',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/j3tjr7H/09.jpg',
                    altTag: '',
                    text: 'A love story from Lund, Sweden.'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/zSX38ZQ/06.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/QJBN2nd/08.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/XsdPzMz/07.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/NT8wqNN/05.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/zxdL37M/02.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/rK9Y0cJ/10.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/LZkmNsZ/04.jpg',
                    altTag: '',
                    text: ''
                  }

                ]
              },
              {
                name : 'Victoria & Stepan',
                thumbnailUrl : 'https://i.ibb.co/5x6Y1Br/Victoria-And-Stepan.jpg',
                imageAlt: '',
                linkUrl: '#',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/L9n9Phz/03.jpg',
                    altTag: '',
                    text: 'A love story originally from Krasnodar, Russia celebrated in Paris, France.'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/nM2n1xG/01.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/L9n9Phz/03.jpg',
                    altTag: '',
                    text: ''
                  }
                ]
              },
              {
                name : 'Lina & Wang',
                thumbnailUrl : 'https://i.ibb.co/7r8zs5k/Li-Na-And-Wang.jpg',
                imageAlt: '',
                linkUrl: '#',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/9ng7rg4/04.jpg',
                    altTag: '',
                    text: 'A love story originally from Beijing, China celebrated in Paris, France.'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/xCtrcN7/03.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/98LNM4Q/02.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/GPBMkGz/01.jpg',
                    altTag: '',
                    text: ''
                  }
                ]
              },
              {
                name : 'Dima & Sammak',
                thumbnailUrl : 'https://i.ibb.co/gJ7SD0Z/Dina-And-Sammak.jpg',
                imageAlt: '',
                linkUrl: '#',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/4T4Q6xd/01.jpg',
                    altTag: '',
                    text: 'A different type of Love-story where bride and groom flew from different countries and met each other at Copenhagen, Denmark.'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/HX3KNBn/02.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/8spfRN9/03.jpg',
                    altTag: '',
                    text: ''
                  }
                ]
              },
              {
                name : 'Sofia & Kids',
                thumbnailUrl : 'https://i.ibb.co/7XCwRv2/Sofia-And-Kids.jpg',
                imageAlt: '',
                linkUrl: '#',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/KwP9DHY/04.jpg',
                    altTag: '',
                    text: 'An autumn themed photoshoot at Pildammsparken in Malmö, Sweden.'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/z781snv/02.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/qJRbnR7/03.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/TH27X18/01.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/J71z0xG/05.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/ZJ3xBNC/06.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/2WHB5kK/07.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/k218Qs0/08.jpg',
                    altTag: '',
                    text: ''
                  }
                ]
              },
              {
                name : 'Minha Photoshoot',
                thumbnailUrl : 'https://i.ibb.co/PYwCCfm/Minha-Photoshoot.jpg',
                imageAlt: '',
                linkUrl: '#',
                numberOfPhotos: 5,
                photos: [
                  {
                    imageUrl: 'https://i.ibb.co/W6W0PHp/01.jpg',
                    altTag: '',
                    text: 'Smile and the world smiles with you!'
                  },
                  {
                    imageUrl: 'https://i.ibb.co/XCxrcK4/04.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/MVndFSb/02.jpg',
                    altTag: '',
                    text: ''
                  },
                  {
                    imageUrl: 'https://i.ibb.co/4jSw9j9/03.jpg',
                    altTag: '',
                    text: ''
                  }
                ]
              },
            ]
          }
        },
        {
          id: 'about',
          title: 'About',
          description: 'We truly believe in the union of two hearts. Marriage and love, capturing the magical moments between two lovers. Working with different people and cultures makes us happy. Our moto is to build a friendly relationship so that everyone enjoy your lucky day.',
          isDark: true,
          moreWidth: true,
          content: {
            name: 'Asjad Azeem',
            profession: 'Photographer, Cinematographer',
            introduction: 'I have always been interested in capturing emotions, may it be in any form. Weddings bring more joy to me personally because everyone is so happy! I enjoy landscape and street photography as well.',
            imageUrl: 'https://i.ibb.co/PG2mNRn/Uwera-And-Jonas.jpg'
          }
        },
        {
          id: 'contact',
          title: 'Contact',
          description: 'Let\'s talk about your story now',
          isDark: false,
          moreWidth: false,
          content: {
            mainLine: 'Every story is unique in its own way. What makes your story significant than others?',
            buttonText: 'Let\'s talk?',
            buttonLink: 'https://www.facebook.com/thedreamypixels/'
          }
        }
      ],
      mainCarousel: [
        {
          title: 'We would love to tell your story',
          imageUrl: 'https://i.ibb.co/L9n9Phz/03.jpg',
          alt: ''
        },
        {
          title: 'We would love to tell your story',
          imageUrl: 'https://i.ibb.co/ZJ3xBNC/06.jpg',
          alt: ''
        },
        {
          title: 'We would love to tell your story',
          imageUrl: 'https://i.ibb.co/3rwCb8W/03.jpg',
          alt: ''
        },
        {
          title: 'We would love to tell your story',
          imageUrl: 'https://i.ibb.co/zSX38ZQ/06.jpg',
          alt: ''
        },
        {
          title: 'We would love to tell your story',
          imageUrl: 'https://i.ibb.co/W6W0PHp/01.jpg',
          alt: ''
        }
      ],
      reviews: [
        {
          author: 'Uwera Musekura Lundsholm',
          date: 'September 30, 2018',
          text: 'One of the best decisions we could have made during the entire wedding planning process was booking Asjad/Thedreamypixels . Not only did our pictures turn out beautifully - but he was incredibly easy to work with from beginning to end and fantastic. From scheduling meetings, to the last minute pictures we wanted the day of the wedding, he was incredibly flexible and easy going. We highly suggest meeting with Asjad and booking him for any upcoming photo needs you may have - he\'s worth every penny! He was not just a photographer but he became a friend as well. In the future we will recommend him to family and friends.',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        },
        {
          author: 'Sofia Maj',
          date: 'October 1, 2018',
          text: 'It was an amazing experience. We had family photoshoot at the park last weekend/fall theme. Asjad, the photographer is very professional, friendly and engaging and on the top of that he made very nice and quality pictures. We will definitely do it again for life memories <3',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        },
        {
          author: 'Toni Risteski',
          date: 'June 10, 2020',
          text: 'Asjad has a great passion for photography and he has a eye for details.He took photos of our family and he had the talent to capture natural environment and patient with the children to get a good shot. We also got tips/recommendations of what clothes to wear in order to get the most from the colors of the surroundings. And if for some reason the picture is not perfect he has the skills to edit them afterwards so that they still look very natural. Asjad was helpful and clam during the entire time and we are very pleased with the result. We definitely recommend Asjad and we will for sure utilize his skills in the future again.',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        },
        {
          author: 'Thomas Hermansson',
          date: 'June 10, 2020',
          text: 'Asjad is a very talanted photographer. He has helped me both with corporate photoes from events that turned out great. But he has also helped me with family pictures were really nice too. the kids loved him.',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        },
        {
          author: 'Inge Vozel',
          date: 'June 14, 2020',
          text: 'Asjad is a dream to work with. He knows exactly what he\'s doing, gets the job done, and gives quality work. I would love to give him more than 5 stars because he\'s perfect from start to finish!',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        },
        {
          author: 'Sofia Maj',
          date: 'October 1, 2018',
          text: 'It was an amazing experience. We had family photoshoot at the park last weekend/fall theme. Asjad, the photographer is very professional, friendly and engaging and on the top of that he made very nice and quality pictures. We will definitely do it again for life memories <3',
          backgroundImageUrl: 'https://i.ibb.co/ZWmpW59/03.jpg',
          imageAlt: ''
        }
      ],
      contact: {
        address: 'Malmö, Sweden',
        email: 'thedreamypixels@gmail.com',
        phone: '0046-73-486-76-83',
        facebookLink: 'https://www.facebook.com/thedreamypixels/',
        instagramLink: 'https://www.instagram.com/thedreamypixels/',
        emailLink: 'mailto:thedreamypixels@gmail.com',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2253.5515518713914!2d12.997180798966697!3d55.60981802199358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1548544181252'
      },
      currentAlbum: []
    };
  }

  selectCurrentAlbum = (photos) => {
    this.setState({
      currentAlbum: photos
    });
  }

  closeAlbum = () => {
    this.setState({
      currentAlbum: []
    });
  }

  render() {
    return (
      <div>
        <style type="text/css">
        {`
          .gallery-container {
            height: 800px;
            background: #f8f9fa;
            overflow: hidden;
          }
        `}
        </style>
        <Nav menuItems={this.state.menu} />

        <ImageSlider images={this.state.mainCarousel}/>

        {this.state.sections.map((section, _indSection) =>
          <Section
            key={_indSection}
            Name={section.title}
            SectionId={section.id}
            Description={section.description}
            IsDark= {section.isDark}
            MoreWidth= {section.moreWidth}
            Content = {
              <div>
                { section.id === 'portfolio' &&
                  <div className="row">
                    {
                      section.content.albums.map((album, index) =>
                      <Post key= {index}
                        title= {album.name}
                        imageUrl= {album.thumbnailUrl}
                        imageAlt= {album.imageAlt}
                        linkUrl= {album.linkUrl}
                        numberOfPhotos= {album.numberOfPhotos}
                        photos= {album.photos}
                        selectCurrentAlbum={this.selectCurrentAlbum}
                        />
                      )
                    }
                  </div>
                }

                { section.id === 'portfolio' &&
                  this.state.currentAlbum.length > 0 &&
                  <div id="gallery"
                      className="gallery-container">
                      <SmallSlider
                        closeAlbum={this.closeAlbum}
                        photos={this.state.currentAlbum} />
                  </div>
                }

                { section.id === 'about' &&
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <img src={section.content.imageUrl}
                        className="portrait-photo"
                        alt="Photographers photo" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <h2 className="txt-white">{section.content.name}</h2>
                      <span className="meta small-caps">{section.content.profession}</span>
                      <p className="txt-ash-grey">{section.content.introduction}</p>
                    </div>
                  </div>
                }

                { section.id === 'contact' &&
                  <div className="text-center">
                    <p className="animate-box fadeInUp animated">{ section.content.mainLine }</p>
                    <p className="animate-box fadeInUp animated"><a href={ section.content.buttonLink } target="_blank" className="btn btn-primary btn-lg">{ section.content.buttonText }</a></p>
                  </div>
                }
              </div>
            }
            />
        )}

        <SmallSlider
          reviews={this.state.reviews}
          cssClass="limitHeight" />

        <Footer
          contactData={this.state.contact}/>
      </div>
    );
  }
}

export default Page;
