import React, { useEffect, useState } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ProductReviews = ({ productId }) => {
    const [reviews] = useState([
        { rating: 5, comment: "Amazing product!" },
        { rating: 4, comment: "Very good but a bit expensive." }
    ]);
    // const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Gọi API để lấy đánh giá sản phẩm
        fetch(`/api/products/${productId}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [productId]);

    return (
        <Card className="mt-4">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Reviews
                </Typography>
                {reviews.map((review, index) => (
                    <div key={index} className="mb-4">
                        <Typography variant="h6" className="mb-1">
                            Rating: {review.rating}/5
                        </Typography>
                        <Typography>
                            {review.comment}
                        </Typography>
                    </div>
                ))}
            </CardBody>
        </Card>
    );
};

export default ProductReviews;
