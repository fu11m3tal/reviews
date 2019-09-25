import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import textbox from '../../../public/textbox.png';
import reportIcon from '../../../public/reportIcon.png';


const MainDiv = window.styled.div`
  width: 608px;
  border-bottom: 1px solid #D3D3D3;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const FlexDiv = window.styled.div`
  display: flex;
`;

//User Div

const UserDiv = window.styled.div`
  display: block;
  width: 96px;
  margin-left: 16px;
  margin-right: 16px;
`;

const InitialsDiv = window.styled.div`
  display: block;
  width: 96px;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const UserVIP = window.styled.div`
  display: flex;
  position: relative;
  width: 20px;
  background-color: #FDAF08;
  padding: 2px 0.5rem;
  z-index: 2;
  font-size: 12px;
  text-align: center;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
  border-radius: 1rem;
  font-weight: 700;
  top: 20px;
  color: #FFFFFF;
  left: 0;
`;

const Username = window.styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow-wrap: break-word;
  width: 80px;
  font-size: 14px;
  font-weight: 500;
  color: #2D333F;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const UserLocation= window.styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow-wrap: break-word;
  width: 80px;
  font-size: 14px;
  color: #6F737B;
  font-weight: 500;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const TextboxNumberReviews = window.styled.span`
  display: inline-flex;  
  font-size: 12px;
  vertical-align: text-top;
  color: #6F737B;
  font-weight: 500;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

//Review Div

const ReviewDiv = window.styled.div`
  display: block;
`;

const ReviewDate = window.styled.span`
  display: inline-flex;  
  color: #2D333F;
  font-size: 14px;
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 400;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewPropertiesDiv = window.styled.div`
  margin-above: 8px;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const ReviewDot = window.styled.div`
  display: inline-flex;
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: #2D333F;
  margin: 4px;
`;

const ReviewNumericalRating = window.styled.span`
  display: inline-flex;
  font-weight: bold;
  color: #DA3743;
  font-size: 14px;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
  margin-right: 2px;
`;

const ReviewProperties = window.styled.span`
  display: inline-flex;
  font-weight: bold;
  color: #2D333F;
  margin-right: 8px;
  font-size: 14px;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const ReviewStyling = window.styled.p`
  color: #2D333F;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewStylingOverflow = window.styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 72px;
  color: #2D333F;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewReportDiv = window.styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 32px;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewReportDivAlternate = window.styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 32px;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewReportContainer = window.styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-left: 4px;
  font-size: 14px;
  color: #6F737B;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const ReviewReadMore = window.styled.a`
  display: inline-flex;
  justify-content: space-between;
  height: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  color: #DA4743;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
  
  :hover {
    color: #DA3743;
    cursor: pointer;
    text-decoration: underline;
  }
`;

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false
    };
    this.handleReadMoreExpand = this.handleReadMoreExpand.bind(this);
  }

  handleReadMoreExpand(e) {
    e.preventDefault();
    this.setState((currentState) => ({
      readMore: !currentState.readMore
    }));

  }

  render () {

    const InitialsCircle = window.styled.div`
      display: flex;
      justify-content: center;
      position: relative;
      background-color: ${this.props.review.initials_background};
      align-items: center;
      height: 48px;
      width: 48px;
      border-radius: 50%;
      color: #FFFFFF;
      text-align: center;
      line-height:3em;
      margin: 0 auto;
      font-size: 16px;
      top: 0px;
      font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
    `;

    const now = moment();
    const dateOfReview = `${this.props.review.date}`;
    const dateDifference = now.diff(dateOfReview, 'days');
    const dateFormat = moment(dateOfReview).format('MMMM Do YYYY');

    return (
      <MainDiv> 
       <FlexDiv>

         
          <UserDiv>
          {this.props.review.vip === 1 ? (<div>
            <InitialsDiv>
              <UserVIP>VIP</UserVIP>
              <InitialsCircle>{this.props.review.user_initials}</InitialsCircle>
            </InitialsDiv>
            </div>) : 
            (<div>
              <InitialsCircle>{this.props.review.user_initials}</InitialsCircle>
            </div>)}
            <Username>{this.props.review.user_name}</Username>
            <UserLocation>{this.props.review.location}</UserLocation>
            <Username>
              <span><img src={textbox} alt="textbox icon"/></span>
              <TextboxNumberReviews>{this.props.review.total_reviews} Reviews</TextboxNumberReviews>
            </Username>
          </UserDiv>

          <ReviewDiv>
            <div>
              <span><StarRatings rating={this.props.review.overall} starDimension="16px" starSpacing="1px" starRatedColor='#DA3743'/></span>
              <ReviewDot></ReviewDot>
              <ReviewDate>{dateDifference <= 1 ? `Dined a day ago` : dateDifference <= 7 ? `Dined ${dateDifference} days ago` : `Dined on ${dateFormat}`}</ReviewDate>
            </div>

            <ReviewPropertiesDiv>
              <ReviewProperties>Overall</ReviewProperties> <ReviewNumericalRating>{this.props.review.overall}</ReviewNumericalRating>
              <ReviewDot></ReviewDot>
              <ReviewProperties>Food</ReviewProperties> <ReviewNumericalRating>{this.props.review.food}</ReviewNumericalRating>
              <ReviewDot></ReviewDot>
              <ReviewProperties>Service</ReviewProperties> <ReviewNumericalRating>{this.props.review.service}</ReviewNumericalRating>
              <ReviewDot></ReviewDot>
              <ReviewProperties>Ambience</ReviewProperties> <ReviewNumericalRating>{this.props.review.ambience}</ReviewNumericalRating>
            </ReviewPropertiesDiv>
            
            {this.props.review.review.length < 200 ? 
            (<div> 
              <ReviewStyling>{this.props.review.review}</ReviewStyling> 

              <ReviewReportDivAlternate>
                <ReviewReportContainer><div><img src={reportIcon} alt="report icon"/>Report</div></ReviewReportContainer>
              </ReviewReportDivAlternate> 
            </div>): 

            (<div>
              {this.state.readMore === false ? 
              (<div>
              <ReviewStylingOverflow>{this.props.review.review}</ReviewStylingOverflow> 

              <ReviewReportDiv>
                <ReviewReadMore onClick={(e)=> this.handleReadMoreExpand(e)}>+ Read more</ReviewReadMore>
                <ReviewReportContainer><div><img src={reportIcon} alt="report icon"/>Report</div></ReviewReportContainer>
              </ReviewReportDiv> 
              </div>) :
              (<div>
                <ReviewStyling>{this.props.review.review}</ReviewStyling> 

                <ReviewReportDiv>
                  <ReviewReadMore onClick={(e)=> this.handleReadMoreExpand(e)}>- Read less</ReviewReadMore>
                  <ReviewReportContainer><div><img src={reportIcon} alt="report icon"/>Report</div></ReviewReportContainer>
                </ReviewReportDiv> 
              </div>)} 
            </div>)}    
          </ReviewDiv>

        </FlexDiv>
      </MainDiv>
    )
  }
}

export default ReviewEntry;
