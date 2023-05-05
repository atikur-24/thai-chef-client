import React from 'react';
import React, { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

const Chef = lazy(() => import('../pages/Home/Chef/Chef'));


const Lazyload = () => {
    return (
        <div>
        <Suspense fallback={<Spinner animation="border" variant="danger" />}>
          <Chef />
        </Suspense>
      </div>
    );
};

export default Lazyload;