import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ProductSpecifications = ({ specifications }) => {
    return (
        <Card className="mt-4">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Specifications
                </Typography>
                <ul>
                    {specifications.map((spec, index) => (
                        <li key={index} className="mb-1">
                            {spec.key}: {spec.value}
                        </li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    );
};

export default ProductSpecifications;
