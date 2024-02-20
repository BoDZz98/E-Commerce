import { Col, Row } from "react-bootstrap";
import { ReviewForm } from "./ReviewForm";
import MyRating from "../ui/MyRating";
import { useSelector } from "react-redux";

export function ReviewsTab({ productName }: { productName: string }) {
  const reviews: Array<{ stars: number; desc: string }> = useSelector(
    (state: any) => state.auth.reviews
  );

  return (
    <Row className="w-screen px-28">
      <Col>
        <div className="flex flex-col items-center   gap-y-8">
          <h3 className="place-self-start "> Review for {productName}</h3>

          {reviews.length !== 0 ? (
            reviews.map((review) => (
              <div className="flex flex-col bg-gray-100 rounded-lg p-3 w-full shadow-lg ">
                <h5>Bodzz</h5>
                <MyRating
                  readOnly
                  value={review.stars}
                  changeHandler={() => {}}
                />
                <p>{review.desc}</p>
              </div>
            ))
          ) : (
            <p className="bg-gray-100 px-20 py-5 text-lg font-semibold rounded-lg ">
              No reviews yet
            </p>
          )}
        </div>
      </Col>
      <Col>
        <h3>Leave A Review</h3>
        <ReviewForm />
      </Col>
    </Row>
  );
}
