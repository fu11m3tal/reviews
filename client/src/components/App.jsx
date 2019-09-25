import React from 'react';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';
import ReviewSummary from './ReviewSummary.jsx';
import BrandonTextRegular from '../../../public/Fonts/BrandonText-Regular.otf';
import BrandonTextLight from '../../../public/Fonts/BrandonText-Light.otf';
import BrandonTextMedium from '../../../public/Fonts/BrandonText-Medium.otf';
import BrandonTextBold from '../../../public/Fonts/BrandonText-Bold.otf';
import ReactPaginate from 'react-paginate';


const GlobalStyle = styled.createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
    font-family: 'Josefin Sans', sans-serif;
  }
  @font-face {
    font-family: BrandonTextRegular;
    src: url('${BrandonTextRegular}') format('opentype');
  }
  @font-face {
    font-family: BrandonTextLight;
    src: url('${BrandonTextLight}') format('opentype');
  }
  @font-face {
    font-family: BrandonTextMedium;
    src: url('${BrandonTextMedium}') format('opentype');
  }
  @font-face {
    font-family: BrandonTextBold;
    src: url('${BrandonTextBold}') format('opentype');
  }
`;

const ReviewWrapperDiv = window.styled.div`
  display: flex;
  width: 608px;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  position: relative;
  left: 15%;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewPageDiv = window.styled.div`
  display: flex;
  width: 608px;
  justify-content: center;
  flex-direction: row;
  color: #DA3743;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewPageNext = window.styled.div`
  display: flex;
  width: 608px;
  justify-content: center;
  color: #FDAF08;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mongo: [],
      postgres: [],
      reviews: [],
      overallSummaryObj: {
        numberOfResterauntReviews: 0,
        users: 0,
        overallRating: 5,
        overallFoodRating: 5, 
        overallServiceRating: 5,
        overallAmbienceRating: 5,
        overallValueRating: 5,
        overallNoiseLevel: 'Quiet',
        percentWouldRecommend: 100,
        overallFivePercentage: 0,
        overallFourPercentage: 0,
        overallThreePercentage: 0,
        overallTwoPercentage: 0,
        overallOnePercentage: 0
      }
    } 
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getAllReviewsPG = this.getAllReviewsPG.bind(this);

    this.filterReviews = this.filterReviews.bind(this);
  }

  filterReviews() {
    const userReviews = [];
    let numberOfReviews = this.state.reviews.length;
    let sumOverall = 0;
    let sumFood = 0;
    let sumAmbience = 0;
    let sumService = 0;
    let sumValue = 0;
    let noiseQuiet = 0;
    let noiseModerate = 0;
    let noiseEnergetic = 0;
    let averageNoiseLevel= '';
    let percentageRecommendationSum = 0;
    let overallFive = 0;
    let overallFour = 0;
    let overallThree = 0;
    let overallTwo = 0;
    let overallOne = 0;



    this.state.reviews.forEach(review => {
      sumOverall += review.overall;
      sumFood += review.food;
      sumAmbience += review.ambience;
      sumService += review.service;
      sumValue += review.value;
      percentageRecommendationSum += review.would_recommend;
      if(review.overall === 5) {
        overallFive++;
      } else if (review.overall === 4) {
        overallFour++;
      } else if (review.overall === 3) {
        overallThree++;
      } else if (review.overall === 2) {
        overallTwo++;
      } else if (review.overall === 1) {
        overallOne++;
      }
      if (!userReviews.includes(review.user_name)) {
        userReviews.push(review.user_name);
      }
      if (review.noise === 'Quiet') {
        noiseQuiet++;
      } else if (review.noise === 'Moderate') {
        noiseModerate++;
      } else if (review.noise === 'Energetic') {
        noiseEnergetic++;
      } 
    });

    let reviewSummaryStars = sumOverall/numberOfReviews;
    let percentageRecommendation = parseInt((percentageRecommendationSum/numberOfReviews)*100);
    let maxNoiseLevel = Math.max(noiseQuiet, noiseModerate, noiseEnergetic);
    if (noiseEnergetic === maxNoiseLevel) {
      averageNoiseLevel = 'Energetic';
    } else if (noiseModerate === maxNoiseLevel) {
      averageNoiseLevel = 'Moderate';
    } else {
      averageNoiseLevel = 'Quiet';
    }

    this.setState({
      reviews: this.state.reviews,
      overallSummaryObj: {
        numberOfResterauntReviews: numberOfReviews, 
        users: userReviews.length,
        overallRating: reviewSummaryStars,
        overallFoodRating: (sumFood/numberOfReviews).toFixed(1), 
        overallServiceRating: (sumService/numberOfReviews).toFixed(1),
        overallAmbienceRating: (sumAmbience/numberOfReviews).toFixed(1),
        overallValueRating: (sumValue/numberOfReviews).toFixed(1),
        overallNoiseLevel: averageNoiseLevel,
        percentWouldRecommend: percentageRecommendation,
        overallFivePercentage: Number.parseInt((overallFive/numberOfReviews)*100),
        overallFourPercentage: Number.parseInt((overallFour/numberOfReviews)*100),
        overallThreePercentage: Number.parseInt((overallThree/numberOfReviews)*100),
        overallTwoPercentage: Number.parseInt((overallTwo/numberOfReviews)*100),
        overallOnePercentage: Number.parseInt((overallOne/numberOfReviews)*100)
      }
    });
  }

  getAllReviews() {
    axios.get(`/api/restaurant/:restaurant_id/reviews`)
    .then(reviews => {
      console.log('mongo',reviews.data)
      this.setState({reviews: reviews.data}, this.filterReviews)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render () {
    return (
      <div>
        <GlobalStyle />
        <ReviewWrapperDiv>
        {this.state.reviews.length === 0 ? <div></div> : 
        <div>
          <ReviewSummary overallSummary={this.state.overallSummaryObj}/>
          <ReviewList reviews={this.state.reviews} />
          <ReviewPageDiv>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
         </ReviewPageDiv>
        </div>
        }
        </ReviewWrapperDiv>
      </div>
    );
  }
}

export default App;
