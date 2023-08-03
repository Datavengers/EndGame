import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonMap = () => {
    return (
      <section>
        <h2 className="section-title">
          <Skeleton height={30} width={300} />
        </h2>
          <Skeleton height={180} />
      </section>
    );
  };
  export default SkeletonMap;